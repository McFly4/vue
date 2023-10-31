<script setup lang="ts">
import NewCar from "@/components/NewCar/NewCar.vue";
</script>

<template>
    <Suspense>
        <main>
            <div class="home">
                <img src="/porscheWallpaper.jpg" alt="Porsche 911 Turbo S" />

                <div class="homeText">
                    <h1>Rien n'arrête une légende.</h1>
                    <button>Découvrez la nouvelle 911</button>
                </div>
            </div>
            <NewCar />
        </main>
    </Suspense>
</template>

<style lang="scss">
@import "../assets/main.scss";
</style>
