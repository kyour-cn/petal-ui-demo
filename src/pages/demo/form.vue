<template>
    <App>
        <PuiNavbar
            title="PetalUI 表单"
            left-arrow
            right-icon="petal-icon-help"
            @click-left="goBack"
        />

        <Switch v-model="switchData" />

        <Radio></Radio>

    </App>
</template>

<script setup>

import PuiNavbar from "petal-ui/components/navbar/index.vue";
import App from "petal-ui/components/app"
import Switch from "petal-ui/components/switch"
import {ref} from "vue";

const goBack = () => {
    uni.navigateBack()
}

const switchData = ref(false)

</script>

<style scoped>

</style>
