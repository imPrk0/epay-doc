# 商户信息接口 {#title}

本接口用于查询商户自己的信息。

``` http
POST /api/merchant/info
```


## 请求 {#request}

| 参数 | 说明 | 必须 | 类型 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `pid` | 商户 ID | ✅ | Integer | `1001` | - |
| `timestamp` | 当前 Unix 时间戳 | ✅ | String | `1721206072` | 整数秒级 Unix 时间戳 |
| `sign` | 签名字符串 | ✅ | String | - | 详见 “[签名算法](/sign)” |
| `sign_type` | 签名类型 | ✅ | String | `RSA` | | 默认为 RSA，详见 “[签名算法](/sign)” |


## 响应 {#response}

| 参数 | 说明 | 类型 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: |
| `code` | 状态码 | Integer | `0` | 0 为成功，其它值为失败 |
| `msg` | 错误信息 | String | - | 失败时返回原因或成功返回提示信息 |
| `pid` | 商户 ID | Integer | `1001` | - |
| `status` | 商户状态 | Integer | `1` | 详见 “[商户状态枚举](/rules/merchant-status)” |
| `pay_status` | 支付状态 | Integer | `1` | 0：关闭，1：开启 |
| `settle_status` | 结算状态 | Integer | `1` | 0：关闭，1：开启 |
| `money` | 商户余额 | String | `50.00` | 单位：元 |
| `settle_type` | 结算方式 | Integer | `1` | 详见 “[结算方式枚举](/rules/settle-type)” |
| `settle_account` | 结算账户 | String | `alipay@example.com` | - |
| `settle_name` | 结算账户姓名 | String | `张三` | - |
| `order_num` | 订单总数量 | Integer | `10` | - |
| `order_num_today` | 今日订单数量 | Integer | `3` | - |
| `order_num_lastday` | 昨日订单数量 | Integer | `2` | - |
| `order_money_today` | 今日订单收入 | String | `45.00` | 单位：元 |
| `order_money_lastday` | 昨日订单收入 | String | `35.00` | 单位：元 |
| `timestamp` | 当前时间戳 | String | `1721206072` | 整数秒级 Unix 时间戳 |
| `sign` | 签名字符串 | String | - | 详见 “[签名算法](/sign)” |
| `sign_type` | 签名类型 | String | `RSA` | 默认为 RSA，详见 “[签名算法](/sign)” |


### 响应示例 {#response-example}

``` json
{
    "code": 0,
    "msg": "",
    "pid": 1001,
    "status": 1,
    "pay_status": 1,
    "settle_status": 1,
    "money": "50.00",
    "settle_type": 1,
    "settle_account": "alipay@example.com",
    "settle_name": "张三",
    "order_num": 10,
    "order_num_today": 3,
    "order_num_lastday": 2,
    "order_money_today": "45.00",
    "order_money_lastday": "35.00",
    "timestamp": "1721206072",
    "sign": "abcd1234ef567890...",
    "sign_type": "RSA"
}
```
