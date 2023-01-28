<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_left, fade_right } from '../core/animations';
import pokeApp from '../assets/pokeApp.png';
import aresrpg from '../assets/aresrpg.png';
import pokeApi from '../assets/poke-api.png';
import giveway from '../assets/giveway.png';

const box1 = ref()
const box2 = ref()
const box3 = ref()
const box4 = ref()

const animations = [
    fade_right(box1, 450),
    fade_right(box2, 500),
    fade_left(box3, 550),
    fade_left(box4, 600),
]

onMounted(() => {
    animations.forEach(animation => animation.mount())
})
onUnmounted(() => animations.forEach(animation => animation.unmount()))
</script>

<template>
    <div id="portfolio" class="h-full w-full bg-gradient-to-b from-slate-800 to-neutral-900 lg:bg-cyber bg-repeat-round bg-fixed bg-cover text-neutral-200">
        <section class="h-36 w-full flex justify-center items-center font-orbitron">
            <h1 class="mx-20 text-6xl">Personal Projects</h1>
        </section>
        <section class="w-full mt-5 flex justify-center items-center">
            <div class="w-[60%] flex justify-center items-center space-x-5 text-center font-orbitron text-xl font-bold md:max-2xl:flex-col md:max-2xl:space-x-0 md:max-2xl:space-y-3">
                <div class="h-full flex justify-center items-center flex-col space-y-5">
                    <div ref="box1" class="shadow-xl shadow-slate-800">                       
                        <a href="https://github.com/SohKey/poke-app-angular">
                            <p>Pokemon APP written in Angular</p>
                            <img :src="pokeApp" alt="poke app">
                        </a>
                    </div>
                    <div ref="box2" class="shadow-xl shadow-slate-800 space-y-3">
                        <a href="https://github.com/SohKey/poke-api">
                            <p>Pokemon API & authentification in JavaScript</p>
                            <img :src="pokeApi" alt="">
                        </a>
                    </div>
                </div>
                <div class="h-full flex justify-center items-center flex-col space-y-5">
                    <div ref="box3" class="shadow-xl shadow-slate-800 space-y-3">
                        <a href="https://github.com/aresrpg">
                            <p>AresRPG, JavaScript minecraft server</p>
                            <img :src="aresrpg" alt="">
                        </a>
                    </div>
                    <div ref="box4" class="shadow-xl shadow-slate-800 space-y-1">
                        <a href="https://github.com/SohKey/Giveaway-BOT">
                            <p>Python BOT finding NFT giveways</p>
                            <img :src="giveway" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full flex justify-center items-center mt-10">
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