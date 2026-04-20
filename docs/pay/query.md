# 订单查询接口 {#title}

本接口用于查询订单信息与状态。

``` http
POST /api/pay/query
```


## 请求 {#request}

| 参数 | 说明 | 类型 | 必须 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :----------: |
| `pid` | 商户 ID | Integer | ✅ | 1001 | - |
| `trade_no` | 平台订单号 | String | OR | 20160806151343349 | 与 **商户订单号** 二选一 |
| `out_trade_no` | 商户订单号 | String | OR | 20160806151343351 | 与 **平台订单号** 二选一 |
| `timestamp` | 当前 Unix 时间戳 | String | ✅ | 1721206072 | 整数秒级 Unix 时间戳 |
| `sign` | 签名字符串 | String | ✅ | - | 参考 [签名算法](/sign) |
| `sign_type` | 签名类型 | String | ✅ | RSA | 默认为 RSA |


## 响应 {#example}

| 参数 | 说明 | 类型 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :----------: |
| `code` | 返回状态码 | Integer | `0` | `0` 为成功，其他值均为失败 |
| `msg` | 失败时返回的错误信息 | String | - | 仅当 `code` 不为 `0` 时返回 |
| `trade_no` | 平台订单号 | String | 20160806151343349 | 易支付平台的订单号 |
| `out_trade_no` | 商户订单号 | String | 20160806151343351 | 商户系统的订单号 |
| `api_trade_no` | 接口订单号 | String | 40001249985198893 | 微信 / 支付宝等接口返回的单号 |
| `type` | 支付方式 | String | alipay | 支付方式列表 |
| `status` | 支付状态 | Integer | `1` | 详见 “[订单状态枚举](/rules/order-status)” |
| `pid` | 商户 ID | Integer | 1001 | - |
| `addtime` | 订单创建时间 | String | 2024-07-01 16:47:32 | - |
| `endtime` | 订单完成时间 | String | 2024-07-01 16:49:24 | 仅订单完成时返回 |
| `name` | 商品名称 | String | VIP会员 | - |
| `money` | 商品金额 | String | 1.00 | 单位：元，最大2位小数 |
| `refundmoney` | 已退款金额 | String | - | 仅部分退款情况才返回 |
| `param` | 业务扩展参数 | String | - | 支付后原样返回 |
| `buyer` | 支付用户标识 | String | - | 一般为 openid |
| `clientip` | 支付用户 IP | String | - | - |
| `timestamp` | 当前时间戳 | String | 1721206072 | 10位整数，单位秒 |
| `sign` | 签名字符串 | String | - | 参考签名规则 |
| `sign_type` | 签名类型 | String | RSA | 默认为 RSA |
