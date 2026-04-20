/**
 * VitePress Markdown 配置
 * @author Prk<code@imprk.me>
 *
 * https://shiki.style
 * https://vitepress.dev/reference/site-config#markdown
 */

import { groupIconMdPlugin } from 'vitepress-plugin-group-icons';
import type { UserConfig } from 'vitepress';

export default <UserConfig['markdown']>{
    config: (md): void => {
        md.use(groupIconMdPlugin);
    },
    theme: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha'
    }
};
