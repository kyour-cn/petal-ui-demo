<template>
    <App>
        <PuiNavbar
            title="PetalUI 表单"
            left-arrow
            right-icon="petal-icon-help"
            @click-left="goBack"
        />

        <Switch v-model="switchData" />

        <PuiSlider v-model="sliderValue" />

        {{sliderValue}}

    </App>
</template>

<script setup>

import PuiNavbar from "petal-ui/components/navbar/index.vue";
import App from "petal-ui/components/app"
import Switch from "petal-ui/components/switch"
import PuiSlider from "petal-ui/components/slider"

import {ref} from "vue";

const goBack = () => {
    uni.navigateBack()
}

const sliderValue = ref(0)

const switchData = ref(false)

</script>

<style scoped>

</style>
