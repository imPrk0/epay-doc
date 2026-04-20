<?php
// #region snippet
/**
 * 商户状态枚举
 * @type integer
 */
enum MerchantStatus: int {
    case Banned = 0; // 已封禁
    case Normal = 1; // 正常
    case Pending = 2; // 待审核

    /**
     * 获取描述
     * @return string 描述
     */
    public function getDescription(): string {
        return match($this) {
            self::Banned => '已封禁',
            self::Normal => '正常',
            self::Pending => '待审核'
        };
    }
}
// #endregion snippet
