<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const carId = route.params.id;
</script>

<template>ceci est la page article et ca c'est la : {{ carId }}</template>

<style lang="scss"></style>
