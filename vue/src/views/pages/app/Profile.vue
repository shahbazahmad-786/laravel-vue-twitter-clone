<template>
    <PageLayout heading="Profile">
        <div v-if="user.name" class="mt-24 flex justify-center items-center">
            <img :src="randImg" class="rounded-full w-auto mr-7 border-2 p-1 border-[#1C9CEF]">
            <div class="mt-5">
                <h1 class="text-white text-[35px] font-semibold capitalize">
                    {{ user.name }}
                </h1>
                <h3 class="text-gray-700 text-[20px]">
                    @{{ user.email }}
                </h3>
            </div>
        </div>

        <div v-if="tweets.loading" class="text-white text-center text-xl">
            Loading...
        </div>
        <div v-if="tweets.data">
            <Tweets v-for="tweet in tweets.data" :tweet="tweet" />
        </div>

    </PageLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import PageLayout from '../../layout/Pagelayout.vue';
import Tweets from './Tweets.vue';

let randImg = ref(`https://picsum.photos/id/${(Math.random() * 200).toFixed(0)}/100`);
const { state, dispatch } = useStore();
const user = computed(() => state.user.data);
const tweets = computed(() => state.profileTweet);

onMounted(() => {
    dispatch("getUser");
    dispatch("getProfileTweets")
});
</script>