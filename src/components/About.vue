<template>
    <div class="px-8 my-16">
        <main>
            <div class="relative">
                <div class="lg:mx-auto lg:items-start">
                    <div
                        class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-0"
                    >
                        <div class="pt-12 sm:pt-16 lg:pt-20">
                            <h2
                                class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
                            >
                                About Me
                            </h2>
                            <div class="mt-6 space-y-6 text-gray-500">
                                <p class="text-2xl">
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
                        <div class="mt-10">
                            <h2
                                class="my-16 text-2xl font-semibold tracking-tight text-gray-900"
                            >
                                My Experience
                            </h2>
                            <dl class="grid grid-cols-1 gap-x-4 gap-y-8">
                                <div
                                    v-for="stat in stats"
                                    :key="stat.label"
                                    class="pt-6 border-t border-gray-200"
                                >
                                    <dt
                                        class="text-xl font-medium text-gray-500"
                                    >
                                        {{ stat.label }}
                                    </dt>
                                    <dd
                                        class="text-xl font-medium tracking-tight text-gray-900"
                                    >
                                        {{ stat.value }}
                                    </dd>
                                    <dd
                                        class="text-xl font-medium tracking-tight text-gray-900"
                                    >
                                        {{ stat.company }}
                                    </dd>
                                </div>
                            </dl>
                            <h2
                                class="my-16 text-2xl font-semibold tracking-tight text-gray-900"
                            >
                                My Tools & Skills
                            </h2>
                            <div class="mb-8 text-2xl lg:items-center">
                                <div
                                    class="grid grid-cols-2 mt-12 md:grid-cols-3 lg:mt-0 lg:grid-cols-4"
                                >
                                    <div
                                        v-for="logo in logos"
                                        :key="logo.name"
                                        class="flex items-center justify-center col-span-1 px-8 py-8 border border-gray-200 group bg-gray-50"
                                    >
                                        <img
                                            class="duration-500 ease-in-out transform group-hover:hidden max-h-12"
                                            :src="logo.url"
                                            :alt="logo.name"
                                        />
                                        <div
                                            class="hidden text-xl font-bold group-hover:block"
                                        >
                                            {{ logo.name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
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
