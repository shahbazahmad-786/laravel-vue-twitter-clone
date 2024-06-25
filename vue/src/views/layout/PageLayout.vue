<template>
    <div class="w-full">
        <div class="max-w-[1400px] flex mx-auto">

            <!-- Sidebar -->
            <Sidebar />
            <!--/ Sidebar -->

            <div class="lg:w-7/12 w-11/12 border-x border-gray-800 relative">
                <div class=" bg-black bg-opacity-50 backdrop-blur-md z-10 absolute w-full">
                    <div class="border-gray-800 border-b w-full">
                        <div class="w-full text-white text-center text-[22px] font-extrabold p-4">
                            {{ heading }}
                        </div>
                    </div>
                </div>

                <slot />

            </div>

            <!-- Right Side -->
            <RightSide />
            <!--/ Right Side -->
        </div>
    </div>
</template>

<script setup>
import RightSide from './RightSide.vue';
import Sidebar from './Sidebar.vue';
const props = defineProps(['heading']);
</script>