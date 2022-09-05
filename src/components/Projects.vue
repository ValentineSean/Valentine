<template>
    <div class="bg-white">
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-12">
                <div
                    class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
                >
                    <h2
                        class="text-3xl font-extrabold tracking-tight sm:text-4xl"
                    >
                        My Projects
                    </h2>
                    <p class="text-xl text-gray-500">
                        Odio nisi, lectus dis nulla. Ultrices maecenas vitae
                        rutrum dolor ultricies donec risus sodales. Tempus quis
                        et.
                    </p>
                </div>
                <ul
                    role="list"
                    class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                >
                    <li v-for="prod in projects" :key="prod.name">
                        <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                                <img
                                    class="object-cover rounded-lg shadow-lg"
                                    :src="prod.imageUrl"
                                    alt=""
                                />
                            </div>

                            <div class="space-y-2">
                                <div
                                    class="space-y-1 text-lg font-medium leading-6"
                                >
                                    <h3>{{ prod.name }}</h3>
                                    <p class="text-indigo-600">
                                        {{ prod.role }}
                                    </p>
                                </div>

                                <ul
                                    role="list"
                                    class="flex items-center justify-center space-x-5"
                                >
                                    <li v-for="i in prod.languages" :key="i">
                                        <a
                                            class="text-gray-400 hover:text-gray-500"
                                        >
                                            <span class="cursor-pointer">{{
                                                i
                                            }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
const projects = [
    {
        name: 'Spotify',
        role: 'Backend Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        languages: ['python', 'flask', 'vue'],
    },
    {
        name: 'Spotify',
        role: 'Backend Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        languages: ['python', 'flask', 'vue'],
    },
    {
        name: 'Spotify',
        role: 'Backend Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        languages: ['python', 'flask', 'vue'],
    },
    {
        name: 'Spotify',
        role: 'Backend Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        languages: ['python', 'flask', 'vue'],
    },
]

export default {
    setup() {
        return {
            projects,
        }
    },
}
</script>
