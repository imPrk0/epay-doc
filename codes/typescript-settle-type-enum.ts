/**
 * 结算方式枚举
 */
export enum SettleType {
    Alipay = 1, // 支付宝
    Weixin = 2, // 微信
    QQ = 3, // QQ 钱包
    Bank = 4 // 银行卡
}

/**
 * 结算方式描述
 */
export const SettleTypeDescription: Record<SettleType, string> = {
    [SettleType.Alipay]: '支付宝',
    [SettleType.Weixin]: '微信',
    [SettleType.QQ]: 'QQ 钱包',
    [SettleType.Bank]: '银行卡'
}

/**
 * 获取结算方式描述
 * @param {SettleType} type 结算方式枚举值
 * @return {string} 结算方式描述字符串
 */
export const getSettleTypeDescription =
    (type: SettleType): string => SettleTypeDescription[type];
