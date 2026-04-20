# 订单列表接口 {#title}

本接口用于查询商户自己的订单列表，用于对账或同步订单状态等。

``` http
POST /api/merchant/orders
```


## 请求 {#request}

| 参数 | 说明 | 必须 | 类型 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `pid` | 商户 ID | ✅ | Integer | `1001` | - |
| `offset` | 分页偏移量 | ✅ | Integer | `0` | 从第几条记录开始查询，默认为 0，从 0 开始 |
| `limit` | 分页大小 | ✅ | Integer | `50` | 每页查询多少条记录，最大不超过 50 |
| `status` | 订单状态 | - | Integer | `1` | 详见 “[订单状态枚举](/rules/order-status)” |
| `timestamp` | 当前 Unix 时间戳 | ✅ | String | `1721206072` | 整数秒级 Unix 时间戳 |
| `sign` | 签名字符串 | ✅ | String | - | 详见 “[签名算法](/sign)” |
| `sign_type` | 签名类型 | ✅ | String | `RSA` | | 默认为 RSA，详见 “[签名算法](/sign)” |


## 响应 {#response}

| 参数 | 说明 | 类型 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: |
| `code` | 状态码 | Integer | `0` | 0 为成功，其它值为失败 |
| `msg` | 错误信息 | String | - | 失败时返回原因或成功返回提示信息 |
| `data` | 订单列表数据 | Array\<Object\> | - | 具体信息参考 “[订单查询接口](/pay/query)” |
| `timestamp` | 当前时间戳 | String | `1721206072` | 整数秒级 Unix 时间戳 |
| `sign` | 签名字符串 | String | - | 详见 “[签名算法](/sign)” |
| `sign_type` | 签名类型 | String | `RSA` | 默认为 RSA，详见 “[签名算法](/sign)” |
