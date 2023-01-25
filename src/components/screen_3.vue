<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_left, fade_right, fade_up } from '../core/animations';
import pokeApp from '../assets/pokeApp.png';
import aresrpg from '../assets/aresrpg.png';
import pokeApi from '../assets/poke-api.png';

const title = ref()
const box1 = ref()
const box2 = ref()
const box3 = ref()
const box4 = ref()

const animations = [
    fade_up(title, 400),
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
    <div class="h-screen w-full bg-cyber bg-repeat-round bg-fixed bg-cover text-neutral-200">
        <section class="h-36 w-full flex justify-center items-center font-orbitron">
            <h1 ref="title" class="mx-20 text-6xl">Personal Projects</h1>
        </section>
        <section class="w-full h-[60%] mt-20 flex justify-center items-center">
            <div class="w-[60%] h-full flex justify-center items-center space-x-5 text-center font-orbitron text-xl font-bold">
                <div class="h-full flex justify-center items-center flex-col space-y-5">
                    <div ref="box1" class="shadow-xl shadow-slate-800 space-y-3">
                        <p>Pokemon APP written in Angular</p>
                        <img :src="pokeApp" alt="">
                    </div>
                    <div ref="box2" class="shadow-xl shadow-slate-800 space-y-3">
                        <p>Pokemon API & authentification in JavaScript</p>
                        <img :src="pokeApi" alt="">
                    </div>
                </div>
                <div class="h-full flex justify-center items-center flex-col space-y-5">
                    <div ref="box3" class="shadow-xl shadow-slate-800 space-y-3">
                        <p>AresRPG, minecraft server fully in JavaScript</p>
                        <img :src="aresrpg" alt="">
                    </div>
                    <div ref="box4" class="shadow-xl shadow-slate-800 space-y-3">
                        <p>Comming out soon...</p>
                        <img :src="pokeApi" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import VTypical from 'vue-typical';

export default {
    methods: {

    },
    components: {
        VTypical,
    },
}
</script>s