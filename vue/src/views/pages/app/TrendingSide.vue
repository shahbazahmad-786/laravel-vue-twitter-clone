<template>
    <div class="w-full mt-4 rounded-lg lg:block hidden bg-[#212327]">
        <div class="w-full p-4 text-white font-extrabold mb-6 text-[20px]">What's happening</div>

        <div class="h-[80px] hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out">
            <div class="flex p-3 justify-between h-[80px] py-3">
                <div>
                    <div class="text-[14px] text-gray-400">Tennis Tournament LIVE</div>
                    <div class="w-full text-white font-extrabold mb-6 text-[17px]">Australian Open 2023</div>
                </div>
                <img class="rounded-xl" :src="randImg" alt="" />
            </div>
        </div>

        <div class="hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out">
            <div class="flex p-3 justify-between">
                <div>
                    <div class="text-[14px] text-gray-400">Trending in United Kingdom</div>
                    <div class="w-full text-white font-extrabold text-[17px]">Doomsday Clock</div>
                    <div class="text-[14px] text-gray-400">5,923 Tweets</div>
                </div>
                <DotsHorizontal fillColor="#5e5c5c" />
            </div>
        </div>

        <div class="hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out">
            <div class="flex p-3 justify-between">
                <div>
                    <div class="text-[14px] text-gray-400">Sports · Trending</div>
                    <div class="w-full text-white font-extrabold text-[17px]">Poro</div>
                    <div class="text-[14px] text-gray-400">12,432 Tweets</div>
                </div>
                <DotsHorizontal fillColor="#5e5c5c" />
            </div>
        </div>

        <div class="hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out">
            <div class="flex p-3 justify-between">
                <div>
                    <div class="text-[14px] text-gray-400">Politics · Trending</div>
                    <div class="w-full text-white font-extrabold text-[17px]">Sunak</div>
                    <div class="text-[14px] text-gray-400">98,745 Tweets</div>
                </div>
                <DotsHorizontal fillColor="#5e5c5c" />
            </div>
        </div>



        <div class="hover:bg-gray-800 rounded-b-xl cursor-pointer transition duration-200 ease-in-out">
            <div class="text-blue-500 p-4">Show more</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';

let randImg = ref(`https://picsum.photos/id/${(Math.random() * 200).toFixed(0)}/100`);
</script>