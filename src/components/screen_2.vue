<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_down, fade_right, fade_up, fade_left } from '../core/animations';
import diplome from '../assets/certificat.png';
import progress from '../assets/progress.png';
import learning from '../assets/learning.png';

const text1 = ref()
const text2 = ref()
const text3 = ref()
const title = ref()
const box1 = ref()
const box2 = ref()
const box3 = ref()

const animations = [
    fade_right(text1, 300),
    fade_left(text2, 300),
    fade_right(text3, 300),
    fade_down(title, 400),
    fade_up(box1, 450),
    fade_up(box2, 500),
    fade_up(box3, 550),
]

onMounted(() => {
    animations.forEach(animation => animation.mount())
})
onUnmounted(() => animations.forEach(animation => animation.unmount()))
</script>

<template>
    <div id="about"
        class="w-full bg-gradient-to-b from-slate-800 to-neutral-900 lg:bg-cyber bg-repeat-round bg-fixed bg-cover lg:h-screen flex flex-col md:justify-center md:h-fit lg:h-full">
        <div class="h-full bg-gradient-to-b from-slate-800 to-neutral-900 clip-2">
            <section class="h-full py-10 text-neutral-800 relative space-y-10 mt-10">
                <div class="flex flex-col lg:flex-row justify-center items-center space-y-10">
                    <h2 ref="title"
                        class="lg:hidden mt-5 w-[90%] lg:w-[50%] lg:w-[30%] h-fit text-7xl bg-slate-200 p-2 m-5 rounded font-title">
                        Making Websites, API's & open source solutions
                    </h2>
                    <div class="w-full lg:w-[60%] h-[50%] flex items-center justify-center">
                        <div
                            class="font-mpro w-[90%] text-left leading-8 lg:w-[60%] text-neutral-200 text-4xl lg:text-xl lg:w-[80%] space-y-10">
                            <p ref="text1" class="border-l-2 p-5">
                                As a student of informatic development, I have a strong foundation in programming and
                                software engineering. I have experience building APIs, websites, and working on open-source
                                projects, which has allowed me to develop a diverse set of skills and a deep understanding
                                of various technologies.
                            </p>
                            <p ref="text2" class="bg-slate-200 text-neutral-800 rounded-xl p-5">
                                My projects have been well-received and have demonstrated my
                                ability to design and implement complex systems. I am passionate about technology and am
                                constantly seeking new challenges to improve my skills and knowledge.
                            </p>
                            <p ref="text3" class="border-l-2 p-5">
                                I am confident that my
                                experience and skills make me a strong candidate for any development opportunity and I would
                                be excited to be a part of a team that values innovation and creativity.
                            </p>
                        </div>
                    </div>
                    <h2 ref="title"
                        class="hidden lg:block w-[90%] lg:w-[50%] lg:w-[30%] h-fit text-7xl bg-slate-200 p-2 m-5 rounded font-title">
                        Making Websites, API's & open source solutions
                    </h2>
                </div>
                <div class="w-full flex justify-center text-neutral-800 pb-10">
                    <div class="w-[90%] lg:w-[80%] flex justify-center items-center flex-col flex-col lg:flex-row">
                        <div ref="box1" class="bg-slate-200 w-full m-5 rounded-md">
                            <p class="h-1 w-full bg-sky-500 rounded-t-md"></p>
                            <div class="p-10 flex lg:flex-col space-x-20 lg:space-x-0 justify-center items-center">
                                <h4 class="text-3xl lg:w-full">Scientific <br>baccalauréat</h4>
                                <div class="flex justify-start items-center space-x-5">
                                    <span>Pierre du terrail <br> high school (France)</span>
                                    <img :src="diplome" class="h-28 rounded" alt="diplome">
                                </div>
                            </div>
                        </div>
                        <div ref="box2" class="bg-slate-200 w-full m-5 rounded-md">
                            <p class="h-1 w-full bg-emerald-500 rounded-t-md"></p>
                            <div class="p-10 flex justify-center items-center space-x-20 lg:flex-col lg:space-x-0">
                                <h4 class="text-3xl inline-block">
                                    Higher
                                    <br>|<span class="ml-20">National</span>
                                    <br>Diploma
                                </h4>
                                <div class="flex justify-center items-center space-x-2">
                                    <span>Algoud laffemas<br>high school (France)</span>
                                    <img :src="progress" class="h-28 rounded" alt="progress">
                                </div>

                                <div class="hidden list-disc">
                                    <li>Stage 5 semaines CEA [Grenoble]</li>
                                    <li>Stage 7 semaines AresRPG [Remote]</li>
                                </div>
                            </div>
                        </div>

                        <div ref="box3" class="bg-slate-200 w-full m-5 rounded-md">
                            <p class="h-1 w-full bg-orange-500 rounded-t-md"></p>
                            <div class="p-10 flex justify-center items-center space-x-40 lg:flex-col lg:space-x-0">
                                <h4 class="text-3xl">Autodidact
                                    <br> & <span class="ml-10">Self-Taught</span>
                                </h4>
                                <div class="flex mt-5 justify-center items-center">
                                    <img :src="learning" class="h-28" alt="learning">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>