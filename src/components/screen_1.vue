<style>
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&family=Rubik+80s+Fade&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
</style> 
<template>
  <div class="h-screen w-screen bg-cyber bg-repeat-round bg-fixed bg-cover font-orbitron flex flex-col">
    <div class="flex h-[90%]">
      <section class="w-[50%] space-y-5 flex flex-col justify-center items-center">
        <img class="h-[50%] rounded-full hover:animate-[profilePicture_3s_ease-in-out_infinite]" src="../assets/CyberPP.png" alt="">
        <h3 class="text-slate-200">Contact & Curriculum Vitae 💼</h3>
      </section>
      <section class="text-slate-200 w-full flex flex-col justify-center">
        <div>
          <v-typical :class="'text-6xl font-orbitron mb-5'"
            :steps="['Hello !', 1000, `Hello, I'm Thomas Rodriguez`, 4000]" :wrapper="'h1'"></v-typical>
          <v-typical class="bg-slate-200 text-slate-800 px-2 mt-5 rounded w-fit text-center"
            :steps="['>', 3000, '> JavaScript Fullstack developer', 1000, '> Feel free to contact me !', 1000]"
            :loop="Infinity" :wrapper="'p'"></v-typical>

        </div>
      </section>
      <section class="flex items-center justify-center">
        <div class="space-x-5 mr-20 border-r-2 pr-3 animate-[appear_2s_ease-in-out]">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img class="animate-[iconAppear_2s_ease-in-out] hover:animate-[wiggle_1s_ease-in-out_infinite]"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript" width="40" height="40" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img class="animate-[iconAppear_2s_ease-in-out] hover:animate-[wiggle_1s_ease-in-out_infinite]"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript" width="40" height="40" />
          </a>
          <a href="https://angular.io" target="_blank" rel="noreferrer">
            <img class="animate-[iconAppear_2s_ease-in-out] hover:animate-[wiggle_1s_ease-in-out_infinite]"
              src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40" />
          </a>
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
            <img class="animate-[iconAppear_2s_ease-in-out] hover:animate-[wiggle_1s_ease-in-out_infinite]"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
              alt="vuejs" width="40" height="40" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img class="animate-[iconAppear_2s_ease-in-out] hover:animate-[wiggle_1s_ease-in-out_infinite]"
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40"
              height="40" />
          </a>
          <a href="https://www.php.net" target="_blank" rel="noreferrer">
            <img class="animate-[iconAppear_2s_ease-in-out] hover:animate-[wiggle_1s_ease-in-out_infinite]"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php"
              width="40" height="40" />
          </a>
          <a href="https://www.java.com" target="_blank" rel="noreferrer">
            <img class="animate-[iconAppear_2s_ease-in-out] hover:animate-[wiggle_1s_ease-in-out_infinite]"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java"
              width="40" height="40" />
          </a>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <img class="animate-[iconAppear_2s_ease-in-out] hover:animate-[wiggle_1s_ease-in-out_infinite]"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python" width="40" height="40" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img class="animate-[iconAppear_2s_ease-in-out] hover:animate-[wiggle_1s_ease-in-out_infinite]"
              src="https://www.vectorlogo.zone/loghover:bg-slate-200os/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
          </a>
        </div>
      </section>
    </div>
    <footer class="flex justify-center items-center text-slate-200">
      <nav class="w-fit border-2 rounded-full">
        <ul class="flex text-xl">
          <a class="cursor-pointer p-5 rounded-l-full hover:bg-cyber-cadre bg-left-top bg-repeat-round">My portfolio</a>
          <a href="#about" class="cursor-pointer p-5 hover:bg-cyber bg-repeat-round">About me</a>
          <a class="cursor-pointer p-5 rounded-r-full hover:bg-cyber-bulding bg-repeat-round">Github & Tools</a>
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