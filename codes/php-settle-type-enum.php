<?php
// #region snippet
/**
 * 结算方式枚举
 * @type integer
 */
enum SettleType: int {
    case Alipay = 1; // 支付宝
    case Weixin = 2; // 微信
    case QQ = 3; // QQ 钱包
    case Bank = 4; // 银行卡

    /**
     * 获取描述
     * @return string 描述
     */
    public function getDescription(): string {
        return match($this) {
            self::Alipay => '支付宝',
            self::Weixin => '微信',
            self::QQ => 'QQ 钱包',
            self::Bank => '银行卡'
        };
    }
}
// #endregion snippet
