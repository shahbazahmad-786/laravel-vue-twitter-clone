<template>
    <div class="w-full mt-5">
        <div class="text-white">
            <div class="flex">
                <div class="min-w-[60px]">
                    <!-- Profile-Random_Img -->
                    <img class="rounded-full m-2 mt-3" width="50" :src="randImg">
                    <!--/ Profile-Random_Img -->
                </div>
                <div class="p-2 w-full">
                    <div class="font-extrabold flex items-center justify-between mt-0.5 mb-1.5">
                        <div class="flex items-center">
                            <router-link :to="{ name: 'People', params: { id: tweet.user.id } }" class="capitalize">
                                {{ tweet.user.name }}
                            </router-link>
                            <span class="font-[300] text-[15px] text-gray-500 pl-2">
                                {{ `• ${tweet.user.email} •` }}
                            </span>
                            <span class="font-[300] text-[15px] text-gray-500 pl-2">
                                {{ tweet.created_at }}
                            </span>
                        </div>
                        <div class="hover:bg-gray-800 rounded-full relative z-50">
                            <button type="button" class="block p-2">
                                <DotsHorizontal @click="openOptions = !openOptions" />
                            </button>
                            <div v-if="openOptions"
                                class="absolute mt-1 right-0 w-[200px] bg-black border border-gray-700 rounded-lg shadow-lg">
                                <ul class="p-3">
                                    <router-link :to="{ name: 'ShowTweet', params: { id: tweet.id } }"
                                        class="flex items-center cursor-pointer">
                                        <Eye class="pr-3" fillColor="#ffffff" :size="18" />
                                        <span class="text-white font-extrabold">View</span>
                                    </router-link>
                                    <button @click="destroy(tweet.id)" v-if="tweet.user.id === userId"
                                        class="flex items-center cursor-pointer mt-3">
                                        <TrashCanOutline class="pr-3" fillColor="#ffffff" :size="18" />
                                        <span class="text-white font-extrabold">Delete</span>
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pb-3">{{ tweet.tweet }}</div>
                    <div v-if="tweet.file">
                        <div v-if="!tweet.is_video" class="rounded-xl">
                            <img :src="tweet.file" class="mt-2 object-fill rounded-xl w-full">
                        </div>
                        <div v-else>
                            <video class="rounded-xl" :src="tweet.file" controls></video>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-4 w-4/5">
                        <div class="flex">
                            <MessageOutline fillColor="#5e5c5c" :size="18" />
                            <span class="text-xs font-extrabold text-[#5e5c5c] ml-3">
                                {{ randNum }}
                            </span>
                        </div>
                        <div class="flex">
                            <Sync fillColor="#5e5c5c" :size="18" />
                            <span class="text-xs font-extrabold text-[#5e5c5c] ml-3">
                                {{ randNum }}
                            </span>
                        </div>
                        <div class="flex">
                            <HeartOutline fillColor="#5e5c5c" :size="18" />
                            <span class="text-xs font-extrabold text-[#5e5c5c] ml-3">
                                {{ randNum }}
                            </span>
                        </div>
                        <div class="flex">
                            <ChartBar fillColor="#5e5c5c" :size="18" />
                            <span class="text-xs font-extrabold text-[#5e5c5c] ml-3">
                                {{ randNum }}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div class="border-b border-b-gray-800 mt-2"></div>
        </div>
        <div class="pb-4"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import ChartBar from 'vue-material-design-icons/ChartBar.vue';
import MessageOutline from 'vue-material-design-icons/MessageOutline.vue';
import Sync from 'vue-material-design-icons/Sync.vue';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue';
import Eye from 'vue-material-design-icons/Eye.vue';

const { dispatch, state } = useStore();
const userId = computed(() => state.user.data.id);
const props = defineProps(['tweet']);
let randImg = ref(`https://picsum.photos/id/${(Math.random() * 200).toFixed(0)}/100`);
const randNum = Math.floor(Math.random() * 100);

let openOptions = ref(false);

const destroy = (id) => {
    if (!confirm("Are you sure you want to delete this tweet?")) return;
    dispatch("deleteTweet", id).then(() => location.reload());
}

onMounted(() => dispatch("getUser"));
</script>