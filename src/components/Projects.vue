<template>
    <div class="px-8 mt-32 min-h-[100vh]">
        <div class="mx-auto overflow-hidden max-w-7xl">
            <div
                class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
            >
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-5xl">
                    My Projects
                </h2>
                <p class="text-2xl text-gray-500">
                    Take a look at some of the projects i have done
                </p>
            </div>

            <div
                class="grid grid-cols-1 gap-8 mt-8 -mx-px sm:mx-0 md:grid-cols-2 lg:grid-cols-3"
            >
                <div
                    v-for="product in products"
                    :key="product.id"
                    class="relative p-4 bg-white border border-gray-200 group sm:p-6"
                >
                    <div
                        class="overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75"
                    >
                        <img
                            :src="product.imageSrc"
                            :alt="product.imageAlt"
                            class="object-fill w-full h-48"
                        />
                    </div>
                    <div class="pt-10 pb-4">
                        <h3 class="text-lg font-medium text-gray-900">
                            <div>
                                {{ product.name }}
                            </div>
                        </h3>

                        <p
                            class="h-12 mt-4 text-base text-gray-700 truncate font-regular"
                        >
                            {{ product.info }}
                        </p>
                        <div class="flex flex-row flex-wrap w-full py-2">
                            <span
                                v-for="i in product.stack"
                                :key="i"
                                class="p-1 px-2 m-1 bg-gray-100 rounded-lg"
                            >
                                {{ i }}</span
                            >
                        </div>
                        <div class="flex items-center mt-4 space-x-4">
                            <a
                                href="https://github.com/ValentineSean"
                                class="justify-center cursor-pointer"
                                target="_blank"
                            >
                                <svg
                                    viewBox="0 0 16 16"
                                    class="w-8 h-8 text-gray-600 fill-current"
                                >
                                    <path
                                        d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                                    />
                                </svg>
                            </a>
                            <a
                                class="justify-center cursor-pointer"
                                :href="product.href"
                                target="blank"
                            >
                                <svg
                                    aria-label="dev.to"
                                    class="w-8 h-8 text-gray-600 fill-current"
                                    viewBox="0 0 512 512"
                                >
                                    <rect width="512" height="512" rx="15%" />
                                    <path
                                        fill="#fff"
                                        d="m 140.47,203.94 h -17.44 v 104.47 h 17.45 c 10.15529,-0.54503 17.35752,-8.66899 17.47,-17.41 v -69.65 c -0.69578,-10.36382 -7.79596,-17.27188 -17.48,-17.41 z m 45.73,87.25 c 0,18.81 -11.61,47.31 -48.36,47.25 H 91.44 V 172.98 h 47.38 c 35.44,0 47.36,28.46 47.37,47.28 z M 286.88,202.53 H 233.6 v 38.42 h 32.57 v 29.57 H 233.6 v 38.41 h 53.29 v 29.57 h -62.18 c -11.16,0.29 -20.44,-8.53 -20.72,-19.69 V 193.7 c -0.27,-11.15 8.56,-20.41 19.71,-20.69 h 63.19 z m 103.64,115.29 c -13.2,30.75 -36.85,24.63 -47.44,0 l -38.53,-144.8 h 32.57 l 29.71,113.72 29.57,-113.72 h 32.58 z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/solid'
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
        stack: ['python', 'tailwindcss', 'vue.js', 'vite', 'redis', 'socketI0'],
    },
    {
        id: 2,
        name: 'Project Management',
        imageSrc: pm,
        imageAlt: 'Project Management',
        href: '#',
        info: 'Is a software that helps businesses to easily track communications between customer service agents and clients',
        stack: ['python', 'tailwindcss', 'vue.js', 'vite', 'mysql'],
    },
]

export default {
    components: {},
    setup() {
        return {
            products,
        }
    },
}
</script>
