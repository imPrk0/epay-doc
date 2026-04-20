/**
 * 订单状态枚举
 */
export enum OrderStatus {
    Unpaid = 0, // 未支付
    Paid = 1, // 已支付
    Refund = 2, // 已退款
    Frozen = 3, // 已冻结
    PreAuth = 4 // 预授权
}

/**
 * 订单状态描述
 */
export const OrderStatusDescription: Record<OrderStatus, string> = {
    [OrderStatus.Unpaid]: '未支付',
    [OrderStatus.Paid]: '已支付',
    [OrderStatus.Refund]: '已退款',
    [OrderStatus.Frozen]: '已冻结',
    [OrderStatus.PreAuth]: '预授权'
}

/**
 * 获取订单状态描述
 * @param {OrderStatus} status 订单状态
 * @returns {string} 订单状态描述
 */
export const getOrderStatusDescription =
    (status: OrderStatus): string => OrderStatusDescription[status];
