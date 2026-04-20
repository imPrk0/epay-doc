/**
 * 商户状态枚举
 */
export enum MerchantStatus {
    Banned = 0, // 已封禁
    Normal = 1, // 正常
    Pending = 2 // 待审核
}

/**
 * 商户状态描述
 */
export const MerchantStatusDescription: Record<MerchantStatus, string> = {
    [MerchantStatus.Banned]: '已封禁',
    [MerchantStatus.Normal]: '正常',
    [MerchantStatus.Pending]: '待审核'
}

/**
 * 获取商户状态描述
 * @param {MerchantStatus} status 状态
 * @return {string} 状态描述
 */
export const getMerchantStatusDescription =
    (status: MerchantStatus): string => MerchantStatusDescription[status];
