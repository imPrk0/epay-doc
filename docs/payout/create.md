<script setup lang="ts">
import Image from '../components/Image.vue';
</script>

# 转账发起接口 {#title}

本接口用于发起代付转账。

``` http
POST /api/transfer/submit
```

::: info 💡 确保有调用权限
你需要在 “商户后台” - “账户中心” - “<a href="/user/#/account/settings" target="_blank">账户设置</a>” - “联系方式与功能设置” 中，且开启 “代付 API 接口” 功能并保存，否则将无法调用此接口。

<Image src="payout.webp" />

> 如果没有找到 “代付 API 接口”，那么说明本站暂未开启代付功能。
:::


## 请求 {#request}

| 参数 | 说明 | 必须 | 类型 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `pid` | 商户 ID | ✅ | Integer | `1001` | - |
| `type` | 转账方式 | ✅ | String | `alipay` | 转账方式列表，详见 “[转账方式枚举](/rules/transfer-type)” |
| `account` | 收款方账号 | ✅ | String | `alipay@example.com` | 转账方式账号，如：支付宝账号 / 微信 OpenId / 银行卡号 |
| `name` | 收款方姓名 | - | String | `张三` | 传入则校验账号与该姓名是否匹配 |
| `money` | 转账金额 | ✅ | String | `1.00` | 单位：元 |
| `remark` | 转账备注 | - | String | - | - |
| `out_biz_no` | 转账交易号 | - | String | `2016080615134334917` | 传入后可避免出现重复请求转账 |
| `bookid` | 安全发账本 ID | - | String | - | 仅支付宝安全发转账可以传入 |
| `timestamp` | 当前 Unix 时间戳 | ✅ | String | `1721206072` | 整数秒级 Unix 时间戳 |
| `sign` | 签名字符串 | ✅ | String | - | 详见 “[签名算法](/sign)” |
| `sign_type` | 签名类型 | ✅ | String | `RSA` | | 默认为 RSA，详见 “[签名算法](/sign)” |
