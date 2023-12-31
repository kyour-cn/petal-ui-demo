<template>
    <App>
        <PuiNavbar
            title="PetalUI 表单"
            left-arrow
            right-icon="petal-icon-help"
            @click-left="goBack"
        />

        <Switch v-model="switchValue"/>
        <Switch v-model="switchValue" disabled/>
        {{ switchValue }}

        <PuiSlider v-model="sliderValue"/>
        {{ sliderValue }}

        <PuiLoading/>

    </App>
</template>

<script setup>

import PuiNavbar from "petal-ui/components/navbar/index.vue";
import App from "petal-ui/components/app"
import Switch from "petal-ui/components/switch"
import PuiSlider from "petal-ui/components/slider"
import {goBack} from "../../utils"
import PuiLoading from "../../comp/loading.vue";

import {ref} from "vue";

const switchValue = ref(false)

const sliderValue = ref(10)

</script>

<style scoped>

</style>
