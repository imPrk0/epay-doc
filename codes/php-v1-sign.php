<?php
/**
 * 生成易支付签名
 * @param array $params 请求的所有参数
 * @param string $key 密钥
 * @return string MD5 签名
 */
function getSign($params, $key) {
    ksort($params);
    reset($params);

    $sign = '';
    foreach ($params as $name => $value) {
        if (in_array($name, ['sign', 'sign_type']) || empty($value)) continue;
        $sign .= $name . '=' . $value . '&';
    }

    return md5(substr($sign, 0, -1) . $key);
}
