<script setup>

import App from "petal-ui/components/app"
import PuiButton from "petal-ui/components/button"
import PuiEmpty from "petal-ui/components/empty"
import PuiLoading from "petal-ui/components/loading"
import Cell from "petal-ui/components/cell"
import CellGroup from "petal-ui/components/cell/cell-group"
import PuiNavbar from "petal-ui/components/navbar"
import PuiPopup from "petal-ui/components/popup"
import PuiSwiper from "petal-ui/components/swiper"
import PuiIcon from "petal-ui/components/icon"
import PuiSearch from "petal-ui/components/search"
import PuiTabs from "petal-ui/components/tabs";
import Tabbar from "../../components/tabbar.vue";
import {usePetalUiStore} from "petal-ui/stores/petal-ui";
import {ref} from "vue";
import {onPageScroll} from "@dcloudio/uni-app";

const puiStore = usePetalUiStore()

const setTheme = () => {
    puiStore.dark = !puiStore.dark

    // puiStore.setTheme({
    //     'primary': 'red'
    // })
}

const tabIndex = ref(0)
const tabList = ref([
    {
        name: '基础',
    },
    {
        name: '导航',
    },
    {
        name: '表单',
    },
    {
        name: '列表',
    },
    {
        name: '卡片',
    },
    {
        name: '弹窗',
    },
    {
        name: '弹窗2',
    },
    {
        name: '弹窗3',
    },
    {
        name: '弹窗4',
    },
    {
        name: '弹窗5',
    },
])

const changeTabsPage = (e) => {
    tabIndex.value = e.detail.current
}

const swiperList = ref([
    {
        title: 'PetalUI',
        src: 'https://res.vmallres.com/uomcdn/CN/cms/2024-01/ab3fdadeb25c4f708f94ad84e3780d3c.jpg',
    },
    {
        title: 'PetalUI',
        src: 'https://res.vmallres.com/uomcdn/CN/cms/2024-01/a053fb3832fb4f7ba3e0f94b4409ed33.jpg',
    },
    {
        title: 'PetalUI',
        src: 'https://res.vmallres.com/uomcdn/CN/cms/2023-12/7c158edb67ae46019f8de58e6ed7a865.jpg',
    },
])

const goPage = (page) => {
    //在起始页面跳转到test.vue页面并传递参数
    uni.navigateTo({
        url: page
    });
}

const shopPopup = ref(false)
const popupPosition = ref('top')
const onShopPopup = (position) => {
    popupPosition.value = position
    shopPopup.value = true
}

const onSearch = () => {
    uni.showToast({
        title: '暂未开放',
        icon: 'error',
        duration: 2000
    });
}

// 监听页面滚动
const pageScroll = ref(0)
onPageScroll((e) => {
    pageScroll.value = e.scrollTop
})

</script>

<template>
    <App>
        <PuiNavbar title="PetalUI Demo" left-icon="/static/petal-ui-logo.png">
            <template #right>
                <view style="margin-right: 20rpx;" @click="onSearch">
                    <PuiIcon v-if="pageScroll > 50" name="petal-icon-search" :size="40" />
                    <PuiIcon v-else name="petal-icon-help" :size="40" />
                </view>
            </template>
        </PuiNavbar>

        <PuiSearch placeholder="搜索组件/内容" @search="onSearch"/>

        <PuiSwiper
            :list="swiperList"
            :item-margin="20"
            :radius="20"
        />

<!--        <view class="logo">-->
<!--            <PuiImage :width="200" :height="200" src="/static/petal-ui-logo.png" />-->
<!--        </view>-->

        <view class="content">
            <PuiLoading />
            <pui-button size="mini" background="green" text="开始体验"/>
            <pui-button size="small" disabled background="error">
                开始体验
            </pui-button>
            <pui-button :block="true" size="normal" @click="tabIndex++">开始体验</pui-button>
            <pui-button :block="true" size="large" @click="setTheme" background="#5555FF">切换主题</pui-button>
        </view>

        <view style="margin: 0 20rpx">
            <PuiTabs v-model="tabIndex" :list="tabList" key="name"/>

            <swiper
                :current="tabIndex"
                :autoplay="false"
                style="height: 400rpx"
                @change="changeTabsPage"
            >
                <swiper-item v-for="(item, key) in tabList" :key="key">
                    <PuiEmpty :description="item.name+ '开发中'" />
                </swiper-item>
            </swiper>

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
                <Cell title="弹出层演示" value="上方弹出" is-link @click="onShopPopup('top')"/>
                <Cell title="弹出层演示" value="下方弹出" is-link @click="onShopPopup('bottom')"/>
                <Cell title="弹出层演示" value="中间弹出" is-link @click="onShopPopup('center')"/>
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

        <PuiPopup v-model="shopPopup" :position="popupPosition">
            <pui-button size="normal" :block="true" @click="shopPopup = false">关闭弹出层</pui-button>
        </PuiPopup>

        <Tabbar :index="1"/>

    </App>

</template>

<style scoped>
.content {
    padding: 0 20rpx;
}

.content :deep(.petal-btn) {
    margin-bottom: 10rpx;
}

</style>
