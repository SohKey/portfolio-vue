<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_up } from '../core/animations';
import portrait from '../assets/portrait.png'
import separator from '../assets/separator.png'

const profilePic = ref()
const footer = ref()
const header = ref()

const animations = [ 
fade_up(footer, 800),
fade_up(profilePic, 300),
fade_up(header, 800)
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
  <div class="bg-gradient-to-b from-neutral-900 to-slate-800 flex flex-col lg:bg-cyber bg-repeat-round bg-fixed bg-cover font-orbitron h-full lg:h-[90vh] xl:h-screen">
    <header ref="header" class="flex lg:hidden justify-center items-center mt-5 text-slate-200 pb-10">
      <nav class="w-fit">
        <ul class="flex text-4xl">
          <a href="#portfolio" class="ml-10 cursor-pointer p-5 rounded-l-full bg-left-top bg-repeat-round">My portfolio</a>
          <a href="#about" class="cursor-pointer p-5 bg-repeat-round">About me</a>
          <a href="#github" class="cursor-pointer p-5 rounded-r-full bg-repeat-round">Github & Certifications</a>
          <a href="mailto:thomas.rodriguez.pro38@gmail.com" class="cursor-pointer p-5 rounded-r-full bg-repeat-round">Get in Touch</a>
        </ul>
      </nav>
    </header>
    <div class="w-full h-full flex flex-col lg:flex-row justify-center items-center space-y-20 lg:space-x-20">
      <section ref="profilePic" class="w-[40%] lg:w-[20%] space-y-5 flex flex-col justify-center items-center">
        <img class="w-full rounded-full " :src="portrait" alt="">
      </section>
      <section class="text-slate-200 w-full w-[50%]">
        <div class="flex flex-col">  
          <v-typical :class="'text-8xl lg:text-7xl font-powerG mb-5'"
            :steps="['Hello !', 1000, `Hello, I'm Thomas !`, 4000]" :wrapper="'h1'"></v-typical>
          <v-typical class="hidden lg:flex text-3xl lg:text-xl text-slate-200 font-black font-mpro px-2 mt-5 rounded w-fit text-center"
            :steps="['>', 3000, '> JavaScript Fullstack developer', 1000, '> Feel free to contact me !', 1000]"
            :loop="Infinity" :wrapper="'p'"></v-typical>

        </div>
        <div class="flex justify-center lg:justify-start items-center">
          <img class="invert w-[80%] lg:w-[70%]" width="500" :src="separator" alt="">

        </div>
      </section>

    </div>
    <footer ref="footer" class="hidden lg:flex justify-center items-center mt-5 text-slate-200 pb-10">
      <nav class="w-fit lg:border lg:rounded-full">
        <ul class="flex text-4xl lg:text-lg xl:text-lg">
          <a href="#portfolio" class="ml-10 cursor-pointer p-5 rounded-l-full bg-left-top bg-repeat-round hover:text-gray-400">My portfolio</a>
          <a href="#about" class="cursor-pointer p-5 bg-repeat-round hover:text-gray-400">About me</a>
          <a href="#github" class="cursor-pointer p-5 rounded-r-full bg-repeat-round hover:text-gray-400">Github & Certifications</a>
          <a href="mailto:thomas.rodriguez.pro38@gmail.com" class="cursor-pointer p-5 rounded-r-full bg-repeat-round hover:text-gray-400">Get in Touch</a>
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