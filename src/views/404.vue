<template>
    <div class="h-screen w-full bg-gradient-to-b from-slate-800 to-neutral-900 flex justify-center items-center flex-col space-y-5 text-neutral-100">
        <h1 class="text-8xl"> 404 </h1>
        <h1 class="text-4xl">Sorry ! There is nothing here...</h1>
        <a class="bg-neutral-100 text-neutral-800 p-1 rounded cursor-pointer font-bold hover:bg-slate-300" @click="redirect">Take me back</a>
    </div>
</template>

<script>
export default {
    methods: {
        redirect() {
            this.$router.push('/')
        }
    }
}
</script>