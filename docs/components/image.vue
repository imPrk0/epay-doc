<script setup lang="ts">
/**
 * 定制业务层的图片组件
 * @author Prk<code@imprk.me>
 */

import { Image } from 'antdv-next';

const { src } = defineProps<{
    src: string;
}>();
</script>

<template>
    <div>
        <Image
            :height="150"
            :src="`/doc/assets/images/${src}`"
        />
    </div>
</template>

<style lang="scss" scoped>
div {
    display: block;
    width: auto;
    height: 150px;
}

:deep(img) {
    margin: 0;
}
</style>
