<template>
    <PageLayout heading="People">
        <div v-if="people.name" class="mt-24 flex justify-center items-center">
            <img :src="randImg" class="rounded-full w-auto mr-7 border-2 p-1 border-[#1C9CEF]">
            <div class="mt-5">
                <h1 class="text-white text-[35px] font-semibold capitalize">
                    {{ people.name }}
                </h1>
                <h3 class="text-gray-700 text-[20px]">
                    @{{ people.email }}
                </h3>
            </div>
        </div>
        <div>
            <Tweets v-for="tweet in tweets" :tweet="tweet" />
        </div>
    </PageLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import PageLayout from '../../layout/Pagelayout.vue';
import Tweets from './Tweets.vue';

let randImg = ref(`https://picsum.photos/id/${(Math.random() * 200).toFixed(0)}/100`);
const { state, dispatch } = useStore();
const route = useRoute();
const people = computed(() => state.peopleTweet.people[0]);
const tweets = computed(() => state.peopleTweet.tweets);

const getPeopleTweet = () => dispatch("getPeopleTweets", route.params.id);

getPeopleTweet();
watch(route, () => getPeopleTweet());
</script>