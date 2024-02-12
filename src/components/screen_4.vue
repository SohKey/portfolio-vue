<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { round_num, fade_right, fade_left, fade_up } from "../core/animations";
import cyber from "../assets/hacking.png";
import js from "../assets/javascript.png";
import network from "../assets/computer-networks.png";
import dev from "../assets/app-development.png";
import commitIcon from "../assets/commit.png";
import prIcon from "../assets/pr.png";
import contribIcon from "../assets/contrib.png";

const contrib = ref();
const pr = ref();
const commits = ref();
const title = ref();
const text1 = ref();
const text2 = ref();
const text3 = ref();

const certif1 = ref();
const certif2 = ref();
const certif3 = ref();
const certif4 = ref();

const animations = [
  fade_up(title, 200),
  fade_right(text1, 300),
  fade_right(text2, 400),
  fade_right(text3, 500),

  fade_left(certif1, 100),
  fade_left(certif2, 200),
  fade_left(certif3, 300),
  fade_left(certif4, 400),

  round_num(244)(contrib, 650),
  round_num(18)(pr, 700),
  round_num(150)(commits, 750),
];

onMounted(() => {
  animations.forEach((animation) => animation.mount());
});
onUnmounted(() => animations.forEach((animation) => animation.unmount()));
</script>

<template>
  <div
    id="github"
    class="w-full h-full initial bg-gradient-to-b from-neutral-800 to-slate-900 lg:bg-cyber bg-repeat-round bg-fixed bg-cover"
  >
    <div
      class="w-full h-full bg-gradient-to-b from-neutral-800 to-slate-900 clip-1 flex justify-center items-center"
    >
      <section class="h-full w-[90%] pt-20">

        <div class="mt-20 w-full flex items-center flex-col 2xl:flex-row">
          <div class="w-full z-10 flex flex-col justify-center items-center 2xl:items-start space-y-10 mb-20">
            <h1 
            ref="title"
            class="w-full text-6xl text-neutral-200 font-powerG w-fit">
              GITHUB <span class="text-gradient">&</span> <br/>
              CERTIFICATIONS
            </h1>
            <div class="w-full">
              <div
              ref="text"
              class="font-mpro text-left leading-8 text-4xl lg:text-xl text-neutral-100 w-full lg:w-[70%] space-y-5"
            >
              <p 
              ref="text1"
              class="border-l-2 pl-5">
                I am a fullstack JavaScript developer with a wide range of
                skills and experience, including expertise in Node.js, Vue.js,
                Angular, Python, or Java.
              </p>
              <p
              ref="text2"
              class="border-l-2 pl-5">
                I invite you to visit my GitHub profile, where you will find a
                variety of projects that demonstrate my abilities and showcase
                my dedication to creating high-quality, innovative software.
              </p>
              <p 
              ref="text3"
              class="border-l-2 pl-5">
                Whether you're looking for inspiration for your own projects or
                simply want to see what I'm capable of, my GitHub is the perfect
                place to start.
              </p>
            </div>
            </div>
            
            <div class="w-full">
              <a
              href="https://github.com/SohKey"
              class="text-2xl font-powerG text-gradient rounded-md w-fit transition-all hover:text-3xl"
              >VISIT MY GITHUB</a
            >
            </div>
          </div>
          <div
            class="h-full w-full flex flex-wrap justify-center items-center space-x-5 2xl:space-x-0 2xl:space-y-5 2xl:flex-col 2xl:w-[50%] mt-10"
          >
          <div class="w-[48%] 2xl:w-full space-y-5">
            <div
              ref="certif1"
              class="bg-gradient-to-br from-red-500 to-sky-900 h-[10vh] w-full rounded-xl flex justify-left items-center space-x-2 px-5"
            >
              <img :src="cyber" alt="" width="50" />
              <p class="text-slate-200 font-mpro text-2xl">
                Cybersecurity Essentials
              </p>
            </div>
            
            <div
            ref="certif2"
              class="bg-gradient-to-br from-violet-600 to-red-900 h-[10vh] w-full rounded-xl flex justify-left items-center space-x-2 px-5"
            >
              <img :src="dev" alt="" width="50" />
              <p class="text-slate-200 font-mpro text-2xl">DevNet Associate</p>
            </div>
            
          </div>
          <div class="w-[48%] 2xl:w-full space-y-5">
            <div
            ref="certif3"
              class="bg-gradient-to-br from-blue-500 to-red-500 h-[10vh] w-full rounded-xl flex justify-left items-center space-x-2 px-5"
            >
              <img :src="js" alt="" width="50" />
              <p class="text-slate-200 font-mpro text-2xl">
                JavaScript Essentials
              </p>
            </div>
            <div
            ref="certif4"
              class="bg-gradient-to-br from-green-500 to-sky-700 h-[10vh] w-full rounded-xl flex justify-left items-center space-x-2 px-5"
            >
              <img :src="network" alt="" width="50" />
              <p class="text-slate-200 font-mpro text-2xl">
                CCNAv7 Introduction to networks
              </p>
            </div>
          </div>
          </div>
        </div>
        <div class="w-full h-full flex justify-center items-center mt-20 2xl:mt-10 mb-20">

          <div
          class="bg-slate-200 w-fit h-fit rounded-md text-neutral-800 text-xl lg:space-x-5 flex p-5 font-orbitron flex flex-col justify-start items-center xl:flex-row"
        >
          <div class="w-full lg:w-fit flex justify-start items-center space-x-2">
            <img width="40" :src="contribIcon" alt="" />
            <span class="text-2xl font-bold" ref="contrib"></span>+
            <p>Contributions</p>
          </div>
          <div class="w-full lg:w-fit flex justify-start items-center space-x-2">
            <img width="40" :src="prIcon" alt="" />
            <span class="text-2xl font-bold" ref="pr"></span>+
            <p>Pull Requests</p>
          </div>
          <div class="w-full lg:w-fit flex justify-start items-center space-x-2">
            <img width="40" :src="commitIcon" alt="" />
            <span class="text-2xl font-bold" ref="commits"></span>+
            <p>Commits</p>
          </div>
        </div>
        </div>
      </section>
    </div>
  </div>
</template>
