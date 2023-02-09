<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { appear_left, fade_up } from '../core/animations';

const icons = ref()
const profilePic = ref()
const footer = ref()

const animations = [ 
appear_left(icons, 300),
fade_up(footer, 800),
fade_up(profilePic, 300),
]

onMounted(() => {
  animations.forEach(animation => animation.mount())
})
onUnmounted(() => animations.forEach(animation => animation.unmount()))

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
</style> 

<template>
  <div class="bg-gradient-to-b from-neutral-900 to-slate-800 lg:bg-cyber bg-repeat-round bg-fixed bg-cover font-orbitron h-[40vh] md:h-[50vh] lg:h-[80vh] xl:h-screen">
    <div class="w-full h-full absolute">
      <section ref="profilePic" class="w-fit space-y-5 flex flex-col absolute top-48 left-0 justify-center items-center">
        <img class="xl:w-[60%] md:w-[50%] rounded-full" src="../assets/CyberPP.png" alt="">
        <h3 class="text-slate-200 w-fit cursor-pointer border-slate-100 border rounded p-1"><a href="mailto:sohkey.fetch@gmail.com">Contact</a> 💼</h3>
      </section>
      <section class="absolute top-80 left-96 ml-40 text-slate-200 xl:w-full xl:w-[50%]">
        <div class="flex flex-col">
          <v-typical :class="'text-6xl font-orbitron mb-5'"
            :steps="['Hello !', 1000, `Hello, I'm Thomas Rodriguez`, 4000]" :wrapper="'h1'"></v-typical>
          <v-typical class="bg-slate-200 text-slate-800 px-2 mt-5 rounded w-fit text-center"
            :steps="['>', 3000, '> JavaScript Fullstack developer', 1000, '> Feel free to contact me !', 1000]"
            :loop="Infinity" :wrapper="'p'"></v-typical>

        </div>
      </section>
      <section class="h-full items-center justify-center absolute right-0 xl:flex md:hidden">
        <div ref="icons" class="space-x-5 mr-10 border-r-2 pr-3">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript" width="40" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript" width="40" />
          </a>
          <a href="https://angular.io" target="_blank" rel="noreferrer">
            <img
              src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" />
          </a>
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
              alt="vuejs" width="40" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind"
              width="40" />
          </a>
          <a href="https://www.php.net" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php"
              width="40" />
          </a>
          <a href="https://www.java.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java"
              width="40" />
          </a>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python" width="40" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img
              src="https://git-scm.com/images/logo@2x.png" alt="git" width="40" />
          </a>
        </div>
      </section>
    </div>
    <footer ref="footer" class="flex justify-center items-center text-slate-200 xl:absolute bottom-5 inset-x-0">
      <nav class="w-fit border-2 rounded-full">
        <ul class="flex text-4xl xl:text-xl">
          <a href="#portfolio" class="cursor-pointer p-5 rounded-l-full bg-left-top bg-repeat-round">My portfolio</a>
          <a href="#about" class="cursor-pointer p-5 bg-repeat-round">About me</a>
          <a href="#github" class="cursor-pointer p-5 rounded-r-full bg-repeat-round">Github & Certifs</a>
        </ul>
      </nav>
    </footer>
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
</script>