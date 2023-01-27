<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_down, fade_right, fade_up } from '../core/animations';
import diplome from '../assets/certificat.png';
import progress from '../assets/progress.png';
import learning from '../assets/learning.png';

const text = ref()
const title = ref()
const box1 = ref()
const box2 = ref()
const box3 = ref()

const animations = [
    fade_right(text, 300),
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
</style>

<template>
    <div id="about" class="w-full bg-cyber bg-repeat-round bg-fixed bg-cover lg:h-screen flex flex-col md:justify-center md:h-[60vh]">
        <div class="h-full bg-gradient-to-b from-slate-800 to-neutral-900 clip-2">
            <section class="h-full py-10 text-neutral-800 relative space-y-10">
                <div class="flex flex-col md:flex-row">
                    <div class="w-[60%] h-[50%] flex items-center justify-center">
                    <p ref="text" class="w-[60%] text-neutral-200 text-xl border-l p-5 md:max-2xl:w-[80%]">
                        Years of programming experience that can serve you.
                        Highly skilled CTO with proven field experience, I write Node.js and GraphQL APIs to provide
                        tech
                        companies with an efficient and outstanding growth. Through a self-taught background, I spent
                        thousands of hours perfecting my skills to help you gain an unfair advantage over your
                        competitors.

                        I manage projects from POC to production release and handle the whole conception of services
                        including Vue.js applications, containerization, NoSQL or in memory database like RedisGraph or
                        Neo4J, web servers or CDNs, Kubernetes schedulers with tools like Helmfile and Git automated
                        workflows.

                        You can find many of my own JavaScript libraries and open source tools on my GitHub profile
                    </p>
                </div>
                <h2 ref="title" class="w-[50%] lg:w-[30%] h-fit text-7xl bg-slate-200 p-2 m-5 rounded font-title">
                    Making Websites, API's & open source solutions
                </h2>
                </div>

                <div class="w-full flex justify-center text-neutral-800">
                    <div ref="box1" class="bg-slate-200 w-72 m-5 rounded-md">
                        <p class="h-1 w-full bg-sky-500 rounded-t-md"></p>
                        <div class="pt-5 px-5 absolute">
                            <h4 class="text-3xl">Scientific <br>baccalauréat</h4>
                            <div class="flex justify-center items-center mt-5">
                                <span>Pierre du terrail <br> high school (France)</span>
                                <img :src="diplome" class="h-28 rounded" alt="diplome">
                            </div>
                        </div>
                    </div>
                    <div ref="box2" class="bg-slate-200 w-72 m-5 rounded-md">
                        <p class="h-1 w-full bg-emerald-500 rounded-t-md"></p>
                        <div class="pt-5 px-5">
                            <h4 class="text-3xl inline-block">Higher
                                <br>|<span class="ml-20">National</span>
                                <br>Diploma
                            </h4>
                            <span class="absolute top-5">[BTEC]</span>
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

                    <div ref="box3" class="bg-slate-200 w-72 m-5 rounded-md">
                        <p class="h-1 w-full bg-orange-500 rounded-t-md"></p>
                        <div class="pt-5 px-5">
                            <h4 class="text-3xl">Autodidact
                                <br> & <span class="ml-10">Self-Taught</span>
                            </h4>
                            <div class="flex mt-5 justify-center items-center">
                                <img :src="learning" class="h-28" alt="learning">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>