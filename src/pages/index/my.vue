<script setup>
import App from "petal-ui/components/app"
import PuiNavbar from "petal-ui/components/navbar";
import Tabbar from "../../components/tabbar.vue";

</script>

<template>
    <App>
        <PuiNavbar
            title="我的"
        />
        none

        <Tabbar :index="3"/>
    </App>
</template>

<style scoped>

</style>