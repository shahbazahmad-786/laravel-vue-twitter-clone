<template>
    <PageLayout heading="Create Tweet">
        <div class="overflow-auto w-full h-screen bg-black p-3">
            <div class="w-full mt-14 flex">
                <div class="mt-14 w-full">
                    <div class="inline-block">
                        <div class="flex items-center border border-gray-700 rounded-full">
                            <span class="text-[#1C9CEF] p-0.5 pl-3.5 font-extrabold">
                                Everyone
                            </span>
                            <ChevronDown class="pr-2" fillColor="#1C9CEF" :size="25" />
                        </div>
                    </div>
                    <div>
                        <input v-model="data.tweet" type="text" placeholder="What's happening?" cols="30" rows="4" class="
                                w-full
                                bg-black
                                border-0
                                mt-2
                                focus:ring-0
                                text-white
                                text-[19px]
                                font-extrabold
                                min-h-[120px]
                            " />
                    </div>
                    <div class="w-full">
                        <video controls v-if="uploadType === 'mp4'" :src="showUpload" class="rounded-xl overflow-auto" />
                        <img v-else :src="showUpload" class="rounded-xl min-w-full">
                    </div>
                    <div class="flex py-2 items-center text-[#1C9CEF] font-extrabold">
                        <Earth class="pr-2" fillColor="#1C9CEF" :size="20" /> Everyone can reply
                    </div>
                    <div class="border-b border-b-gray-700"></div>
                    <div class="flex items-center justify-between py-2">
                        <div class="flex items-center">
                            <div class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                                <label for="fileUpload" class="cursor-pointer">
                                    <ImageOutline fillColor="#1C9CEF" :size="25" />
                                </label>
                                <input type="file" id="fileUpload" class="hidden" @change="getFile">
                            </div>
                            <div class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                                <FileGifBox fillColor="#1C9CEF" :size="25" />
                            </div>
                            <div class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                                <Emoticon fillColor="#1C9CEF" :size="25" />
                            </div>
                        </div>
                        <button @click="addTweet()" :class="true ? 'bg-[#1C9CEF] text-white' : 'bg-[#124D77] text-gray-400'"
                            class=" hidden md:block font-extrabold text-[16px] p-1.5 px-4 rounded-full cursor-pointer">
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import PageLayout from '../../layout/PageLayout.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import Earth from 'vue-material-design-icons/Earth.vue';
import ImageOutline from 'vue-material-design-icons/ImageOutline.vue';
import FileGifBox from 'vue-material-design-icons/FileGifBox.vue';
import Emoticon from 'vue-material-design-icons/Emoticon.vue';

const { dispatch } = useStore();
const { push } = useRouter();
let showUpload = ref('');
let uploadType = ref('');
const data = {
    tweet: '',
    file: ''
};

const getFile = (e) => {
    data.file = e.target.files[0];
    showUpload.value = URL.createObjectURL(e.target.files[0]);
    uploadType.value = data.file.name.split('.').pop();
}

const addTweet = () => {
    dispatch("createTweet", data).then(() => push({ name: 'Profile' }));
}
</script>