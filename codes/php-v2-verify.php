<?php
/**
 * 生成易支付验证用签名
 * @param array $params 请求的所有参数
 * @param string $sign 签名
 * @return boolean 验证是否通过
 */
function getSign($params, $sign) {
    ksort($params);

    $sign = '';
    foreach ($params as $name => $value) {
        if (is_array($value) || in_array($name, ['sign', 'sign_type']) || empty($value)) continue;
        $sign .= $name . '=' . $value . '&';
    }

    // 平台公钥，注意是平台的公！钥！
    $platformPublicKey = file_get_contents(__DIR__ . '/platform_public_key.pem');

    $sign = substr($sign, 0, -1);

    $publicKey = openssl_get_publickey(
        implode("\n", [
            '-----BEGIN PUBLIC KEY-----',
            wordwrap($platformPublicKey, 64, "\n", true),
            '-----END PUBLIC KEY-----'
        ])
    );

    if (!$publicKey) throw new \Exception('签名失败，平台公钥错误');
    return 1 === openssl_verify($data, $base64_decode($sign), $publicKey, OPENSSL_ALGO_SHA256);
}

// ------------------------------------------------------------------- //

// 从客户端请求到的所有参数
$params = $_POST;

// 如果没有东西或没有时间，则直接验签失败
if (empty($params) || empty($params['timestamp']) || empty($params['sign'])) exit('非法请求！');

// 判断时间
$timestamp = (int) $params['timestamp'];
if (300 < abs(time() - $timestamp)) exit('非法请求：请求过期！');

// 验签
$sign = $params['sign'];
if (!getSign($params, $sign)) exit('非法请求！');

// 验签成功，继续处理业务逻辑
echo '验签成功！' . json_encode($params);
