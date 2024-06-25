<template>
    <div class="lg:w-3/12 w-[60px] h-[100vh] max-w-[350px] lg:px-4 lg:mx-auto">
        <div class="p-2 px-3 mb-4">
            <Twitter fillColor="#FFFFFF" :size="37" />
        </div>

        <router-link v-for="link in links" :to="{ name: link.name }"
            class="block w-full lg:inline-block hover:bg-gray-900 p-2 px-4 lg:pr-6 rounded-full cursor-pointer transition duration-200 ease-in-out">
            <div class="flex items-center">
                <Home v-if="link.name === 'Home'" fillColor="#FFFFFF" :size="30" />
                <Plus v-if="link.name === 'CreateTweet'" fillColor="#FFFFFF" :size="30" />
                <Information v-if="link.name === 'About'" fillColor="#FFFFFF" :size="30" />
                <AccountOutline v-if="link.name === 'Profile'" fillColor="#FFFFFF" :size="30" />
                <span class="lg:block hidden text-white font-extrabold text-[23px] pl-4 mt-0.5">
                    {{ link.heading }}
                </span>
            </div>
        </router-link>

        <button type="button" @click="logout"
            class="block w-full lg:inline-block hover:bg-gray-900 p-2 px-4 lg:pr-6 rounded-full cursor-pointer transition duration-200 ease-in-out">
            <div class="flex items-center">
                <Logout fillColor="#FFFFFF" :size="30" />
                <span class="lg:block hidden text-white font-extrabold text-[23px] pl-4 mt-0.5">
                    Logout
                </span>
            </div>
        </button>

        <router-link :to="{ name: 'CreateTweet' }"
            class="block lg:w-full mt-8 ml-2 text-white font-extrabold text-[22px] bg-[#1C9CEF] p-3 px-3 rounded-full cursor-pointer">
            <div class="lg:block hidden text-center">Tweet</div>
            <span class="block lg:hidden">
                <Feather />
            </span>
        </router-link>

        <router-link :to="{ name: 'Profile' }"
            class="mt-5 block w-full lg:inline-block hover:bg-gray-900 p-2 px-4 lg:pr-6 rounded-full cursor-pointer transition duration-200 ease-in-out">
            <div class="flex items-center">
                <img :src="randImg" width="30" class="rounded-full" />
                <span class="lg:block hidden text-white font-extrabold text-[23px] pl-4 mt-0.5">
                    @{{ user }}
                </span>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Feather from 'vue-material-design-icons/Feather.vue';
import Home from 'vue-material-design-icons/Home.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import AccountOutline from 'vue-material-design-icons/AccountOutline.vue';
import Logout from 'vue-material-design-icons/Logout.vue';
import Information from 'vue-material-design-icons/Information.vue';

const links = [
    { name: "Home", heading: "Home" },
    { name: "CreateTweet", heading: "Create" },
    { name: "About", heading: "About" },
    { name: "Profile", heading: "Profile" },
];

let randImg = ref(`https://picsum.photos/id/${(Math.random() * 200).toFixed(0)}/100`);
const { dispatch, state } = useStore();
const { push } = useRouter();
const user = computed(() => state.user.data.name);

const logout = () => {
    if (!confirm(`Are you sure you want to "logout" this site?`)) return;
    dispatch("logout").then(() => push({ name: 'Login' }))
};

onMounted(() => dispatch("getUser"));
</script>