/**
 * VitePress 自定义 / 扩展主题
 * @author Prk<code@imprk.me>
 *
 * https://vitepress.dev/guide/custom-theme
 * https://vitepress.dev/guide/extending-default-theme
 */

import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';

import type { VNode } from 'vue';
import type { Theme } from 'vitepress';

import './style.css';
import 'virtual:group-icons.css';
import '@catppuccin/vitepress/theme/mocha/sapphire.css';

export default {
    extends: DefaultTheme,
    Layout: (): VNode => h(DefaultTheme.Layout, null, {
        // https://vitepress.dev/guide/extending-default-theme#layout-slots
    }),
    enhanceApp: ({ app, router, siteData }): void => {
        // ...
    }
} satisfies Theme;
