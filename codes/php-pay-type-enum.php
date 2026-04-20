<?php
// #region snippet
/**
 * 支付类型枚举
 * @type String
 */
enum PayType: string {
    case Web = 'web'; // 通用网页支付
    case Jump = 'jump'; // 跳转支付
    case JsAPI = 'jsapi'; // JsAPI 支付
    case App = 'app'; // APP 支付
    case Scan = 'scan'; // 付款码支付
    case Applet = 'applet'; // 小程序支付

    /**
     * 获取描述
     * @return string 描述
     */
    public function getDescription(): string {
        return match($this) {
            self::Web => '通用网页支付',
            self::Jump => '跳转支付',
            self::JsAPI => 'JsAPI 支付',
            self::App => 'APP 支付',
            self::Scan => '付款码支付',
            self::Applet => '小程序支付'
        };
    }
}
// #endregion snippet

// 我这里想留个彩蛋，但是又不想让它被人发现，所以就放在这里了，哈哈哈！
// 我在 GitHub 上看到一些不懂英语的人把 Applet 错误拼写成了 AppLet
// 就好像是觉得 App 和 Let 是两个词一样
// 我贴出来 Gemini 的解释：
// 核心差异
//   • Applet (正确拼写)：首字母大写，后面全是小写。这是一个标准的英语单词，指代“小应用程序”。
//   • AppLet (错误拼写)：中间大写（大驼峰/CamelCase）通常见于特定品牌的命名规则（如 AppStore 或 iPhone），但在 Java 或网络标准中，并没有这种写法。
// 主要应用场景
// 在计算机领域，Applet 主要出现在以下两个地方：
//   1. Java Applet:
// 这是最广为人知的用法。它是一种曾经流行、运行在浏览器中的小型 Java 程序。虽然现在已经被现代 Web 技术（如 HTML5 和 WebAssembly）取代，但在教科书和旧项目中，它始终拼写为 Applet。
//   2. 通用定义:
// 泛指在另一个主程序（如 Web 浏览器、控制面板）的上下文中运行的小型程序。例如：Windows 的控制面板组件有时也被称为 Control Panel Applets。
// 总结： 无论是写文档还是写代码，请认准 Applet。
