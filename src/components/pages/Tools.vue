<script setup lang="ts">
import { inject } from "vue";

interface ITools {
    id: number;
    name: string;
    thumbnail: string;
}

const tools: ITools[] = inject("tools")!;
</script>

<template>
    <div class="xxs:mx-5 xxs:mt-0 md:my-20 lg:my-16 lg:mx-20 lg:text-sm xl:text-lg mb-0">
        <ul class="flex flex-wrap justify-center gap-5 lg:mx-[6rem]">
            <li
                v-for="tool in tools"
                :key="tool.id"
                class="flex xxs:w-[30%] md:w-[20%] lg:w-[17%] xl:w-[10%] justify-center py-3 rounded-md div-border text-center"
            >
                <div class="flex flex-col rounded">
                    <img
                        :src="tool.thumbnail"
                        :alt="tool.name + '.png'"
                        class="rounded-md h-[100%] w-[100%]"
                    />
                    <p class="mt-2 font-semibold items-center">{{ tool.name }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.div-border {
    border: 0.1rem solid rgba(255, 255, 255, 0);

    transition: 0.2s;
}
.div-border:hover {
    border: 0.1rem solid rgb(168, 168, 168);
    transition: all ease 0.2s;
}
</style>
