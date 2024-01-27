<script setup>

import PuiNavbar from "petal-ui/components/navbar";
import App from "petal-ui/components/app"
import Switch from "petal-ui/components/switch"
import PuiSlider from "petal-ui/components/slider"
import PuiCard from "petal-ui/components/card"
import Cell from "petal-ui/components/cell"
import CellGroup from "petal-ui/components/cell-group"
import {goBack} from "../../utils"

import {ref} from "vue";

const switchValue = ref(false)

const sliderValue = ref(10)

</script>

<template>
    <App>
        <PuiNavbar
            title="PetalUI 表单"
            left-arrow
            right-icon="petal-icon-help"
            @click-left="goBack"
        />

        <CellGroup>
            <Cell title="开关">
                <template #value>
                    <Switch v-model="switchValue" />
                </template>
            </Cell>
            <Cell title="文本输入">
                <template #value>
                    <input type="text" style="text-align: right" placeholder="请输入">
                </template>
            </Cell>
        </CellGroup>

        <PuiCard>
            <PuiSlider v-model="sliderValue" />
            {{sliderValue}}
        </PuiCard>

    </App>
</template>

<style scoped>

</style>
