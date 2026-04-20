# 跳转支付接口 {#title}

此接口可用于用户前台直接发起支付，使用form表单跳转或拼接成url跳转。

``` http
POST /api/pay/submit
```

::: info 注意
本接口同时支持 GET 请求，但不推荐，有被劫持的可能性。
:::


## 请求 {#request}

字段名	变量名	必填	类型	示例值	描述
商户ID	pid	是	Int	1001	
支付方式	type	是	String	alipay	支付方式列表
商户订单号	out_trade_no	是	String	20160806151343349	
异步通知地址	notify_url	是	String	http://www.pay.com/notify_url.php	服务器异步通知地址
跳转通知地址	return_url	是	String	http://www.pay.com/return_url.php	页面跳转通知地址
商品名称	name	是	String	VIP会员	如超过127个字节会自动截取
商品金额	money	是	String	1.00	单位：元，最大2位小数
业务扩展参数	param	否	String	没有请留空	支付后原样返回
自定义进件商户ID	merchant_id	否	Int		对应进件商户列表的ID，未进件请勿传
自定义通道ID	channel_id	否	Int		对应自定义子通道的ID
买家身份证号	cert_no	否	String		可限制指定买家，仅支持支付宝官方接口
买家真实姓名	cert_name	否	String		可限制指定买家，仅支持支付宝官方接口
买家最小年龄	min_age	否	Int		可限制买家年龄，仅支持支付宝官方接口
手续费承担方	fee_mode	否	Int	0:商家承担,1:买家承担	不传以商户后台配置为准
当前时间戳	timestamp	是	String	1721206072	10位整数，单位秒
签名字符串	sign	是	String		参考签名规则
签名类型	sign_type	是	String	RSA	默认为RSA

其他说明：

支付方式（type）不传会跳转到收银台支付
