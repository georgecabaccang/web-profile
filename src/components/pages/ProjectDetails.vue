<script setup lang="ts">
import { inject } from "vue";
import { useRoute } from "vue-router";

interface IProjects {
    id: number;
    title: string;
    stack: string;
    thumbnail: string;
    link: string;
    description: string;
}

const route = useRoute();
const id = +route.params.id;
const projects: IProjects[] = inject("projects")!;

const indexOfProject = projects.findIndex((project) => {
    return project.id == id;
});
const projectDetails = projects[indexOfProject];
</script>

<template>
    <div class="flex h-[80vh] w-full justify-center lg:py-8 lg:px-20 md:px-10 lg:pt-1">
        <div class="flex flex-col">
            <div class="flex justify-center pt-6 pb-2 px-10 xxs: lg:w-[100%] lg:h-[60%] md:h-[40%]">
                <img
                    :src="projectDetails.thumbnail"
                    :alt="projectDetails.title"
                    class="xl:w-[55%] lg:w-[50%] h-[100%] border border-gray-300 rounded"
                />
            </div>
            <div class="lg-mx-0 flex flex-col xxs:px-5">
                <h3 class="mb-5 flex justify-center xxs:text-[1rem] lg:text-[1.8rem]">
                    {{ projectDetails.title }}
                </h3>
                <p class="text-center xxs:text-[0.7rem]">{{ projectDetails.description }}</p>
                <p class="pb-2 xxs:text-[0.8rem] lg:pt-3 xl:pb-0 pt-5 text-center">
                    Built with <strong>{{ projectDetails.stack }}</strong> Stack
                </p>
                <div class="w-[100%] text-center xxs:mt-2 lg:mt-3">
                    <a
                        :href="projectDetails.link"
                        target="_blank"
                        class="p-1 rounded font-bold text-[1.2em] xxs:px-20 xxs:py-2 lg:px-14 bg-blue-100 border-blue-500 text-blue-400 border hover:bg-blue-700 hover:text-white transition ease-in-out delay-25"
                        >Visit Site</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
