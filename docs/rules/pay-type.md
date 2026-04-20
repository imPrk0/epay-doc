# 支付类型枚举 {#title}

支付类型为 String 字符串类型，具体值和含义如下：

| 状态 | 说明 | 参数说明 |
| :---: | :--- | :--- |
| `web` | 通用网页支付 | 根据 [设备类型](./device-type) 自动判断，返回跳转 URL 或二维码或小程序跳转 URL 等 |
| `jump` | 跳转支付 | 仅会返回跳转 URL |
| `jsapi` | JSAPI 支付 | 小程序内支付使用，仅返回 JSAPI 支付参数，需传入 `sub_openid` 和 `sub_appid` |
| `app` | APP 支付 | iOS / 安卓 APP 内支付使用，仅返回 APP 支付参数或拉起小程序支付所用参数 |
| `scan` | 付款码支付 | 需传入 `auth_code`，支付成功后返回订单信息 |
| `applet` | 小程序支付 | 仅在微信小程序内使用，返回微信小程序插件参数或跳转小程序参数 |


## 代码示例 {#example}

::: code-group
<<< @/../codes/php-pay-type-enum.php#snippet [PHP]
<<< @/../codes/typescript-pay-type-enum.ts#snippet [TypeScript]
:::
