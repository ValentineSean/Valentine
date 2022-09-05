<template>
    <div class="relative overflow-hidden bg-white border md:h-[100vh] h-[80vh]">
        <div class="relative pt-6 pb-16 sm:pb-24">
            <Popover>
                <nav
                    class="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
                    aria-label="Global"
                >
                    <div class="flex items-center flex-1">
                        <div
                            class="flex items-center justify-between w-full md:w-auto"
                        >
                            <a href="#">
                                <span class="sr-only">Workflow</span>
                                <img
                                    class="w-auto h-16 sm:h-16"
                                    :src="avatar"
                                    alt=""
                                />
                            </a>
                            <div class="flex items-center -mr-2 md:hidden">
                                <PopoverButton
                                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                                >
                                    <span class="sr-only">Open main menu</span>
                                    <MenuIcon
                                        class="w-6 h-6"
                                        aria-hidden="true"
                                    />
                                </PopoverButton>
                            </div>
                        </div>
                        <div class="hidden space-x-10 md:flex md:ml-10">
                            <a
                                v-for="item in navigation"
                                :key="item.name"
                                :href="item.href"
                                v-smooth-scroll="{
                                    offset: -100,
                                    duration: 500,
                                    easing: 'easeInOutCubic',
                                }"
                                class="font-medium text-gray-700 hover:text-gray-900"
                                >{{ item.name }}</a
                            >
                        </div>
                    </div>
                    <div class="hidden md:flex">
                        <a
                            href="#footer"
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 border border-transparent border-gray-700 rounded-full hover:text-white hover:bg-gray-700"
                        >
                            Contact Me
                        </a>
                    </div>
                </nav>

                <transition
                    enter-active-class="duration-150 ease-out"
                    enter-from-class="scale-95 opacity-0"
                    enter-to-class="scale-100 opacity-100"
                    leave-active-class="duration-100 ease-in"
                    leave-from-class="scale-100 opacity-100"
                    leave-to-class="scale-95 opacity-0"
                >
                    <PopoverPanel
                        focus
                        class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
                    >
                        <div
                            class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5"
                        >
                            <div
                                class="flex items-center justify-between px-5 pt-4"
                            >
                                <div>
                                    <img
                                        class="w-auto h-16"
                                        :src="avatar"
                                        alt=""
                                    />
                                </div>
                                <div class="-mr-2">
                                    <PopoverButton
                                        class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span class="sr-only">Close menu</span>
                                        <XIcon
                                            class="w-6 h-6"
                                            aria-hidden="true"
                                        />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div class="px-2 pt-2 pb-3 space-y-1">
                                <a
                                    v-for="item in navigation"
                                    :key="item.name"
                                    v-smooth-scroll="{
                                        offset: -100,
                                        duration: 500,
                                        easing: 'easeInOutCubic',
                                    }"
                                    :href="item.href"
                                    class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                    >{{ item.name }}</a
                                >
                            </div>
                            <a
                                href="#footer"
                                class="block w-full px-5 py-3 font-medium text-center text-white bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Contact Me
                            </a>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>

            <main class="mt-48 sm:mt-48">
                <div class="mx-auto max-w-7xl">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-16">
                        <div
                            class="px-4 mx-auto sm:px-6 sm:text-center md:max-w-2xl lg:mx-0 lg:col-span-6 lg:text-left lg:flex lg:items-center"
                        >
                            <div>
                                <h1
                                    class="mt-4 text-4xl font-extrabold tracking-tight text-[#212121] sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                                >
                                    <span class="mb-8 text-5xl md:block"
                                        >Hey, This is</span
                                    >
                                    {{ ' ' }}
                                    <span class="text-[#F6661A] mb-8 md:block"
                                        >Valentine Sean</span
                                    >
                                </h1>
                                <p
                                    class="mt-3 mb-48 text-base text-gray-700 md:mb-24 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                >
                                    an interactive Web and Backend Developer
                                </p>
                                <!--  <a
                                    href="#"
                                    class="inline-flex items-center p-1 pr-2 mt-16 text-white bg-gray-900 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                >
                                    <span
                                        class="px-3 py-0.5 text-white text-xs font-black leading-5 uppercase tracking-wide bg-indigo-500 rounded-full"
                                        >Let's Talk</span
                                    >
                                    <span class="ml-4 text-sm"></span>
                                    <ChevronRightIcon
                                        class="w-5 h-5 ml-2 text-gray-500"
                                        aria-hidden="true"
                                    />
                                </a> -->
                                <p
                                    class="mt-8 text-sm font-semibold tracking-wide text-gray-700 uppercase sm:mt-10"
                                >
                                    Follow me
                                </p>
                                <div
                                    class="w-full py-2 mt-2 sm:mx-auto sm:max-w-lg lg:ml-0"
                                >
                                    <div
                                        class="flex flex-wrap items-start justify-center space-x-1 lg:justify-start"
                                    >
                                        <div class="justify-center px-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                class="w-5 h-5"
                                            >
                                                <path
                                                    d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div class="flex justify-center px-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 32 32"
                                                class="w-5 h-5"
                                            >
                                                <path
                                                    d="M32 31.292V19.46c0-6.34-3.384-9.29-7.896-9.29-3.641 0-5.273 2.003-6.182 3.409v-2.924h-6.86c.091 1.937 0 20.637 0 20.637h6.86V19.767c0-.615.044-1.232.226-1.672.495-1.233 1.624-2.509 3.518-2.509 2.483 0 3.475 1.892 3.475 4.666v11.041H32v-.001zM3.835 7.838c2.391 0 3.882-1.586 3.882-3.567C7.673 2.247 6.227.707 3.881.707S0 2.246 0 4.271c0 1.981 1.489 3.567 3.792 3.567h.043zm3.43 23.454V10.655H.406v20.637h6.859z"
                                                />
                                            </svg>
                                        </div>
                                        <div class="flex justify-center px-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-name="Layer 1"
                                                viewBox="0 0 24 24"
                                                class="w-5 h-5"
                                            >
                                                <path
                                                    d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
                                                />
                                            </svg>
                                        </div>
                                        <div class="flex justify-center px-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-label="dev.to"
                                                class="w-5 h-5"
                                                viewBox="0 0 512 512"
                                            >
                                                <rect
                                                    width="512"
                                                    height="512"
                                                    rx="15%"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="m 140.47,203.94 h -17.44 v 104.47 h 17.45 c 10.15529,-0.54503 17.35752,-8.66899 17.47,-17.41 v -69.65 c -0.69578,-10.36382 -7.79596,-17.27188 -17.48,-17.41 z m 45.73,87.25 c 0,18.81 -11.61,47.31 -48.36,47.25 H 91.44 V 172.98 h 47.38 c 35.44,0 47.36,28.46 47.37,47.28 z M 286.88,202.53 H 233.6 v 38.42 h 32.57 v 29.57 H 233.6 v 38.41 h 53.29 v 29.57 h -62.18 c -11.16,0.29 -20.44,-8.53 -20.72,-19.69 V 193.7 c -0.27,-11.15 8.56,-20.41 19.71,-20.69 h 63.19 z m 103.64,115.29 c -13.2,30.75 -36.85,24.63 -47.44,0 l -38.53,-144.8 h 32.57 l 29.71,113.72 29.57,-113.72 h 32.58 z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="relative hidden mt-16 sm:mt-24 lg:block lg:mt-0 lg:col-span-6"
                        >
                            <div
                                class="w-[32rem] z-[1000] absolute h-[32rem] bg-[#C4C4C4] rounded-full flex items-center justify-center"
                            >
                                <div
                                    class="w-[24rem] h-[24rem] bg-white relative rounded-full"
                                >
                                    <img
                                        :src="avatar"
                                        alt=""
                                        class="absolute top-[-70px]"
                                    />
                                </div>
                            </div>
                            <div
                                class="hidden xl:block z-[1000] sm:absolute top-[-70px] right-[700px]"
                                aria-hidden="true"
                            >
                                <div
                                    class="w-[1.5rem] relative h-[1.5rem] bg-[#F6661A] rounded-full flex items-center justify-center"
                                >
                                    <div
                                        class="absolute top-[-7px] left-[-1px] w-[1.5rem] h-[1.5rem] border-2 bg-white border-gray-900 rounded-full"
                                    ></div>
                                </div>
                            </div>
                            <div
                                class="hidden xl:block sm:absolute top-[-70px] right-[700px]"
                                aria-hidden="true"
                            >
                                <div
                                    class="w-[6rem] relative h-[6rem] border-2 border-[#F6661A] rounded-full flex items-center justify-center"
                                >
                                    <div
                                        class="absolute top-[-7px] left-[-1px] w-[6rem] h-[6rem] border-2 bg-white border-gray-900 rounded-full"
                                    ></div>
                                </div>
                            </div>
                            <div
                                class="hidden xl:block sm:absolute top-[30px] right-[500px]"
                                aria-hidden="true"
                            >
                                <div
                                    class="w-[2rem] relative h-[2rem] bg-[#F6661A] rounded-full flex items-center justify-center"
                                >
                                    <div
                                        class="absolute top-[-10px] left-[-10px] w-[2rem] h-[2rem] bg-gray-900 rounded-full"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronRightIcon } from '@heroicons/vue/solid'
import avatar from '../assets/avatar1.png'

const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
]

export default {
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        ChevronRightIcon,
        MenuIcon,
        XIcon,
    },
    setup() {
        return {
            navigation,
            avatar,
        }
    },
}
</script>
