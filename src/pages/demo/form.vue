<script setup>

import PuiNavbar from "petal-ui/components/navbar";
import App from "petal-ui/components/app"
import Switch from "petal-ui/components/switch"
import PuiSlider from "petal-ui/components/slider"
import PuiCard from "petal-ui/components/card"
import FormItem from "petal-ui/components/form-item"
import Form from "petal-ui/components/form"
import PuiCheckbox from "petal-ui/components/checkbox"
import PuiRadio from "petal-ui/components/radio"

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
            <FormItem title="滑动条" :label="'这是一个滑动条，值为：'+ sliderValue">
                <template #value>
                    <PuiSlider style="flex: 1" :min="10" v-model="sliderValue" />
                </template>
            </FormItem>
            <FormItem title="多选" required>
                <template #value>
                    <PuiCheckbox v-model="switchValue" />
                </template>
            </FormItem>
            <FormItem title="单选" required>
                <template #value>
                    <PuiRadio v-model="switchValue" />
                </template>
            </FormItem>
        </Form>

        <PuiCard>
            <PuiSlider v-model="sliderValue2" :min="100" :max="500"/>
            {{sliderValue2}}
        </PuiCard>
        <PuiCheckbox v-model="switchValue" disabled/>
        <PuiRadio v-model="switchValue" disabled/>

    </App>
</template>

<style scoped>

</style>
