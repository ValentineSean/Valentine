<template>
    <div class="relative overflow-hidden bg-[#F2F5EA]">
        <div
            class="relative flex flex-col justify-between h-screen pt-4 md:justify-start"
        >
            <Popover>
                <nav
                    class="relative flex items-center justify-between px-4 pb-2 mx-auto border-b border-gray-300 lg:px-6 max-w-7xl"
                    aria-label="Global"
                >
                    <div class="flex items-center justify-between flex-1">
                        <div
                            class="flex items-center justify-between w-full md:w-auto"
                        >
                            <a
                                href="/"
                                class="text-4xl font-black text-[#1E1E1E] header_title"
                            >
                                Sean.
                            </a>
                            <div class="flex items-center -mr-2 md:hidden">
                                <PopoverButton
                                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                                >
                                    <span class="sr-only">Open main menu</span>
                                    <MenuIcon
                                        class="w-5 h-5"
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
                                class="text-xl font-medium text-gray-700 hover:text-gray-900"
                                >{{ item.name }}</a
                            >
                        </div>
                        <div class="hidden md:flex">
                            <a
                                href="#footer"
                                class="inline-flex items-center px-4 py-2 text-sm font-bold text-gray-700 border-2 border-transparent border-gray-700 hover:text-[#F2F5EA] hover:bg-orange-700"
                            >
                                Contact Me
                            </a>
                        </div>
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
                                            class="w-5 h-5"
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
                                class="block w-full px-5 py-3 font-medium text-center text-[#F2F5EA] bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Contact Me
                            </a>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>

            <main class="hidden mt-32 mb-1 md:block">
                <div
                    class="flex items-center justify-center h-full mx-auto my-1 space-x-16 max-w-7xl"
                >
                    <div
                        class="flex flex-col items-center justify-between px-4 lg:items-start sm:text-center lg:col-span-6"
                    >
                        <img
                            :src="avatar"
                            alt=""
                            class="w-[16rem] block lg:hidden h-[16rem] mb-8 lg:h-none lg:w-none"
                        />
                        <h1
                            class="mb-0 text-4xl font-bold text-black md:mb-4 lg:text-6xl md:block"
                        >
                            Hey There,
                        </h1>
                        <h1
                            class="mb-0 text-4xl font-bold text-black md:mb-4 lg:text-6xl md:block"
                        >
                            I'm Valentine
                        </h1>
                        <p class="mb-0 text-3xl text-left text-gray-700">
                            I am a software enginner, i love building things
                        </p>

                        <a
                            href="#projects"
                            class="inline-flex items-center px-16 py-4 mt-16 lg:mt-24 text-sm font-bold text-[#F2F5EA] bg-black hover:text-[#F2F5EA] hover:bg-orange-700"
                        >
                            My Work
                        </a>
                        <div class="flex items-start mt-6 space-x-4">
                            <a
                                href="https://dev.to/valentinesean22"
                                target="_blank"
                                class="flex justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-label="dev.to"
                                    class="w-5 h-5"
                                    viewBox="0 0 512 512"
                                >
                                    <rect width="512" height="512" rx="15%" />
                                    <path
                                        fill="#fff"
                                        d="m 140.47,203.94 h -17.44 v 104.47 h 17.45 c 10.15529,-0.54503 17.35752,-8.66899 17.47,-17.41 v -69.65 c -0.69578,-10.36382 -7.79596,-17.27188 -17.48,-17.41 z m 45.73,87.25 c 0,18.81 -11.61,47.31 -48.36,47.25 H 91.44 V 172.98 h 47.38 c 35.44,0 47.36,28.46 47.37,47.28 z M 286.88,202.53 H 233.6 v 38.42 h 32.57 v 29.57 H 233.6 v 38.41 h 53.29 v 29.57 h -62.18 c -11.16,0.29 -20.44,-8.53 -20.72,-19.69 V 193.7 c -0.27,-11.15 8.56,-20.41 19.71,-20.69 h 63.19 z m 103.64,115.29 c -13.2,30.75 -36.85,24.63 -47.44,0 l -38.53,-144.8 h 32.57 l 29.71,113.72 29.57,-113.72 h 32.58 z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/ValentineSean"
                                class="justify-center"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    class="w-5 h-5"
                                >
                                    <path
                                        d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/valentine-s-chanengeta-0b6313149/"
                                target="_blank"
                                class="flex justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    class="w-5 h-5"
                                >
                                    <path
                                        d="M32 31.292V19.46c0-6.34-3.384-9.29-7.896-9.29-3.641 0-5.273 2.003-6.182 3.409v-2.924h-6.86c.091 1.937 0 20.637 0 20.637h6.86V19.767c0-.615.044-1.232.226-1.672.495-1.233 1.624-2.509 3.518-2.509 2.483 0 3.475 1.892 3.475 4.666v11.041H32v-.001zM3.835 7.838c2.391 0 3.882-1.586 3.882-3.567C7.673 2.247 6.227.707 3.881.707S0 2.246 0 4.271c0 1.981 1.489 3.567 3.792 3.567h.043zm3.43 23.454V10.655H.406v20.637h6.859z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="items-start hidden lg:flex">
                        <img
                            :src="avatar"
                            alt=""
                            class="w-[32rem] h-[32rem] mb-8 md:mb-0 lg:h-none lg:w-none"
                        />
                    </div>
                </div>
            </main>
            <main class="block px-4 md:hidden">
                <div class="space-y-4">
                    <h1
                        class="mb-0 text-4xl font-bold text-black md:mb-4 lg:text-5xl md:block"
                    >
                        Hey There,
                    </h1>
                    <h1
                        class="mb-0 text-4xl font-bold text-black md:mb-4 lg:text-5xl md:block"
                    >
                        I'm Valentine
                    </h1>
                    <p class="mb-0 text-lg text-gray-700">
                        I am a software enginner, i love building things
                    </p>
                </div>
            </main>
            <div
                class="flex flex-col items-start px-4 mx-auto md:hidden max-w-7xl"
            >
                <div class="flex items-center justify-between w-full mb-4">
                    <h2
                        class="text-xl font-medium tracking-tight text-gray-900"
                    >
                        Recent Projects
                    </h2>
                    <a
                        v-smooth-scroll="{
                            offset: -100,
                            duration: 500,
                            easing: 'easeInOutCubic',
                        }"
                        href="#footer"
                        class="inline-flex items-center text-sm font-medium text-blue-500"
                    >
                        View more
                    </a>
                </div>
                <Carousel :autoplay="3000" :wrap-around="true">
                    <Slide
                        v-for="slide in products"
                        :key="slide"
                        class="flex flex-col items-start justify-start w-full p-2 pb-4 bg-white rounded shadow-lg"
                    >
                        <img
                            :src="slide.imageSrc"
                            :alt="slide.imageAlt"
                            class="object-fill w-full h-48 rounded"
                        />
                        <div
                            class="flex flex-col items-start w-full mt-2 space-y-2"
                        >
                            <span class="text-lg font-medium text-gray-900">
                                {{ slide.name }}
                            </span>
                            <a
                                :href="slide.href"
                                class="inline-flex items-center text-sm font-normal text-blue-500 hover:text-gray-500"
                            >
                                View details
                            </a>
                        </div>
                    </Slide>
                </Carousel>
            </div>
            <div
                class="items-end self-end justify-center hidden w-full py-2 mt-8 md:block place-items-end lg:ml-0 lg:flex"
            >
                <div class="flex flex-col items-center justify-end">
                    <span class="text-lg font-medium">Scroll Down</span>
                    <ChevronDownIcon class="w-6 mt-2 animate-bounce" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import avatar from '../assets/avatar1.png'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import crm from '../assets/Projects/CRM/landing.png'
import pm from '../assets/Projects/Project Management/projects.png'

const products = [
    {
        id: 1,
        name: 'Customer Relations Management',
        imageSrc: crm,
        imageAlt: 'Customer Relations Management',
        href: 'https://dev.to/emacliam/customer-relationship-management-398d',
        info: 'Is a software that helps businesses to easily track communications between customer service agents and clients',
        github: '',
        stack: [
            'python',
            'flask',
            'tailwindcss',
            'vue.js',
            'vite',
            'redis',
            'socketI0',
        ],
    },
    {
        id: 2,
        name: 'Project Management',
        imageSrc: pm,
        imageAlt: 'Project Management',
        href: 'https://dev.to/emacliam/project-management-13mg',
        info: 'This project allows users to manage their projects by planning, organising and managing different required aspects.',
        stack: ['python', 'flask', 'tailwindcss', 'vue.js', 'vite', 'mysql'],
    },
]

const navigation = [
    { name: 'Home', href: '#services' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About me', href: '#about' },
]

export default {
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        MenuIcon,
        XIcon,
        ChevronDownIcon,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    setup() {
        return {
            navigation,
            avatar,
            products,
        }
    },
}
</script>

<style scoped></style>
