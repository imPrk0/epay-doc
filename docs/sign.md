# 签名算法 {#title}

易支付规范文档分为 V1 版与强化后的 V2 版，V1 传统版本为早期易支付初期为了方便快速接入而设计，V2 版本在 V1 的基础上进行了全面升级，增加了更多功能，提升了安全性，建议新接入商户使用 V2 版本接口。V2 接口改用全新的接口地址，支持退款、代付等功能，而传统的 V1 接口使用 `submit.php` 和 `mapi.php` 提交订单。

::: info 选用建议
目前，部分老程序依然只支持 V1 版本接口，V1 版本接口仍然可用，但不再进行维护和升级，后续将逐步淘汰 V1 版本接口。
:::


## 获得预验签字符串 {#pre-sign}

无论是 V1 版还是 V2 版本接口，签名算法的第一步都是对请求参数进行排序，规则为：

1. **排序**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

首先，将所有发送或接收到的参数按照，按照参数名的 ASCII 码从小到大字排序 (a-z)。

| 排序前 | 值 | 首字母 ASCII 码 |
| :---: | :---: | :---: |
| `phone` | `18888888888` | `112` |
| `email` | `188@example.com` | `101` |
| `sign` | `abcdefghijklmn12345678` | `115` |

按照 ASCII 码排序后得出：

| 排序后 | 值 | 首字母 ASCII 码 |
| :---: | :---: | :---: |
| `email` | `188@example.com` | `101` |
| `phone` | `18888888888` | `112` |
| `sign` | `abcdefghijklmn12345678` | `115` |

</div>

2. **排除**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

在设计之初，要同时兼顾请求与响应，所以在规范中，`sign`、`sign_type` 与空值不参与签名，要将这些值排除。

| 排除后 | 值 |
| :---: | :---: |
| `email` | `188@example.com` |
| `phone` | `18888888888` |

</div>

3. **拼接**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

将排序后的参数拼接成 URL 键值对格式，也就是将参数和值用 `=` 连接，再将不同参数之间用 `&` 连接，得到待签名字符串：

```
email=188@example.com&phone=18888888888
```

**⚠️ 注意顺序！**

::: warning ⚠️ 注意不要 URL 编码
在执行时，**请勿对参数进行 URL 编码**，部分语言的自带函数或库进行键值对的形式时，会默认对参数进行 URL 编码，这时需要注意关闭 URL 编码功能，否则会导致签名失败。

所以，建议使用字符串拼接。
:::

</div>


## 请求加签 {#request}

> 对商户的客户端向本平台发起的接口请求，需要进行签名。

1. **获得预验签字符串**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

请先通过 “[获得预验签字符串](#pre-sign)” 进行排序。

</div>

2. **验证**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

使用 “**商户私钥**”，对上一步获得的待验签字符串计算 RSA 签名 _(SHA256WithRSA)_，即可得到签名。

</div>

**代码示例**：

::: code-group
<<< @/../codes/php-v2-sign.php [PHP]
:::


## 响应与被动验签 {#response}

> 针对本平台接口向用户客户端返回的数据，以及异步通知回调的数据，需进行验签。

1. **检查**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

如果服务端没有给你返回参数或者没有返回 `sign` 或 `timestamp` 时间参数，则直接验签失败。

::: warning ⚠️ 注意
如果 `timestamp` 时间参数距离当前时间超过 5 分钟 _(300 秒)_，则验签失败，可能是重放攻击或者请求被篡改了。
:::

</div>

2. **获得预验签字符串**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

请先通过 “[获得预验签字符串](#pre-sign)” 进行排序。

</div>

3. **签名**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

使用 “**平台公钥**”，根据签名字符串 `sign`，对上一步获得的 “预验签字符串” 进行 RSA 验签 (SHA256WithRSA)。

</div>

**代码示例**：

::: code-group
<<< @/../codes/php-v2-verify.php [PHP]
:::


## 传统 V1 版本 MD5 签名算法 {#sign-md5}

1. **获得预验签字符串**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

请先通过 “[获得预验签字符串](#pre-sign)” 进行排序。

</div>

2. **MD5**

<div style="margin-top: -1rem; margin-left: 1.3rem;">

再将拼接好的字符串后直接补充商户密钥 Key (商户密钥前不要携带 `&`) 进行 MD5 加密得出 sign 签名参数。

> 假设你的商户密钥 Key 是：`abcd1234`，拼接如下字符串后进行 32 位小写 MD5 运算：

<font color="green">email=188@example.com&phone=18888888888</font><font color="red">abcd1234</font>

**⚠️ 注意，MD5 的结果为小写。**

</div>

**代码示例**：

::: code-group
<<< @/../codes/php-v1-sign.php [PHP]
<<< @/../codes/typescript-v1-sign.ts [TypeScript]
<<< @/../codes/javascript-v1-sign.js [JavaScript]
:::
