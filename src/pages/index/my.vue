<script setup>
import App from "petal-ui/components/app"
import Cell from "petal-ui/components/cell"
import CellGroup from "petal-ui/components/cell-group"
import PuiNavbar from "petal-ui/components/navbar";
import Tabbar from "../../components/tabbar.vue";

</script>

<template>
    <App>
        <PuiNavbar
            title="我的"
        />

        <CellGroup>
            <Cell>
                <view class="user-info">
                    <image class="avatar" src="https://qiniu.kyour.cn/petal-ui/petal-ui-logo.png"/>

                    <view class="user-name">
                        Petal UI
                    </view>
                </view>
            </Cell>
            <Cell title="版本信息" value="v0.01"/>
        </CellGroup>


        <CellGroup>
            <Cell title="我的订单" is-link/>
            <Cell title="我的订单" is-link/>
            <Cell title="我的收藏" is-link/>
        </CellGroup>

        <CellGroup>
            <Cell title="设置" is-link/>
            <Cell title="帮助与客服" is-link/>
        </CellGroup>
        <Tabbar :index="3"/>
    </App>
</template>

<style scoped>

.user-info {
    display: flex;
    margin: 20rpx;
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

</style>