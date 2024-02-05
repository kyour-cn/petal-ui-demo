<script setup>

import PuiNavbar from "petal-ui/components/navbar";
import App from "petal-ui/components/app"
import Switch from "petal-ui/components/switch"
import PuiSlider from "petal-ui/components/slider"
import PuiSubheading from "petal-ui/components/subheading"

import PuiCard from "petal-ui/components/card"
import FormItem from "petal-ui/components/form-item"
import Form from "petal-ui/components/form"
import PuiCheckbox from "petal-ui/components/checkbox"
import PuiRadio from "petal-ui/components/radio"
import {goBack} from "../../utils"
import {usePetalUiStore} from "petal-ui/stores/petal-ui"
import {ref, watch} from "vue";

const puiStore = usePetalUiStore()

const switchValue = ref(false)
const isDark = ref(false)
const sliderValue = ref(20)
const sliderValue2 = ref(200)
const textVal = ref("")


watch(isDark, (val) => {
    puiStore.dark = val
})

</script>

<template>
    <App>
        <PuiNavbar
            title="PetalUI 表单"
            left-arrow
            right-icon="petal-icon-help"
            @click-left="goBack"
        />

        <PuiSubheading title="常用"/>
        <Form>
            <FormItem title="深色模式">
                <template #value>
                    <Switch v-model="isDark"/>
                </template>
            </FormItem>
            <FormItem title="开关">
                <template #value>
                    <Switch v-model="switchValue"/>
                </template>
            </FormItem>
            <FormItem title="开关（禁用）">
                <template #value>
                    <Switch v-model="switchValue" disabled/>
                </template>
            </FormItem>
            <FormItem v-model="textVal" title="文本输入" required type="text"/>
            <FormItem title="内容显示" :model-value="textVal ? textVal : '无'"/>
            <FormItem title="滑动条" :label="'这是一个滑动条，值为：'+ sliderValue">
                <template #value>
                    <PuiSlider style="flex: 1" :min="10" v-model="sliderValue"/>
                </template>
            </FormItem>
            <FormItem title="多选">
                <template #value>
                    <PuiCheckbox v-model="switchValue"/>
                </template>
            </FormItem>
            <FormItem title="单选">
                <template #value>
                    <PuiRadio v-model="switchValue"/>
                </template>
            </FormItem>
        </Form>

        <PuiSubheading title="演示"/>
        <PuiCard>
            <PuiSlider v-model="sliderValue2" :min="100" :max="500"/>
            <PuiCheckbox v-model="switchValue" disabled/>
            <PuiRadio v-model="switchValue" disabled/>
            <Switch v-model="switchValue" disabled/>
        </PuiCard>

    </App>
</template>

<style scoped>

</style>
