<script setup>
import Home from './components/screen_1.vue'
import About from './components/screen_2.vue'
import Portfolio from './components/screen_3.vue'
import Certifications from './components/screen_4.vue'
import Scool from './components/screen_5.vue'
</script>

<template>
  <div class="w-full">
    <Home msg="Thomas Rodriguez" />
    <About msg="About Me" />
    <Portfolio msg="Portfolio" /> 
    <Certifications msg="Certifications" />
    <Scool msg="Scool" />
  </div>
</template>
