<template>
    <App>
        <PuiNavbar title="PetalUI"/>

        <view class="content">
            <pui-button size="mini" background="green" text="开始体验"/>
            <pui-button size="small" disabled background="error">开始体验</pui-button>
            <pui-button :block="true" size="normal">开始体验</pui-button>
            <pui-button :block="true" size="large" @click="setTheme" background="#5555FF">切换主题</pui-button>
        </view>

        <view>
            <CellGroup>
                <Cell title="版本信息" value="v0.01"/>
            </CellGroup>

            <CellGroup>
                <Cell title="名称" value="PetalUI"/>
                <Cell title="框架" value="Vue3"/>
                <Cell title="属性" value="Vite"/>
                <Cell title="表单" value="查看演示" is-link @click="goPage('/pages/demo/form')"/>
                <Cell title="弹出层演示" is-link @click="shopPopup = true"/>
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

        <PuiPopup v-model="shopPopup" title="弹出层演示" @close="shopPopup = false"/>

        <pui-tabbar>
            <pui-tabbar-item icon="petal-icon-home" name="首页"/>
            <pui-tabbar-item icon="petal-icon-discover" name="发现"/>
            <pui-tabbar-item icon="petal-icon-contacts" name="我的"/>
        </pui-tabbar>
    </App>

</template>

<script setup>

import App from "petal-ui/components/app"
import PuiButton from "petal-ui/components/button"
import Cell from "petal-ui/components/cell"
import CellGroup from "petal-ui/components/cell-group"
import PuiNavbar from "petal-ui/components/navbar"
import PuiTabbar from "petal-ui/components/tabbar"
import PuiTabbarItem from "petal-ui/components/tabbar-item"
import PuiPopup from "petal-ui/components/popup"
import {usePetalUiStore} from "petal-ui/stores/petal-ui";
import {ref} from "vue";

const puiStore = usePetalUiStore()

const setTheme = () => {

    puiStore.dark = !puiStore.dark

    // puiStore.setTheme({
    //     'primary': 'red'
    // })

}

const goPage = (page) => {
    console.log("goto:" + page)
    //在起始页面跳转到test.vue页面并传递参数
    uni.navigateTo({
        url: page
    });
}

const shopPopup = ref(true)
const closePopup = () => {
    shopPopup.value = false
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
