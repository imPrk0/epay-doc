# 跳转支付接口 {#title}

本接口用于用户前台直接发起支付，支持 form 表单跳转或 URL 拼接地址跳转。

``` http
POST /api/pay/submit
```

::: info 注意
本接口同时支持 GET 请求，但不推荐，有被劫持的可能性。
:::


## 请求 {#request}

::: info 收银台支付模式
支付方式 “`type`” 如果不传的话，则会跳转至收银台支付模式，用户可在收银台自主选择支付方式，但不能修改金额，订单的回调照常。
:::

| 参数 | 说明 | 必须 | 类型 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `pid` | 商户 ID | ✅ | Integer | `1001` | - |
| `type` | 支付方式 | - | String | `alipay` | 支付方式列表，详见 “[支付方式枚举](/rules/pay-methods)” |
| `out_trade_no` | 商户订单号 | ✅ | String | `20160806151343349` | 商户系统内部订单号，要求唯一 |
| `notify_url` | 异步通知地址 | ✅ | String | `https://pay.example.com/pay/notify` | 服务器异步通知地址 |
| `return_url` | 跳转通知地址 | ✅ | String | `https://pay.example.com/pay/return` | 支付成功后跳转地址 |
| `name` | 商品名称 | ✅ | String | `VIP 会员` | 如超过 127 个字节会自动截取 |
| `money` | 商品金额 | ✅ | String | `1.00` | 单位：元，最大 2 位小数 |
| `param` | 业务扩展参数 | - | String | - | 没有请留空，支付后原样返回 |
| `merchant_id` | 自定义进件商户 ID | - | Int | - | 对应进件商户列表的 ID，未进件请勿传 |
| `channel_id` | 自定义通道 ID | - | Int | - | 对应自定义子通道的 ID，未配置请勿传 |
| `cert_name` | 买家真实姓名 | - | String | - | 可限制指定买家，仅支持支付宝官方接口 |
| `cert_no` | 买家身份证号 | - | String | - | 可限制指定买家，仅支持支付宝官方接口 |
| `min_age` | 买家最小年龄 | - | Integer | - | 可限制买家年龄，仅支持支付宝官方接口 |
| `fee_mode` | 手续费承担方 | - | Int | `1` | `0`: 商家承担, `1`: 买家承担，不传以商户后台配置为准 |
| `timestamp` | 当前 Unix 时间戳 | ✅ | String | `1721206072` | 整数秒级 Unix 时间戳 |
| `sign` | 签名字符串 | ✅ | String | - | 详见 “[签名算法](/sign)” |
| `sign_type` | 签名类型 | ✅ | String | `RSA` | | 默认为 RSA，详见 “[签名算法](/sign)” |
