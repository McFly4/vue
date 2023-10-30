<script setup lang="ts"></script>

<template>
    <nav>
        <div class="logo">
            <img src="/Logo.svg" alt="Porsche logo" />
        </div>

        <div class="links">
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/models">Modèles</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
    </nav>
</template>

<style lang="scss">
@import "./Nav.scss";
</style>
