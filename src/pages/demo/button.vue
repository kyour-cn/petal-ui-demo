<template>
    <view class="content">
        <PuButton size="mini">开始体验</PuButton>
        <PuButton size="small">开始体验</PuButton>
        <PuButton :block="true" size="normal">开始体验</PuButton>
        <PuButton :block="true" size="large">开始体验</PuButton>
    </view>
</template>

<script setup>

import PuButton from "petal-ui/components/button"

</script>

<style scoped>
.content{
    padding: 20rpx;
//display: flex;
}
.content * {
    margin-bottom: 10rpx;
}
</style>
