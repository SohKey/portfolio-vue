<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_left, fade_right, round_num, rotate_in, rotate_out } from '../core/animations';
import certif from '../assets/certif.png';
import cisco from '../assets/cisco.jpg';
import commitIcon from '../assets/commit.png';
import prIcon from '../assets/pr.png';
import contribIcon from '../assets/contrib.png';
import circle from '../assets/circle.png';
import levelUp from '../assets/levelUp.png';

const box1 = ref()
const box2 = ref()
const box3 = ref()
const box4 = ref()
const contrib = ref()
const pr = ref()
const commits = ref()
const circle1 = ref()
const circle2 = ref()
const text1 = ref()
const text2 = ref()

const animations = [
    fade_right(text1, 50),
    fade_left(text2, 50),
    rotate_in(circle1, 100),
    rotate_out(circle2, 100),
    fade_right(box1, 450),
    fade_right(box2, 500),
    fade_left(box3, 550),
    fade_left(box4, 600),
    round_num(244)(contrib, 650, true),
    round_num(18)(pr, 700, true),
    round_num(150)(commits, 750, true),
]

onMounted(() => {
    animations.forEach(animation => animation.mount())
})
onUnmounted(() => animations.forEach(animation => animation.unmount()))
</script>

<template>
    <div class="h-screen w-full bg-gradient-to-b from-neutral-800 to-slate-900 flex justify-center">
        <img ref="circle1" class="absolute mt-20" :src="circle" alt="">
        <img class="absolute mt-80 invert" width="125" :src="levelUp" alt="">
        <img ref="circle2" class="absolute mt-20" :src="circle" alt="">
        <section class="w-full absolute mt-10">
            <p ref="text1" class="text-xl text-neutral-100 absolute left-0 p-5 w-[30%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, libero asperiores expedita voluptas
                accusamus, sint nemo atque fugit amet blanditiis quas quae, delectus suscipit omnis! Accusantium sunt
                quis doloribus culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, libero asperiores expedita voluptas
                accusamus, sint nemo atque fugit amet blanditiis quas quae, delectus suscipit omnis! Accusantium sunt
                quis doloribus culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, libero asperiores expedita voluptas
                accusamus, sint nemo atque fugit amet blanditiis quas quae, delectus suscipit omnis! Accusantium sunt
                quis doloribus culpa.
            </p>
        </section>
        <section class="h-[90%] w-full absolute m-5 mr-20">
            <div class="mt-10 bg-neutral-100 w-fit rounded-md text-neutral-800 text-xl flex space-x-5 p-5 font-orbitron absolute right-0 top-0 ">
                <div class="flex items-center space-x-2">
                    <img width="40" :src="contribIcon" alt="">
                    <span class="text-2xl font-bold" ref="contrib"></span>+
                    <p>Contributions</p>
                </div>
                <div class="flex items-center space-x-2">
                    <img width="40" :src="prIcon" alt="">
                    <span class="text-2xl font-bold" ref="pr"></span>+
                    <p>Pull Request</p>
                </div>
                <div class="flex items-center space-x-2">
                    <img width="40" :src="commitIcon" alt="">
                    <span class="text-2xl font-bold" ref="commits"></span>+
                    <p>Commits</p>
                </div>
            </div>
            <div class="mt-10 bg-neutral-200 p-2 rounded w-fit absolute right-0 top-28">
                <h1 class="text-6xl text-neutral-900 font-title">Github</h1>
            </div>
            <div class="">
                <p ref="text2" class="text-xl text-neutral-100 p-5 absolute right-0 bottom-10 w-[30%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, libero asperiores expedita voluptas
                accusamus, sint nemo atque fugit amet blanditiis quas quae, delectus suscipit omnis! Accusantium sunt
                quis doloribus culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, libero asperiores expedita voluptas
                accusamus, sint nemo atque fugit amet blanditiis quas quae, delectus suscipit omnis! Accusantium sunt
                quis doloribus culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, libero asperiores expedita voluptas
                accusamus, sint nemo atque fugit amet blanditiis quas quae, delectus suscipit omnis! Accusantium sunt
                quis doloribus culpa.
            </p>
            </div>
        </section>
        <section class="h-screen w-full absolute">
            <div class="absolute left-0 bottom-0 m-5">
                <div class="bg-neutral-200 p-2 rounded w-fit">
                    <h1 class="text-6xl text-neutral-900 font-title">Certifications</h1>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <div class="w-full flex space-x-5 my-5">
                        <div ref="box1" class="w-full bg-slate-200 rounded-xl border-2 border-neutral-200">
                            <div class="flex bg-slate-700 rounded-xl items-center">
                                <img class="rounded-tl-xl rounded-bl-xl h-28" :src="cisco" alt="">
                                <span class="w-full text-neutral-100 p-2">
                                    <h3 class="text-2xl">Cybersecurity Essentials</h3>
                                    <p>Issue date: May 2022</p>
                                </span>
                                <img width="60" :src="certif" alt="">
                            </div>
                        </div>
                        <div ref="box2" class="w-full bg-slate-200 rounded-xl border-2 border-neutral-200">
                            <div class="flex bg-slate-700 rounded-xl items-center">
                                <img class="rounded-tl-xl rounded-bl-xl h-28" :src="cisco" alt="">
                                <span class="w-full text-neutral-100 p-2">
                                    <h3 class="text-2xl">DevNet Associate</h3>
                                    <p>Issue date: April 2022</p>
                                </span>
                                <img width="60" :src="certif" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex space-x-5 my-5">
                        <div ref="box3" class="w-full bg-slate-200 rounded-xl border-2 border-neutral-200">
                            <div class="flex bg-slate-700 rounded-xl items-center">
                                <img class="rounded-tl-xl rounded-bl-xl h-28" :src="cisco" alt="">
                                <span class="w-full text-neutral-100 p-2">
                                    <h3 class="text-2xl">CCNAv7: Introduction to Networks</h3>
                                    <p>Issue date: January 2022</p>
                                </span>
                                <img width="60" :src="certif" alt="">
                            </div>
                        </div>
                        <div ref="box4" class="w-full bg-slate-200 rounded-xl border-2 border-neutral-200">
                            <div class="flex bg-slate-700 rounded-xl items-center">
                                <img class="rounded-tl-xl rounded-bl-xl h-28" :src="cisco" alt="">
                                <span class="w-full text-neutral-100 p-2">
                                    <h3 class="text-2xl"> JavaScript Essentials</h3>
                                    <p>Issue date: September 2022</p>
                                </span>
                                <img width="60" :src="certif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>