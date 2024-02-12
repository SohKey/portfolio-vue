<script setup>
import gallerie from './gallerie.vue';
</script>

<template>
    <div id="portfolio" class="h-full w-full bg-gradient-to-b from-slate-800 to-neutral-900 lg:bg-cyber bg-repeat-round bg-fixed bg-cover text-neutral-200">
        <section class="w-full flex justify-center items-center font-orbitron">
            <h1 class="mx-20 text-7xl">Personal Projects</h1>
        </section>
        <gallerie />
        <section class="w-full flex justify-center items-center mt-10 text-4xl lg:text-xl font-mpro">
            <p class="bg-neutral-100 text-neutral-800 rounded w-fit p-2 my-5">You can check all my projects <a class="text-sky-700 font-bold" href="https://github.com/SohKey?tab=repositories">here</a> !</p>
        </section>
    </div>
</template>

<script>
import VTypical from 'vue-typical';

export default {
    data: function () {
        return {
            button: false
        }
    },
    methods: {

    },
    components: {
        VTypical,
    },
}
</script>s