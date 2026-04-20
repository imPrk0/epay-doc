/**
 * VitePress 主题配置
 * @author Prk<code@imprk.me>
 *
 * https://vitepress.dev/reference/default-theme-config
 */

import type { DefaultTheme } from 'vitepress';

export default <DefaultTheme.Config>{
    logo: '/assets/images/icon.png',

    nav: [
        { text: '接口说明', link: '/' },
        { text: '签名算法', link: '/sign' },
        {
            text: '通用参数规则',
            activeMatch: '/rules/*',
            items: [
                {
                    text: '枚举',
                    items: [
                        { text: '支付方式', link: '/rules/pay-methods' },
                        { text: '订单状态', link: '/rules/order-status' },
                        { text: '支付类型', link: '/rules/pay-type' },
                        { text: '设备类型', link: '/rules/device-type' },
                        { text: '商户状态', link: '/rules/merchant-status' },
                        { text: '结算方式', link: '/rules/settle-type' }
                    ]
                }
            ]
        },
        {
            text: '全部接口',
            activeMatch: '/(pay|merchant|payout|v1)/*',
            items: [
                {
                    text: '支付相关',
                    items: [
                        { text: '跳转支付接口', link: '/pay/jump' },
                        { text: '统一下单接口', link: '/pay/union' },
                        { text: '订单查询接口', link: '/pay/query' },
                        { text: '支付结果回调', link: '/pay/callback' },
                        { text: '订单退款接口', link: '/pay/refund' },
                        { text: '退款查询接口', link: '/pay/refund-query' },
                        { text: '订单关闭接口', link: '/pay/close' }
                    ]
                },
                {
                    text: '商户相关',
                    items: [
                        { text: '商户信息接口', link: '/merchant/info' },
                        { text: '订单列表接口', link: '/merchant/order' }
                    ]
                },
                {
                    text: '代付相关',
                    items: [
                        { text: '转账发起接口', link: '/payout/create' },
                        { text: '转账查询接口', link: '/payout/query' },
                        { text: '可用余额接口', link: '/payout/balance' }
                    ]
                },
                {
                    text: 'V1 旧版接口',
                    items: [
                        { text: '跳转支付', link: '/v1/jump' },
                        { text: 'API 支付', link: '/v1/api' },
                        { text: '支付结果回调', link: '/v1/callback' },
                        { text: '[API] 查询商户信息', link: '/v1/api/info' },
                        { text: '[API] 查询结算记录', link: '/v1/api/settle' },
                        { text: '[API] 查询单个订单', link: '/v1/api/order' },
                        { text: '[API] 查询订单列表', link: '/v1/api/orders' },
                        { text: '[API] 发起订单退款', link: '/v1/api/refund' }
                    ]
                }
            ]
        },
        { text: 'SDK', link: '/sdk' }
    ],

    sidebar: [
        {
            items: [
                { text: '接口说明', link: '/' },
                { text: '签名算法', link: '/sign' }
            ]
        },
        {
            text: '通用参数规则',
            collapsed: false,
            items: [
                { text: '支付方式枚举', link: '/rules/pay-methods' },
                { text: '订单状态枚举', link: '/rules/order-status' },
                { text: '支付类型枚举', link: '/rules/pay-type' },
                { text: '设备类型枚举', link: '/rules/device-type' },
                { text: '商户状态枚举', link: '/rules/merchant-status' },
                { text: '结算方式枚举', link: '/rules/settle-type' },
            ]
        },
        {
            text: '支付相关接口',
            collapsed: true,
            items: [
                { text: '跳转支付接口', link: '/pay/jump' },
                { text: '统一下单接口', link: '/pay/union' },
                { text: '订单查询接口', link: '/pay/query' },
                { text: '支付结果回调', link: '/pay/callback' },
                { text: '订单退款接口', link: '/pay/refund' },
                { text: '退款查询接口', link: '/pay/refund-query' },
                { text: '订单关闭接口', link: '/pay/close' }
            ]
        },
        {
            text: '商户相关接口',
            collapsed: true,
            items: [
                { text: '商户信息接口', link: '/merchant/info' },
                { text: '订单列表接口', link: '/merchant/order' }
            ]
        },
        {
            text: '代付相关接口',
            collapsed: true,
            items: [
                { text: '转账发起接口', link: '/payout/create' },
                { text: '转账查询接口', link: '/payout/query' },
                { text: '可用余额接口', link: '/payout/balance' }
            ]
        },
        {
            text: 'V1 接口',
            collapsed: true,
            items: [
                { text: '跳转支付接口', link: '/v1/jump' },
                { text: 'API 支付接口', link: '/v1/api' },
                { text: '支付结果回调', link: '/v1/callback' },
                {
                    text: 'API 接口',
                    collapsed: false,
                    items: [
                        { text: '查询商户信息', link: '/v1/api/info' },
                        { text: '查询结算记录', link: '/v1/api/settle' },
                        { text: '查询单个订单', link: '/v1/api/order' },
                        { text: '查询订单列表', link: '/v1/api/orders' },
                        { text: '发起订单退款', link: '/v1/api/refund' }
                    ]
                }
            ]
        },
        {
            items: [
                { text: 'SDK', link: '/sdk' }
            ]
        }
    ]
};
