# 🌈 彩虹易支付 - 开发文档

请注意，这并不是 [彩虹易支付](https://pay.cccyun.cc/) 官方维护的项目。因个人觉得 [彩虹易支付](https://pay.cccyun.cc/) 当前的文档并不美观，因此使用 VitePress 与美化主题重新编写了文档。

如果未来 [彩虹易支付](https://pay.cccyun.cc/) 官方收编了本项目，本项目也将可以持续性维护！

> [!WARNING]
> **Market-Specific Notice**
> This repository is tailored for specific use cases within the Chinese market and may contain localized logic that differs from international standards. **THEREFORE, THIS PROJECT WILL NOT PROVIDE AN ENGLISH VERSION OR ANY INTERNATIONALIZATION OPTIONS!**


## 🔧 技术栈

本项目采用以下技术栈：

| 项目 | 说明 |
| :---: | :---: |
| [Vue.js](https://vuejs.org) | 渐进式 JavaScript 框架，用于辅助文档部分功能。 |
| [VitePress](https://vitepress.dev) | 基于 Vite 的静态网站生成器，专为文档编写设计，提供了快速的开发体验和优化的构建性能。 |
| [Vite](https://vitejs.dev) | 前端构建工具，提供了快速的模块热更新和高效的构建流程。 |
| [Sass](https://sass-lang.com) | CSS 预处理器，增强了样式的可维护性和复用性。 |
| [@catppuccin/vitepress](https://github.com/catppuccin/vitepress) | VitePress 的主题，提供了优雅的界面和良好的用户体验。 |
| [Antdv Next](https://www.antdv-next.com) | 基于 Ant Design 的 Vue 3 组件库，提供了一套高质量的 UI 组件。 |
| [Vitepress Plugin Group Icons](https://vp.yuy1n.io) | VitePress 插件，用于为文档中的图标提供分组支持。 |


## 🚀 快速开始

1. Clone 这个仓库
  - HTTPS
    ``` sh
    git clone https://github.com/imPrk0/spay-doc.git
    ```
  - SSH
    ``` sh
    git clone git@github.com:imPrk0/spay-doc.git
    ```

2. 进入项目目录并安装依赖
  ``` sh
  cd ./spay-doc
  pnpm install
  ```

  > 如果 pnpm 提醒需要同意安装包，请按照提示完成输入 `y` 并回车确认。

3. 开始开发！
  - 启动开发服务器
    ``` sh
    pnpm dev
    ```


## 📄 许可证 - 开源协议

本项目使用 [MIT 许可证](https://opensource.org/license/mit)，详情请参阅 [LICENSE](./LICENSE) 文件。
