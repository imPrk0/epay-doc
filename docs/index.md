<script setup lang="ts">
import Image from './components/image.vue';
</script>

# 接口说明 {#title}

易支付接口说明文档，你可在此处找到如何调用易支付接口的相关信息，包括接口协议、签名算法、错误码等内容。


## 协议规则 {#protocol}

接口的 [请求](#protocol-request) 与 [响应](#protocol-response) 均使用 **UTF-8 编码**，商户在使用过程中请确保请求与响应的字符编码均为 UTF-8，以避免出现乱码等问题。


### 请求 {#protocol-request}

发送请求时，统一使用表单请求。

**也就是说，你的 Content-Type 必须是 “`application/x-www-form-urlencoded`”。**

- **响应体内容示例**
  <font color="red">param1</font>=<font color="green">value1</font>&<font color="red">param2</font>=<font color="green">value2</font>&<font color="red">param3</font>=<font color="green">value3</font>

- **完整 HTTP 请求示例**
  ``` http
  POST /api/v2/pay HTTP/1.1
  Host: api.epay.com
  Content-Type: application/x-www-form-urlencoded

  param1=value1&param2=value2&param3=value3
  ```


### 响应 {#protocol-response}

服务端一定会使用 JSON 响应体以返回数据（响应头 Content-Type 是 “`application/json`”）。


## 签名算法 {#sign}

V2 版本的接口全面使用银行级密码学加解密算法 **SHA256WithRSA**，而传统 V1 接口则使用 MD5 简单签名算法。

> V2 接口新增 `timestamp` 入参和返回值用于校验时间戳。


### 获取 RSA 密钥对 {#sign-rsa}

在 “商户后台” - “账户中心” - “<a href="/user/#/account/api-info" target="_blank">API 信息</a>” 页面，“V1 MD5 签名方式” 的 “MD5 密钥” 是传统 V1 版本的接口，“V2 RSA 签名方式” 中的是 V2 版本接口的密钥，二者不通用，非必要请勿混淆使用。

::: details 获取指引

> 💡 点击可放大图片。

| 第一步 | 第二步 |
| :---: | :---: |
| <Image src="v2-step1.webp" /> | <Image src="v2-step2.webp" /> |
| 生成 RSA 密钥对 | 确认生成 |
||
| 第三步 | 第四步 |
| <Image src="v2-step3.webp" /> | <Image src="v2-step4.webp" /> |
| 注意保存 “商户私钥” | 关闭 |

:::
