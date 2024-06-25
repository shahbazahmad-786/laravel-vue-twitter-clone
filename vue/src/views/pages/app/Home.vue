<template>
    <PageLayout heading="Home">
        <div class="mt-24">
            <div v-if="tweets.loading" class="text-white text-center text-xl">
                Loading...
            </div>
            <div v-if="tweets.data">
                <Tweets v-for="tweet in tweets.data" :tweet="tweet" />
            </div>
        </div>
    </PageLayout>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import PageLayout from '../../layout/PageLayout.vue';
import Tweets from './Tweets.vue';

const { dispatch, state } = useStore();
const tweets = computed(() => state.tweet);

onMounted(() => dispatch("getTweets"));
</script>