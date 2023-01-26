<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_left, fade_right } from '../core/animations';
import certif from '../assets/certif.png';
import cisco from '../assets/cisco.jpg';

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
    <div class="h-screen w-full bg-gradient-to-b from-neutral-800 to-slate-900  flex justify-center">
        <div class="w-[80%] mt-10">
            <section class="h-28 w-fit">
                <div class="bg-neutral-200 p-2 rounded">
                    <h1 class="text-6xl text-neutral-900 font-title">Certifications</h1>
                </div>
            </section>
            <section class="w-[73%] flex flex-col justify-center items-center">
                <div class="w-full flex space-x-5 my-5">
                    <div class="w-full bg-slate-200 rounded-xl border-2 border-neutral-200">
                        <div class="flex bg-slate-700 rounded-xl items-center">
                            <img class="rounded-tl-xl rounded-bl-xl" :src="cisco" alt="">
                            <span class="w-full text-neutral-100 p-2">
                                <h3 class="text-2xl">Cybersecurity Essentials</h3>
                                <p>Issue date: May 2022</p>
                            </span>
                            <img width="60" :src="certif" alt="">
                        </div>
                    </div>
                    <div class="w-full bg-slate-200 rounded-xl border-2 border-neutral-200">
                        <div class="flex bg-slate-700 rounded-xl items-center">
                            <img class="rounded-tl-xl rounded-bl-xl" :src="cisco" alt="">
                            <span class="w-full text-neutral-100 p-2">
                                <h3 class="text-2xl">DevNet Associate</h3>
                                <p>Issue date: April 2022</p>
                            </span>
                            <img width="60" :src="certif" alt="">
                        </div>
                    </div>
                </div>
                <div class="w-full flex space-x-5 my-5">
                    <div class="w-full bg-slate-200 rounded-xl border-2 border-neutral-200">
                        <div class="flex bg-slate-700 rounded-xl items-center">
                            <img class="rounded-tl-xl rounded-bl-xl" :src="cisco" alt="">
                            <span class="w-full text-neutral-100 p-2">
                                <h3 class="text-2xl">CCNAv7: Introduction to Networks</h3>
                                <p>Issue date: January 2022</p>
                            </span>
                            <img width="60" :src="certif" alt="">
                        </div>
                    </div>
                    <div class="w-full bg-slate-200 rounded-xl border-2 border-neutral-200">
                        <div class="flex bg-slate-700 rounded-xl items-center">
                            <img class="rounded-tl-xl rounded-bl-xl" :src="cisco" alt="">
                            <span class="w-full text-neutral-100 p-2">
                                <h3 class="text-2xl"> JavaScript Essentials</h3>
                                <p>Issue date: September 2022</p>
                            </span>
                            <img width="60" :src="certif" alt="">
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>