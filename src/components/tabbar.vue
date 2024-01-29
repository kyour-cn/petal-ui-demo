<script setup>
import PuiTabbar from "petal-ui/components/tabbar"
import PuiTabbarItem from "petal-ui/components/tabbar-item"
import {ref} from "vue";

const props = defineProps({
    index: {
        type: Number,
        default: 1
    }
})

const index = ref(props.index)

const tabPages = [
    {
        name: "首页",
        icon: "petal-icon-home",
        path: "/pages/index/index"
    },
    {
        name: "分类",
        icon: "petal-icon-app",
        path: "/pages/index/category"
    },
    {
        name: "我的",
        icon: "petal-icon-contacts",
        path: "/pages/index/my"
    }
]

function changeIndex(index) {
    uni.switchTab({
        url: tabPages[index -1].path
    });
}

// #ifndef H5
// 隐藏tabbar
uni.hideTabBar()
// #endif

</script>

<template>
    <pui-tabbar v-model="index" :allow-change="false">
        <pui-tabbar-item
            v-for="(item, key) in tabPages"
            :key="key"
            :icon="item.icon"
            :name="item.name"
            @click="changeIndex(key + 1)"
        />
    </pui-tabbar>
</template>
