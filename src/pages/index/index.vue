<template>
    <App>
        <view class="content">
            <PuButton size="mini" background="green" text="开始体验" />
            <PuButton size="small" disabled background="error">开始体验</PuButton>
            <PuButton :block="true" size="normal">开始体验</PuButton>
            <PuButton :block="true" size="large" @click="setTheme" background="#5555FF">切换主题</PuButton>
        </view>

        <view>
            <PuCellGroup>
                <PuCell title="设备名称" value="小P的手机"/>
            </PuCellGroup>

            <PuCellGroup>
                <PuCell title="型号名称" value="HUAWEI P60 Pro"/>
                <PuCell title="型号代码" value="ABR-AL90"/>
                <PuCell title="HarmonyOS版本" value="4.0.0"/>
            </PuCellGroup>
        </view>
    </App>

</template>

<script setup>

import App from "petal-ui/components/app"
import PuButton from "petal-ui/components/button"
import PuCell from "petal-ui/components/cell"
import PuCellGroup from "petal-ui/components/cell-group"
import {usePetalUiStore} from "petal-ui/stores/petal-ui";

const puiStore = usePetalUiStore()

const setTheme = () => {

    puiStore.dark = !puiStore.dark

    // puiStore.setTheme({
    //     'primary': 'red'
    // })\

}

</script>

<style scoped>
.content {
    padding: 20rpx;
}

.content :deep(.petal-btn) {
    margin-bottom: 10rpx;
}

</style>
