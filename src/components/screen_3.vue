<template>
    <div class="h-screen text-slate-200 w-screen bg-gradient-to-t from-slate-700 to-neutral-900">
        <h1 class="text-5xl te">Portfolio</h1>
        <section class="flex mt-10 h-[80%]">
            <div class="w-[50%] border-r-2 border-slate-200">
                <h2 class="text-3xl text-center">Github</h2>
                <div class="mt-10 w-full">
                    <div class="flex flex-col justify-center item-center">
                        <v-typical class="text-xl my-5 text-center text-slate-200" :steps="['📌', 1000, 'Pinned projects 📌', 1000]"
                            :wrapper="'h3'"></v-typical>
                        <div class="flex justify-center item-center space-x-5">
                            <a href="https://github.com/aresrpg/aresrpg">
                            <img src="https://github-readme-stats.vercel.app/api/pin/?username=aresrpg&repo=aresrpg" />
                        </a>
                        <a href="https://github.com/SohKey/poke-app-angular">
                            <img
                                src="https://github-readme-stats.vercel.app/api/pin/?username=sohkey&repo=poke-app-angular" />
                        </a>
                        </div>
                    </div>
                    <h2 class="text-xl text-center">Github Contribution</h2>
                    <div class="flex flex-col">
                        <img class="h-48" src="https://github-readme-stats.vercel.app/api/top-langs/?username=SohKey&layout=compact&card_width=370&theme=dracula&bg_color=00000000"/>
                        <img class="h-48" src="https://github-readme-stats.vercel.app/api?username=SohKey&show_icons=true&theme=dracula&bg_color=00000001"/>                    </div>
                    </div>
            </div>
            <div class="w-[50%]">
                <h1 class="text-3xl text-center">Scool</h1>
            </div>
        </section>
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
</script>s