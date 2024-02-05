<script setup>
import App from "petal-ui/components/app"
import Cell from "petal-ui/components/cell"
import CellGroup from "petal-ui/components/cell-group"
import PuiNavbar from "petal-ui/components/navbar"
import PuiIcon from "petal-ui/components/icon"
import PuiDialog from "petal-ui/components/dialog"
import Tabbar from "../../components/tabbar.vue"
import { ref } from "vue"

const dialogShow = ref(false)

const onAction = (index) => {
    uni.showToast({
        title: '点击按钮'+ index,
        icon: 'error',
        duration: 2000
    });
}

</script>

<template>
    <App>
        <PuiNavbar
            title="我的"
            right-icon="petal-icon-contacts"
        />

        <CellGroup>
            <Cell>
                <view class="user-info">
                    <image class="avatar" src="https://qiniu.kyour.cn/petal-ui/petal-ui-logo.png"/>
                    <view class="user-name">
                        Petal UI
                    </view>
                    <view class="user-setting">
                        <PuiIcon name="petal-icon-settings"/>
                    </view>
                </view>
            </Cell>
            <Cell title="版本信息" value="v0.01"/>
        </CellGroup>


        <CellGroup>
            <Cell title="我的订单" is-link/>
            <Cell title="浏览记录" is-link/>
            <Cell title="我的收藏" is-link/>
        </CellGroup>

        <CellGroup>
            <Cell title="设置" icon="petal-icon-settings" is-link @click="dialogShow = true"/>
            <Cell title="帮助与客服" icon="petal-icon-detail" is-link/>
        </CellGroup>

        <PuiDialog
            v-model:show="dialogShow"
            title="设置"
            :actions="['取消','确定']"
            @action="onAction"
        >
            测试内容
        </PuiDialog>

        <Tabbar :index="3"/>
    </App>
</template>

<style scoped>

.user-info {
    display: flex;
    margin: 20rpx;
    width: 100%;
    flex-direction: row;
    align-items: center;
}

.user-info .avatar {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;;
}
.user-info .user-name {
    margin-left: 20rpx;
    font-weight: bold;
}
.user-info .user-setting {
    margin-left: auto;
}

</style>