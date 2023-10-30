<script setup lang="ts">
import { ref, type Ref } from "vue";

type Pizza = {
    name: string;
    price: number;
};

const pizzaToAdd: Ref<Pizza> = ref({ name: "", price: 0 });

function addPizza() {
    pizzas.value.push(pizzaToAdd.value);
    pizzaToAdd.value = { name: "", price: 0 };
}

const pizzas: Ref<Pizza[]> = ref([
    { name: "Marguarita", price: 5 },
    { name: "Peperroni", price: 10 },
    { name: "4 fromaggi", price: 15 },
]);
</script>

<template>
    <main>
        <h1>Pizzas</h1>
        <ul>
            <li v-for="pizza in pizzas">{{ pizza.name }} - {{ pizza.price }}</li>
        </ul>
        <div class="input">
            <input placeholder="Nom" type="text" v-model="pizzaToAdd.name" />
            <input placeholder="Prix" type="number" v-model="pizzaToAdd.price" />
        </div>
        <button @click="addPizza">Add pizza</button>
    </main>
</template>

<style scoped>
.input {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.input input {
    margin-bottom: 1rem;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 15px;
    outline: none;
    color: #fff;
}
</style>
