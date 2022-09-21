<template>
    <div>
        <main class="px-4 mt-8 bg-black md:px-8">
            <div class="relative">
                <div class="lg:mx-auto lg:items-start">
                    <div class="relative mx-auto max-w-7xl sm:px-6 lg:px-0">
                        <div class="pt-12 sm:pt-16 lg:pt-20">
                            <h2
                                class="text-2xl font-extrabold tracking-tight text-[#F2F5EA] md:text-3xl sm:text-5xl"
                            >
                                About Me
                            </h2>
                            <div class="mt-6 space-y-6 text-[#F2F5EA]">
                                <p class="text-lg md:text-2xl">
                                    - I'm an ambitious backend Software
                                    Developer with a knack for solving complex
                                    problems.
                                    <br />
                                    - Currently working as a full stack Software
                                    Developer at Matsimba Technologies
                                    (Zimbabwe).
                                    <br />
                                    - If you have a project in mind, don't
                                    hesitate to get in touch
                                </p>
                            </div>
                        </div>

                        <!-- Stats section -->
                        <div class="pb-16 mt-10">
                            <h2
                                class="my-16 text-xl font-semibold tracking-tight text-[#F2F5EA] md:text-2xl"
                            >
                                My Experience
                            </h2>
                            <dl class="grid grid-cols-1 gap-x-4 gap-y-8">
                                <div
                                    v-for="stat in stats"
                                    :key="stat.label"
                                    class="pt-6 border-t border-gray-700"
                                >
                                    <dt
                                        class="text-lg font-medium text-[#F2F5EA] md:text-xl"
                                    >
                                        {{ stat.label }}
                                    </dt>
                                    <dd
                                        class="text-base font-medium tracking-tight text-[#F2F5EA] md:text-xl"
                                    >
                                        {{ stat.value }}
                                    </dd>
                                    <dd
                                        class="text-base font-medium tracking-tight text-[#F2F5EA] md:text-xl"
                                    >
                                        {{ stat.company }}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div class="px-4 mx-auto mt-10 lg:px-0 sm:px-8 md:mt-16 max-w-7xl">
            <h2
                class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl sm:text-5xl"
            >
                My Tools & Skills
            </h2>
            <div class="mt-8 mb-8 text-2xl lg:items-center">
                <div
                    class="grid grid-cols-2 gap-[5px] mt-12 md:grid-cols-3 md:gap-7 lg:mt-0 lg:grid-cols-4"
                >
                    <div
                        v-for="logo in logos"
                        :key="logo.name"
                        class="flex items-center justify-start col-span-1 px-8 py-8 space-x-8 border border-gray-200 group bg-gray-50"
                    >
                        <img
                            class="duration-500 ease-in-out transform max-h-12 grayscale-0"
                            :src="logo.url"
                            :alt="logo.name"
                        />
                        <div class="text-lg font-medium md:text-xl">
                            {{ logo.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, h } from 'vue'
import { ChevronRightIcon, StarIcon } from '@heroicons/vue/solid'
import js from '../assets/javascript.svg'
import python from '../assets/python.svg'
import vue from '../assets/vue.svg'
import git from '../assets/git.svg'
import java from '../assets/java.svg'
import sql from '../assets/mysql.svg'
import flask from '../assets/flask.svg'
import mongo from '../assets/mongodb.svg'
import docker from '../assets/docker.svg'

const stats = [
    {
        label: 'Software Developer',
        value: 'Sept 2021 - Present',
        company: 'Matsimba Technologies ',
    },
    {
        label: 'Internship',
        value: 'Apr 2021 - July 2021',
        company: 'POScloud Zimbabwe ',
    },
    {
        label: 'Internship',
        value: 'Nov 2020 - Mar 2021',
        company: 'Matsimba Technologies',
    },
]

const logos = [
    {
        name: 'Python',
        url: python,
    },
    {
        name: 'Flask',
        url: flask,
    },
    {
        name: 'MySQL',
        url: sql,
    },
    {
        name: 'MongoDB',
        url: mongo,
    },

    {
        name: 'Git',
        url: git,
    },
    {
        name: 'Docker',
        url: docker,
    },
    {
        name: 'Java',
        url: java,
    },
    {
        name: 'JavaScript',
        url: js,
    },
    {
        name: 'Vue.js',
        url: vue,
    },
]

export default {
    components: {
        ChevronRightIcon,
        StarIcon,
    },

    setup() {
        return {
            stats,
            logos,
        }
    },
}
</script>
