/**
 * 设备类型枚举
 */
export enum DeviceType {
    PC = 'pc', // 电脑浏览器（默认）
    Mobile = 'mobile', // 手机浏览器
    QQ = 'qq', // 手机 QQ 内浏览器
    Weixin = 'wechat', // 微信内浏览器
    Alipay = 'alipay', // 支付宝客户端
    Douyin = 'douyin' // 抖音 APP
}

/**
 * 设备类型描述
 */
export const DeviceTypeDescription: Record<DeviceType, string> = {
    [DeviceType.PC]: '电脑浏览器',
    [DeviceType.Mobile]: '手机浏览器',
    [DeviceType.QQ]: '手机 QQ 内浏览器',
    [DeviceType.Weixin]: '微信内浏览器',
    [DeviceType.Alipay]: '支付宝客户端',
    [DeviceType.Douyin]: '抖音APP'
}

/**
 * 获取设备类型描述
 */
export const getDeviceTypeDescription =
    (type: DeviceType): string => DeviceTypeDescription[type];
