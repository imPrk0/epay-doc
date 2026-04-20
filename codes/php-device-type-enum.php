<?php
// #region snippet
/**
 * 设备类型枚举
 * @type String
 */
enum DeviceType: string {
    case PC = 'pc'; // 电脑浏览器 (默认)
    case Mobile = 'mobile'; // 手机浏览器
    case QQ = 'qq'; // 手机 QQ 内浏览器
    case Weixin = 'wechat'; // 微信内浏览器
    case Alipay = 'alipay'; // 支付宝客户端
    case Douyin = 'douyin'; // 抖音APP

    /**
     * 获取描述
     * @return string 描述
     */
    public function getDescription(): string {
        return match($this) {
            self::PC => '电脑浏览器',
            self::Mobile => '手机浏览器',
            self::QQ => '手机 QQ 内浏览器',
            self::Weixin => '微信内浏览器',
            self::Alipay => '支付宝客户端',
            self::Douyin => '抖音APP'
        };
    }
}
// #endregion snippet
