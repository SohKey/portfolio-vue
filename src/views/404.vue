<template>
    <div class="h-screen w-full bg-gradient-to-b from-neutral-900 to-slate-800 flex flex-col justify-center items-center text-slate-100 space-y-5">
        <h1 class="text-8xl font-orbitron">404</h1>
        <p class="text-2xl font-mpro">Are you lost ? No problem, <a @click="redirect" class="text-sky-500 cursor-pointer font-mpro hover:text-sky-600">here</a></p>
    </div>
</template>

<script>
export default {
    methods: {
        redirect() {
            this.$router.push("/")
        }
    }
}
</script>