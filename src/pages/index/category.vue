<template>
    <App>
        <PuiNavbar
            title="分类"
        />

        <view class="category-body">
            <PuiSidebar v-model="sidebarIndex" @change="changeIndex">
                <PuiSidebarItem
                    v-for="item in categoryList"
                    :key="item.id"
                    :title="item.name"
                />
            </PuiSidebar>

            <PuiList
                class="goods-list"
                v-model:loading="loading"
                :list="listData"
                :pull-refresh="true"
                :finished="listFinished"
                :style="{height: bdyH + 'rpx'}"
                @load="listLoad"
                @refresh="onRefresh"
            >
                <template #item="{ item }">
                    <view>
                        {{item}}
                    </view>
                </template>
            </PuiList>
        </view>

        <Tabbar :index="2"/>
    </App>
</template>

<script setup>
import App from "petal-ui/components/app"
import PuiNavbar from "petal-ui/components/navbar"
import PuiList from "petal-ui/components/list"
import PuiSidebar from "petal-ui/components/sidebar"
import PuiSidebarItem from "petal-ui/components/sidebar/sidebar-item"
import Tabbar from "../../components/tabbar.vue";
import {ref} from "vue";
import {usePetalUiStore} from "petal-ui/stores/petal-ui";
import {px2Rpx} from "petal-ui/lib/utils"

const puiStore = usePetalUiStore()

const screenWidth = puiStore.screenWidth

// 安全区域高度
const saleH = px2Rpx(puiStore.safeAreaInsets.top, screenWidth) - px2Rpx(puiStore.safeAreaInsets.bottom, screenWidth)
const bdyH = px2Rpx(puiStore.windowInfo.windowHeight, screenWidth) - saleH - 120 - 88 - 20

// 侧边分类导航栏
const sidebarIndex = ref(0)
const categoryList = ref([
    {
        id: 1,
        name: "基础"
    },
    {
        id: 2,
        name: "表单"
    },
    {
        id: 3,
        name: "反馈"
    },
    {
        id: 4,
        name: "展示"
    },
    {
        id: 5,
        name: "导航"
    },
    {
        id: 6,
        name: "其他"
    }
])

// 商品列表
const loading = ref(false)
const listData = ref([])
const listFinished = ref(false)
const listParams = {
    page: 1,
    page_size: 10,
    category_id: 1,
}

const getListData = () => {
    // 这里模拟数据加载
    setTimeout(() => {
        listFinished.value = true
        loading.value = false
    }, 500)
}

const changeIndex = (index) => {
    loading.value = true
    listData.value = []
    listParams.category_id = categoryList.value[index].id
    listParams.page = 1

    getListData()
}

const onRefresh = () => {
    listData.value = []
    listParams.page = 1
    listFinished.value = false
    getListData()
}

function listLoad() {
    listParams.page++
    getListData()
}

</script>

<style scoped>

.category-body {
    display: flex;
    flex-direction: row;
}

.goods-list {
    flex: 1;
    margin: 10rpx 20rpx 10rpx 10rpx;
    overflow-y: scroll;
}

</style>