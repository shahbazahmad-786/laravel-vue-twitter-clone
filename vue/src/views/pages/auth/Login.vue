<template>
    <AuthPageLayout heading="Sign in your account">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="login">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-white">
                        Email address
                    </label>
                    <div class="mt-2">
                        <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1C9CEF] sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-white">
                            Password
                        </label>
                    </div>
                    <div class="mt-2">
                        <input v-model="user.password" id="password" name="password" type="password"
                            autocomplete="current-password" required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1C9CEF] sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-[#1C9CEF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1C9CEF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C9CEF]">
                        Sign in
                    </button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not have an account?
                <router-link :to="{ name: 'Register' }" class="font-semibold leading-6 text-[#1C9CEF]">
                    Sign up
                </router-link>
            </p>
        </div>
    </AuthPageLayout>
</template>

<script setup>
import AuthPageLayout from './AuthPageLayout.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

let user = {
    email: '',
    password: ''
}

const { dispatch } = useStore();
const { push } = useRouter();

const login = () => dispatch("login", user).then(() => push({ name: 'Home' }));
</script>