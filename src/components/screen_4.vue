<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_right, round_num, rotate_in, rotate_out, fade_up } from '../core/animations';
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
const text = ref()

const animations = [
    fade_up(text, 50),
    rotate_in(circle1, 100),
    rotate_out(circle2, 100),
    fade_right(box1, 450),
    fade_right(box2, 500),
    fade_right(box3, 550),
    fade_right(box4, 600),
    round_num(244)(contrib, 650),
    round_num(18)(pr, 700),
    round_num(150)(commits, 750),
]

onMounted(() => {
    animations.forEach(animation => animation.mount())
})
onUnmounted(() => animations.forEach(animation => animation.unmount()))
</script>

<template>
    <div id="github"
        class="w-full h-full 2xl:h-screen bg-gradient-to-b from-neutral-800 to-slate-900 lg:bg-cyber bg-repeat-round bg-fixed bg-cover">
        <div class="w-full h-full bg-gradient-to-b from-neutral-800 to-slate-900 clip-1">
            <section class="h-full w-full pt-20 pl-5">
                <div
                    class="bg-neutral-100 w-fit h-fit rounded-md text-neutral-800 text-xl flex p-5 font-orbitron space-x-2 cursor-pointer hover:bg-neutral-300">
                    <div class="flex items-center space-x-2">
                        <img width="40" :src="contribIcon" alt="">
                        <span class="text-2xl font-bold" ref="contrib"></span>+
                        <p>Contributions</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <img width="40" :src="prIcon" alt="">
                        <span class="text-2xl font-bold" ref="pr"></span>+
                        <p>Pull Requests</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <img width="40" :src="commitIcon" alt="">
                        <span class="text-2xl font-bold" ref="commits"></span>+
                        <p>Commits</p>
                    </div>
                </div>

                <div class="flex flex-col 2xl:flex-row mt-20">
                    <div class="w-full z-10 flex flex-col space-y-10">
                        <h1 class="bg-neutral-200 p-2 rounded text-6xl text-neutral-900 font-title w-fit">Github
                            <br> &
                            Certifications</h1>
                        <p ref="text" class="text-3xl border-l-2 pl-5 lg:text-xl text-neutral-100">
                            I am a fullstack JavaScript developer with a wide range of skills and experience, including
                            expertise in Node.js, Vue.js, Angular, Python, or Java. I invite you to visit my GitHub
                            profile,
                            where you will find a variety of projects that demonstrate my abilities and showcase
                            my dedication to creating high-quality, innovative software. Whether you're looking for
                            inspiration for your own projects or simply want to see what I'm capable of, my GitHub is
                            the
                            perfect place to start.
                        </p>
                        <a href="https://github.com/SohKey" class="text-3xl text-neutral-800 bg-gradient-to-bl from-neutral-100 to-neutral-400 p-2 rounded-md w-fit hover:bg-gradient-to-br">Github</a>
                    </div>
                    <div class="w-full h-[20vh] lg:h-[28vh] 2xl:hidden"></div>

                    <div class="w-full">
                        <div class="w-full h-full">
                            <div class="flex justify-center items-center relative w-full h-full">
                                <img ref="circle1" class="absolute" :src="circle" alt="">
                                <img ref="circle2" class="absolute" :src="circle" alt="">
                                <img class="absolute w-28 animate-[bounce_1s_ease-in-out_infinite] invert"
                                    :src="levelUp" alt="">
                            </div>

                        </div>
                    </div>
                    <div class="w-full h-[20vh] lg:h-[28vh] 2xl:hidden"></div>

                    <div
                        class="2xl:w-full z-10 h-full mb-20 lg:mt-10 flex flex-wrap 2xl:flex-col 2xl:space-y-5 lg:mr-5 justify-center">
                        <div ref="box1"
                            class="bg-slate-200 rounded-xl border-2 border-neutral-200 w-[40%] 2xl:w-full mb-2 2xl:mb-0">
                            <div class="flex bg-slate-700 rounded-xl items-center">
                                <img class="rounded-tl-xl rounded-bl-xl h-28" :src="cisco" alt="">
                                <span class="w-full text-neutral-100 p-2">
                                    <h3 class="text-2xl">Cybersecurity Essentials</h3>
                                </span>
                                <img width="60" :src="certif" alt="">
                            </div>
                        </div>
                        <div ref="box2"
                            class="bg-slate-200 rounded-xl border-2 border-neutral-200 w-[40%] 2xl:w-full ml-2 mb-2 2xl:ml-0">
                            <div class="flex bg-slate-700 rounded-xl items-center">
                                <img class="rounded-tl-xl rounded-bl-xl h-28" :src="cisco" alt="">
                                <span class="w-full text-neutral-100 p-2">
                                    <h3 class="text-2xl"> JavaScript Essentials</h3>
                                </span>
                                <img width="60" :src="certif" alt="">
                            </div>
                        </div>
                        <div ref="box3" class="bg-slate-200 rounded-xl border-2 border-neutral-200 w-[40%] 2xl:w-full">
                            <div class="flex bg-slate-700 rounded-xl items-center">
                                <img class="rounded-tl-xl rounded-bl-xl h-28" :src="cisco" alt="">
                                <span class="w-full text-neutral-100 p-2">
                                    <h3 class="text-2xl">CCNAv7: Introduction to Networks</h3>
                                </span>
                                <img width="60" :src="certif" alt="">
                            </div>
                        </div>
                        <div ref="box4"
                            class="bg-slate-200 rounded-xl border-2 border-neutral-200 w-[40%] 2xl:w-full ml-2 2xl:ml-0">
                            <div class="flex bg-slate-700 rounded-xl items-center">
                                <img class="rounded-tl-xl rounded-bl-xl h-28" :src="cisco" alt="">
                                <span class="w-full text-neutral-100 p-2">
                                    <h3 class="text-2xl">DevNet Associate</h3>
                                </span>
                                <img width="60" :src="certif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>