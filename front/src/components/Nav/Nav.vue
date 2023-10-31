<script setup lang="ts"></script>

<template>
    <nav>
        <div class="logo">
            <img src="/Logo.svg" alt="Porsche logo" />
        </div>

        <div class="links">
            <RouterLink to="/">Nouveautés</RouterLink>
            <RouterLink to="/911">Nos Services</RouterLink>
            <RouterLink to="/models">Nos Modèles</RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
        </div>
        <div class="account">
            <RouterLink to="/account">Mon compte</RouterLink>
        </div>
    </nav>
</template>

<style lang="scss">
@import "./Nav.scss";
</style>
