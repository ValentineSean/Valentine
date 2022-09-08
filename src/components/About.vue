<template>
    <div class="my-16">
        <main>
            <div class="relative">
                <div class="lg:mx-auto lg:items-start">
                    <div
                        class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-0"
                    >
                        <div class="pt-12 sm:pt-16 lg:pt-20">
                            <h2
                                class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                            >
                                About Me
                            </h2>
                            <div class="mt-6 space-y-6 text-gray-500">
                                <p class="text-lg">
                                    Sagittis scelerisque nulla cursus in enim
                                    consectetur quam. Dictum urna sed
                                    consectetur neque tristique pellentesque.
                                    Blandit amet, sed aenean erat arcu morbi.
                                    Cursus faucibus nunc nisl netus morbi vel
                                    porttitor vitae ut. Amet vitae fames
                                    senectus vitae.
                                </p>
                            </div>
                        </div>

                        <!-- Stats section -->
                        <div class="mt-10">
                            <h2
                                class="my-8 text-xl font-extrabold tracking-tight text-gray-900"
                            >
                                My Experience
                            </h2>
                            <dl class="grid grid-cols-1 gap-x-4 gap-y-8">
                                <div
                                    v-for="stat in stats"
                                    :key="stat.label"
                                    class="pt-6 border-t-2 border-gray-100"
                                >
                                    <dt
                                        class="text-base font-medium text-gray-500"
                                    >
                                        {{ stat.label }}
                                    </dt>
                                    <dd
                                        class="text-base font-medium tracking-tight text-gray-900"
                                    >
                                        {{ stat.value }}
                                    </dd>
                                    <dd
                                        class="text-base font-medium tracking-tight text-gray-900"
                                    >
                                        {{ stat.company }}
                                    </dd>
                                </div>
                            </dl>
                            <h2
                                class="my-8 text-xl font-extrabold tracking-tight text-gray-900"
                            >
                                My Tools & Skills
                            </h2>
                            <div class="mb-8 lg:items-center">
                                <div
                                    class="grid grid-cols-2 mt-12 md:grid-cols-3 lg:mt-0 lg:grid-cols-4"
                                >
                                    <div
                                        v-for="logo in logos"
                                        :key="logo.name"
                                        class="flex justify-center col-span-1 px-8 py-8 border bg-gray-50"
                                    >
                                        <img
                                            class="max-h-12"
                                            :src="logo.url"
                                            :alt="logo.name"
                                        />
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
    { label: 'Founded', value: '2020-2021', company: 'adf' },
    { label: 'Employees', value: '2021-2022', company: 'adf' },
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
