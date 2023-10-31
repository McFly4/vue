<script setup lang="ts">
import { getAllCars } from "@/services/CarService";

const cars = await getAllCars();
const gt3 = cars.find((car: any) => car.model === "911 GT3RS");
console.log(gt3);
</script>

<template>
    <div class="newCar">
        <h1>Pourquoi pas vous ?</h1>
        <p>Découvrez la nouvelle {{ gt3?.model }}</p>
        <div class="newCarImg">
            <RouterLink :to="`/Car/${gt3?.id}`">
                <img :src="gt3?.image" :alt="gt3?.model" />
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
@import "./NewCar.scss";
</style>
