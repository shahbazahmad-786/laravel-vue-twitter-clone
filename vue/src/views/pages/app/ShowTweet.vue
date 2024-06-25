<template>
    <PageLayout heading="Tweet Details">
        <div class="mt-24">
            <div v-if="loading" class="text-white text-center text-xl">
                Loading...
            </div>
            <div v-else>
                <Tweets :tweet="tweet" />
            </div>
        </div>
    </PageLayout>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import PageLayout from '../../layout/PageLayout.vue';
import Tweets from './Tweets.vue';

const route = useRoute();
const { dispatch } = useStore();
const tweet = ref('');
const loading = ref(true);

const showTweet = () => {
    dispatch("showTweet", route.params.id).then(({ data }) => {
        tweet.value = data[0];
        loading.value = false;
    });
}

showTweet();
watch(route, () => showTweet());
</script>