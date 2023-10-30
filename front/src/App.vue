<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Nav/Nav.vue";
</script>

<template>
    <header>
        <Nav />
    </header>

    <RouterView />
</template>

<style lang="scss">
@import "./assets/base.scss";
</style>
