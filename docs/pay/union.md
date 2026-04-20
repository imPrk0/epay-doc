# 统一下单支付接口 {#title}

本接口用于向服务器后端发起支付请求，会返回支付参数（如二维码链接、跳转 URL 等）。

``` http
POST /api/pay/create
```


## 请求 {#request}

| 参数 | 说明 | 必须 | 类型 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `pid` | 商户 ID | ✅ | Integer | `1001` | - |

接口类型	method	是	String	web	接口类型列表
设备类型	device	否	String	pc	仅通用网页支付需要传 设备类型列表
支付方式	type	是	String	alipay	支付方式列表
商户订单号	out_trade_no	是	String	20160806151343349	
异步通知地址	notify_url	是	String	http://www.pay.com/notify_url.php	服务器异步通知地址
跳转通知地址	return_url	否	String	http://www.pay.com/return_url.php	页面跳转通知地址
商品名称	name	是	String	VIP会员	如超过127个字节会自动截取
商品金额	money	是	String	1.00	单位：元，最大2位小数
用户IP地址	clientip	是	String	192.168.1.100	用户发起支付的IP地址
业务扩展参数	param	否	String	没有请留空	支付后原样返回
被扫支付授权码	auth_code	否	String		仅被扫支付需要传
用户Openid	sub_openid	否	String		仅JSAPI支付需要传
应用AppId	sub_appid	否	String		仅JSAPI支付(微信)需要传
是否小程序	is_applet	否	Int		仅JSAPI支付需要传，1:是小程序
自定义进件商户ID	merchant_id	否	Int		对应进件商户列表的ID，未进件请勿传
自定义通道ID	channel_id	否	Int		对应自定义子通道的ID
买家身份证号	cert_no	否	String		可限制指定买家，仅支持支付宝官方接口
买家真实姓名	cert_name	否	String		可限制指定买家，仅支持支付宝官方接口
买家最小年龄	min_age	否	Int		可限制买家年龄，仅支持支付宝官方接口
手续费承担方	fee_mode	否	Int	0:商家承担,1:买家承担	不传以商户后台配置为准
当前时间戳	timestamp	是	String	1721206072	10位整数，单位秒
签名字符串	sign	是	String		参考签名规则
签名类型	sign_type	是	String	RSA	默认为RSA


## 响应 {#response}

| 参数 | 说明 | 类型 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: |
| `code` | 状态码 | Integer | `0` | 0 为成功，其它值为失败 |
| `msg` | 错误信息 | String | - | 失败时返回原因 |
| `trade_no` | 平台订单号 | String | `20160806151343349` | 平台内部的订单号 |
| `pay_type` | 发起支付类型 | String | `jump` | 发起支付类型说明 |
| `pay_info` | 发起支付参数 | String | `weixin://wxpay/bizpayurl?pr=04IPMKM` | 根据不同的发起支付类型，返回内容也不一样 |
| `timestamp` | 当前时间戳 | String | `1721206072` | 整数秒级 Unix 时间戳 |
| `sign` | 签名字符串 | String | - | 详见 “[签名算法](/sign)” |
| `sign_type` | 签名类型 | String | `RSA` | 默认为 RSA，详见 “[签名算法](/sign)” |


### 响应示例 {#response-example}

- **二维码支付**: `qrcode`<br />微信二维码 Native 支付，返回二维码链接，商户需将链接转换成二维码展示给用户扫码支付。
  ``` json{4,5}
  {
      "code": 0,
      "trade_no": "20160806151343349",
      "pay_type": "qrcode",
      "pay_info": "weixin://wxpay/bizpayurl?pr=04IPMKM"
  }
  ```
- **JS 支付参数信息**: `jsapi`<br />如网页版 JS API 支付的参数信息等（包括微信小程序）。
  ``` json{4,5}
  {
      "code": 0,
      "trade_no": "20160806151343351",
      "pay_type": "jsapi",
      "pay_info": "{\"appId\":\"wx2421b1c4370ec43b\",\"timeStamp\":\"1395712654\",\"nonceStr\":\"e61463f8efa94090b1f366cccfbbb444\",\"package\":\"prepay_id=up_wx21201855730335ac86f8c43d1889123400\",\"signType\":\"RSA\",\"paySign\":\"oR9d8PuhnIc+YZ8cBHFCwfgpaK9gd7vaRvkYD7rthRAZ\"}"
  }
  ```
- **付款码支付**: `scan`<br />仅限<font coor="red">**付**款码</font>支付完成后，返回支付订单信息。
  ``` json{4,5}
  {
      "code": 0,
      "trade_no": "2024072320222180092",
      "pay_type": "scan",
      "pay_info": "{\"type\":\"wxpay\",\"trade_no\":\"2024072320222180092\",\"api_trade_no\":\"4200002345202407238253501450\",\"buyer\":\"o9uAcc6VlZxhcujpKIqQuWWoDQc\",\"money\":\"1.00\"}"
  }
  ```
- **微信小程序插件支付**: `wxplugin`<br />返回要拉起的微信小程序插件参数，用于未开通支付能力的小程序发起支付。
  ``` json{4,5}
  {
      "code": 0,
      "trade_no": "2024072320222180018",
      "pay_type": "wxplugin",
      "pay_info": "{\"appId\":\"wxc237fd59fbb634ae\",\"supplierId\":\"123456\",\"shopId\":\"123456\",\"orderId\":\"2024072320222180092\"}"
  }
   ```
- **APP 拉起微信小程序支付**: `wxapp`<br />返回要拉起的微信小程序和路径，用于 APP 内拉起微信小程序支付。
  ``` json{4,5}
  {
      "code": 0,
      "trade_no": "2024072320222180018",
      "pay_type": "wxapp",
      "pay_info": "{\"appId\":\"wxbb48bac536053072\",\"miniProgramId\":\"gh_bf9cd8cf50b5\",\"path\":\"pages/fromAppPay/index?orderid=123456\",\"extraData\":\"\"}"
  }
  ```

发起支付类型说明

发起支付类型	描述
jump	返回支付跳转url
html	返回html代码，用于支付跳转
qrcode	返回支付二维码
urlscheme	返回微信/支付宝小程序跳转url scheme
jsapi	返回用于发起JSAPI支付的参数
app	返回用于发起APP支付的参数
scan	付款码支付成功,返回支付订单信息
wxplugin	返回要拉起的微信小程序插件参数，用于未开通支付能力的小程序发起支付，
wxapp	返回要拉起的微信小程序和路径，用于APP内拉起微信小程序支付

其他说明：

代码中需根据接口返回的pay_type值来展示具体的支付页面，例如扫码页面等。如果不懂怎么展示支付页面，可在method传入jump，这样pay_type就只会返回jump，直接跳转支付即可。
付款码支付可不传支付类型type字段，会根据auth_code的数字自动判断支付类型。
微信小程序插件支付，不同支付平台拉起支付方式不一样，可联系客服获取对接小程序插件的文档。
APP拉起微信小程序可参考微信官方文档。
