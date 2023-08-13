<script setup lang="ts">
import { provide } from "vue";
import Navigation from "./components/interface/Navigation.vue";
import MyFooter from "./components/interface/MyFooter.vue";
import Projects from "./components/contexts/ProjectsContext";
import Tools from "./components/contexts/ToolsContext";

provide("projects", Projects);
provide("tools", Tools);
</script>

<template>
    <div class="bg-[#c5cfdf] flex flex-col min-h-[100vh] min-w-[100vw]">
        <Navigation />
        <RouterView v-slot="{ Component }">
            <transition name="route" mode="out-in">
                <component :is="Component" />
            </transition>
        </RouterView>
        <MyFooter class="mt-auto" />
    </div>
</template>

<style scoped></style>
