<template>
    <App>
        <PuiNavbar title="PetalUI 表单" left-arrow @click-left="goBack"/>
    </App>
</template>

<script setup>

import PuiNavbar from "petal-ui/components/navbar/index.vue";
import App from "petal-ui/components/app"

const goBack = () => {
    uni.navigateBack()
}

</script>

<style scoped>

</style>
