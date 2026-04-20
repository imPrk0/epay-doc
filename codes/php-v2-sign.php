<?php
/**
 * 生成易支付签名
 * @param array $params 请求的所有参数
 * @return string 签名
 */
function getSign($params) {
    ksort($params);

    $sign = '';
    foreach ($params as $name => $value) {
        if (is_array($value) || in_array($name, ['sign', 'sign_type']) || empty($value)) continue;
        $sign .= $name . '=' . $value . '&';
    }

    // 商户私钥，注意是商户的私！钥！
    $merchantPrivateKey = file_get_contents(__DIR__ . '/private_key.pem');

    $sign = substr($sign, 0, -1);

    $privateKey = openssl_get_privatekey(
        implode("\n", [
            '-----BEGIN PRIVATE KEY-----',
            wordwrap($merchantPrivateKey, 64, "\n", true),
            '-----END PRIVATE KEY-----'
        ])
    );

    if (!$privateKey) throw new \Exception('签名失败，商户私钥错误');
    openssl_sign($data, $sign, $privateKey, OPENSSL_ALGO_SHA256);
    return base64_encode($sign);
}

// ------------------------------------------------------------------- //

// 请求参数，需要签名
$params = [
    'a' => '1',
    'b' => '2',
    'c' => '3',
    'pid' => '1234'
];

// 签名时必须保证要有整数秒级 Unix 时间戳
$params['timestamp'] = (string) time();

// 获取签名，以及签名是 RSA
$params['sign'] = getSign($params);
$params['sign_type'] = 'RSA';

// 直接请求即可
