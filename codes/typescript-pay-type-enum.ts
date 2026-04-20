/**
 * 支付类型枚举
 */
export enum PayType {
    Web = 'web', // 通用网页支付
    Jump = 'jump', // 跳转支付
    JsAPI = 'jsapi', // JsAPI 支付
    App = 'app', // APP 支付
    Scan = 'scan', // 付款码支付
    Applet = 'applet' // 小程序支付
}

/**
 * 支付类型描述
 */
export const PayTypeDescription: Record<PayType, string> = {
    [PayType.Web]: '通用网页支付',
    [PayType.Jump]: '跳转支付',
    [PayType.JsAPI]: 'JsAPI 支付',
    [PayType.App]: 'APP 支付',
    [PayType.Scan]: '付款码支付',
    [PayType.Applet]: '小程序支付'
}

/**
 * 获取支付类型描述
 * @param {PayType} type 支付类型
 * @returns {string} 支付类型描述
 */
export const getPayTypeDescription =
    (type: PayType): string => PayTypeDescription[type];
