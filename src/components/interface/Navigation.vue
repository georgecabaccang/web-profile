<script setup lang="ts"></script>

<template>
    <div
        class="flex min-w-[100%] justify-center xxs:text-[1rem] xxs:py-3 xxs:mb-4 md:text-[1.2rem] lg:py-5 font-semibold border-b shadow-md border-gray-400"
    >
        <div class="flex gap-10">
            <RouterLink
                to="/"
                class="text-shadow zoom"
                active-class="active-link active-text-shadow active-zoom"
                >About</RouterLink
            >
            <RouterLink
                to="/projects"
                class="text-shadow zoom"
                active-class="active-link active-text-shadow active-zoom"
                >Projects</RouterLink
            >
            <RouterLink
                to="/tools"
                class="text-shadow zoom"
                active-class="active-link active-text-shadow active-zoom"
                >Tools</RouterLink
            >
        </div>
    </div>
</template>

<style scoped>
.text-shadow {
    text-shadow: 0 0 0 rgba(255, 255, 255, 0);

    transition: text-shadow 0.2s ease 0s;
}

.active-text-shadow {
    text-shadow: 0 0 0 rgba(255, 255, 255, 0) !important;
}
.active-zoom {
    transition: transform;
}

.active-zoom:hover {
    transform: scale(1) !important;
}

.text-shadow:hover {
    text-shadow: 0.3rem 0.3rem 0.2rem #b6b6b8;
    transition: all ease 0.5;
}
.zoom {
    transition: transform 0.2s;
}

.zoom:hover {
    transform: scale(1.1);
}

.active-link {
    color: rgb(57, 151, 223);
}
</style>
