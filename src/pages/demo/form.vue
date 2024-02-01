<script setup>

import PuiNavbar from "petal-ui/components/navbar";
import App from "petal-ui/components/app"
import Switch from "petal-ui/components/switch"
import PuiSlider from "petal-ui/components/slider"
import PuiPopover from "petal-ui/components/popover"
import PuiCard from "petal-ui/components/card"
import FormItem from "petal-ui/components/form-item"
import Form from "petal-ui/components/form"

import {goBack} from "../../utils"

import {ref} from "vue";

const switchValue = ref(false)

const sliderValue = ref(20)
const sliderValue2 = ref(200)
const textVal = ref("")

</script>

<template>
    <App>
        <PuiNavbar
            title="PetalUI 表单"
            left-arrow
            right-icon="petal-icon-help"
            @click-left="goBack"
        />

        <Form>
            <FormItem title="开关">
                <template #value>
                    <Switch v-model="switchValue" />
                </template>
            </FormItem>
            <FormItem v-model="textVal" title="文本输入" required type="text"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="滑动条" :label="'这是一个滑动条，值为：'+ sliderValue">
                <template #value>
                    <PuiSlider style="flex: 1" :min="10" v-model="sliderValue" />
                </template>
            </FormItem>
        </Form>

        <PuiCard>
            <PuiSlider v-model="sliderValue2" :min="100" :max="500"/>
            {{sliderValue2}}
        </PuiCard>

        <PuiPopover direction="right">
            <button>点击显示弹出框</button> <!-- 默认插槽 -->
            <template #reference>
                <view style="width: 160rpx">这是弹出内容</view>
            </template>
        </PuiPopover>

        <PuiPopover direction="left">
            <button>点击显示弹出框</button> <!-- 默认插槽 -->
            <template #reference>
                <view style="width: 160rpx">这是弹出内容</view>
            </template>
        </PuiPopover>


        <PuiPopover direction="top">
            <button>点击显示弹出框</button> <!-- 默认插槽 -->
            <template #reference>
                <view>这是弹出内容</view> <!-- reference插槽 -->
            </template>
        </PuiPopover>


    </App>
</template>

<style scoped>

</style>
