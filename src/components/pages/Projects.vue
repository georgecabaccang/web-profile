<script setup lang="ts">
import { inject } from "vue";
interface IProjects {
    id: number;
    title: string;
    stack: string;
    thumbnail: string;
    link: string;
    description: string;
}
const projects: IProjects[] = inject("projects")!;
</script>

<template>
    <div class="-z-10 mb-7">
        <ul class="flex flex-wrap gap-5 justify-center md:mx-10">
            <li
                v-for="project in projects"
                :key="project.id"
                class="flex xxs:w-[90%] lg:w-[20%] md:w-[40%] justify-center p-1 card-bg zoom drop-shadow-md hover:shadow-lg rounded-md text-center"
            >
                <RouterLink :to="{ name: 'projectDetails', params: { id: project.id } }" class=""
                    ><div class="flex flex-col rounded-md">
                        <img
                            :src="project.thumbnail"
                            :alt="project.title"
                            class="rounded-md shadow-md h-[100%] w-[100%]"
                        />
                        <p class="text-xl p-2 md:text-[1.1em]">{{ project.title }}</p>
                    </div></RouterLink
                >
            </li>
        </ul>
    </div>
</template>

<style scoped>
.card-bg {
    background-color: rgb(255, 255, 255);
}
.zoom {
    transition: transform 0.2s;
}

.zoom:hover {
    transform: scale(1.02);
}
</style>
