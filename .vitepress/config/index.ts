/**
 * VitePress 配置文件
 * @author Prk<code@imprk.me>
 *
 * https://vitepress.dev/reference/site-config
 */

import { defineConfig } from 'vitepress';
import themeConfig from './theme';
import { groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons';

export default defineConfig({
    base: '/doc/',
    srcDir: 'docs',

    title: '开发文档',
    description: '开发文档',

    themeConfig,
    vite: {
        plugins: [
            groupIconVitePlugin({
                customIcon: {
                    php: localIconLoader(import.meta.url, '../icons/php.svg'),
                    typescript: localIconLoader(import.meta.url, '../icons/typescript.svg')
                }
            })
        ]
    }
});
