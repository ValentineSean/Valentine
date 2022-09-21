<template>
    <div class="px-4 mt-16 md:mt-16 min-h-[100vh]">
        <div class="mx-auto overflow-hidden max-w-7xl">
            <div
                class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
            >
                <h2 class="text-2xl font-extrabold tracking-tight md:text-3xl">
                    My Projects
                </h2>
                <p class="text-lg text-gray-500 md:text-2xl">
                    Take a look at some of the projects i have done
                </p>
            </div>

            <div
                class="grid grid-cols-1 gap-8 mt-8 -mx-px sm:mx-0 md:grid-cols-2 lg:grid-cols-3"
            >
                <div
                    v-for="product in products"
                    :key="product.id"
                    class="relative p-4 bg-white rounded shadow-lg sm:p-6"
                >
                    <div
                        class="overflow-hidden bg-gray-200 rounded aspect-w-1 aspect-h-1"
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
                                class="p-1 px-2 my-1 mr-1 bg-gray-100 rounded-lg"
                            >
                                {{ i }}</span
                            >
                        </div>
                        <div class="flex items-center mt-4 space-x-4">
                            <a
                                class="flex justify-between space-x-2 text-gray-500 cursor-pointer hover:text-blue-500"
                                :href="product.href"
                                target="blank"
                            >
                                <span>View Project</span>
                                <ExternalLinkIcon class="w-6 h-6" />
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
import { ExternalLinkIcon } from '@heroicons/vue/outline'
import crm from '../assets/Projects/CRM/landing.png'
import pm from '../assets/Projects/Project Management/projects.png'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

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

export default {
    components: {
        ExternalLinkIcon,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    setup() {
        return {
            products,
        }
    },
}
</script>
