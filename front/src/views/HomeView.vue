<script setup lang="ts">
import axios from "axios";

const response = await axios.get("http://localhost:8080/car/all");
console.log(response?.data);
</script>

<template>
    <main>
        <div class="home">
            <img src="/porscheWallpaper.jpg" alt="Porsche 911 Turbo S" />

            <div class="homeText">
                <h1>Rien n'arrête une légende.</h1>
                <button>Découvrez la nouvelle 911</button>
            </div>
        </div>
        <div class="cars">My cars</div>
    </main>
</template>

<style lang="scss">
@import "../assets/main.scss";
</style>
