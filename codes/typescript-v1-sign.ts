import crypto from 'crypto';

/**
 * MD5 加密
 * @param {string} str 加密前的字符串
 * @return {string} 加密后的 MD5 字符串
 */
const md5 = (str: string): string => crypto.createHash('md5').update(str, 'utf8').digest('hex');

/**
 * 生成易支付签名
 * @param {Record<string, string | number>} params 请求的所有参数
 * @param {string} key 密钥
 * @return {string} MD5 签名
 */
const getSign = (params: Record<string, string | number>, key: string): string => {
    const sortedKeys: string[] = Object.keys(params).sort();

    let sign: string = '';

    for (const name of sortedKeys) {
        const value = params[name];
        if (['sign', 'sign_type'].includes(name) || !value) continue;
        sign += `${name}=${value}&`;
    }

    return md5(`${sign.slice(0, -1)}${key}`);
}
