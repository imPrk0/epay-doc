<script setup lang="ts">
import { Flex, Button } from 'antdv-next';
import { DownloadOutlined as DownloadIcon, GithubOutlined as GitHubIcon } from '@antdv-next/icons';

const php = (action: 'download' | 'github'): void => {
    if ('github' === action) {
        alert('请稍后。');
    }
};
</script>

# SDK {#title}

我们提供了一套完整的 SDK，帮助开发者快速接入支付功能。


## PHP {#php}

<Flex gap="small" wrap>
    <Button type="primary" @click="php('download')">
        <DownloadIcon />
        下载 SDK
    </Button>
    <Button type="link" @click="php('github')">
        <GitHubIcon />
        GitHub
    </Button>
</Flex>

::: details Composer 安装
暂不支持。
:::
