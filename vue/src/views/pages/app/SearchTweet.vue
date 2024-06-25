<template>
    <div class="w-full p-1 mt-2 px-4 lg:flex items-center rounded-full hidden bg-[#212327]">
        <Magnify fillColor="#5e5c5c" :size="25" />
        <input v-model="search" @keyup="searchTweet(null)"
            class="appearance-none w-full py-2 bg-[#212327] text-gray-100 placeholder-gray-500 leading-tight focus:ring-0 border-none"
            type="text" placeholder="Search Twitter">
    </div>
    <div v-if="search" class="w-full mt-4 rounded-lg lg:block hidden bg-[#212327]">
        <div class="w-full p-4 text-white font-extrabold mb-6 text-[20px]">
            Search Results
        </div>

        <template v-if="tweets.data.length">
            <router-link v-for="tweet in tweets.data" :to="{ name: 'ShowTweet', params: { id: tweet.id } }"
                class="block h-[80px] hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out">
                <div class="flex p-3 justify-between h-[80px] py-3">
                    <div>
                        <div class="text-[14px] text-gray-400">{{ tweet.user.email }}</div>
                        <div class="w-full text-white font-extrabold mb-6 text-[17px]">{{ tweet.tweet }}</div>
                    </div>
                </div>
            </router-link>
        </template>
        <div v-else class="text-[14px] text-gray-400 p-4">No result found</div>
    </div>
    <TrendingSide v-else />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import TrendingSide from './TrendingSide.vue';

const search = ref('');
const { dispatch, state } = useStore();
const tweets = computed(() => state.searchTweet);

const searchTweet = () => {
    dispatch("searchTweets", { search: search.value });
};
</script>