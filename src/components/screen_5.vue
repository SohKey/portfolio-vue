<script setup>
import router from '../router';
const go = (to) => {
    router.push(to)
}

// <a v-on:click="go('gamepreview')" class="text-xl text-white font-orbitron cursor-pointer hover:underline">click here</a>

</script>

<template>
    <div class="h-[50vh] lg:h-screen w-full space-y-10 bg-gradient-to-b from-slate-800 to-slate-900 lg:bg-cyber bg-repeat-round bg-fixed bg-cover flex justify-center items-center flex-col">
        <h1 class="text-6xl font-orbitron text-slate-100">Coming soon...</h1>
    </div>
</template>