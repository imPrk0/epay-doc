<?php
// #region snippet
/**
 * 订单状态枚举
 * @type integer
 */
enum OrderStatus: int {
    case Unpaid = 0; // 未支付
    case Paid = 1; // 已支付
    case Refund = 2; // 已退款
    case Frozen = 3; // 已冻结
    case PreAuth = 4; // 预授权

    /**
     * 获取描述
     * @return string 描述
     */
    public function getDescription(): string {
        return match($this) {
            self::Unpaid => '未支付',
            self::Paid => '已支付',
            self::Refund => '已退款',
            self::Frozen => '已冻结',
            self::PreAuth => '预授权'
        };
    }
}
// #endregion snippet
