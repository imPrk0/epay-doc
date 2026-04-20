# 跳转支付接口 {#title}

此接口可用于用户前台直接发起支付，使用form表单跳转或拼接成url跳转。

``` http
POST /submit.php
```

::: info 注意
本接口同时支持 GET 请求，但不推荐，有被劫持的可能性。
:::


## 请求 {#request}

字段名	变量名	必填	类型	示例值	描述
商户 ID	pid	是	Int	1001	
支付方式	type	否	String	alipay	支付方式列表
商户订单号	out_trade_no	是	String	20160806151343349	
异步通知地址	notify_url	是	String	http://www.pay.com/notify_url.php	服务器异步通知地址
跳转通知地址	return_url	是	String	http://www.pay.com/return_url.php	页面跳转通知地址
商品名称	name	是	String	VIP会员	如超过 127 个字节会自动截取
商品金额	money	是	String	1.00	单位：元，最大 2 位小数
业务扩展参数	param	否	String	没有请留空	支付后原样返回
签名字符串	sign	是	String	202cb962ac59075b964b07152d234b70	MD5 签名算法
签名类型	sign_type	是	String	MD5	默认为 MD5

其他说明：

支付方式（type）不传会跳转到收银台支付
