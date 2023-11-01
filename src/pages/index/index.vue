<template>
    <App>
        <Navbar title="PetalUI" />
        
        <view class="content">
            <PuiButton size="mini" background="green" text="开始体验" />
            <PuiButton size="small" disabled background="error">开始体验</PuiButton>
            <PuiButton :block="true" size="normal">开始体验</PuiButton>
            <PuiButton :block="true" size="large" @click="setTheme" background="#5555FF">切换主题</PuiButton>
        </view>

        <view>
            <CellGroup>
                <Cell title="版本信息" value="v0.01"/>
            </CellGroup>

            <CellGroup>
                <Cell title="名称" value="PetalUI"/>
                <Cell title="框架" value="Vue3"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="属性" value="Vite"/>
            </CellGroup>
        </view>
        <pui-tabbar>
            <TabbarItem />
            <TabbarItem />
            <TabbarItem />
        </pui-tabbar>
    </App>

</template>

<script setup>

import App from "petal-ui/components/app"
// import PuiButton from "petal-ui/components/button"
import Cell from "petal-ui/components/cell"
import CellGroup from "petal-ui/components/cell-group"
import Navbar from "petal-ui/components/navbar"
// import Tabbar from "petal-ui/components/tabbar"
import TabbarItem from "petal-ui/components/tabbar-item"
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
    padding: 0 20rpx;
}

.content :deep(.petal-btn) {
    margin-bottom: 10rpx;
}

</style>
