<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto invert" :src="appLogo" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#1C9CEF]">
                {{ heading }}
            </h2>
        </div>
        <slot />
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const appLogo = store.state.app.logo;
const props = defineProps(['heading']);
</script>