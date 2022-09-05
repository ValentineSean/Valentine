<template>
    <div class="bg-white">
        <div class="relative overflow-hidden">
            <main>
                <!-- Feature section with grid -->
                <div class="relative py-16 bg-white sm:py-24 lg:py-32">
                    <div
                        class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
                    >
                        <p
                            class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                        >
                            What Services Do I Provide
                        </p>
                        <p
                            class="mx-auto mt-5 text-xl text-gray-500 max-w-prose"
                        >
                            Phasellus lorem quam molestie id quisque diam aenean
                            nulla in. Accumsan in quis quis nunc, ullamcorper
                            malesuada. Eleifend condimentum id viverra nulla.
                        </p>
                        <div class="mt-12">
                            <div
                                class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                            >
                                <div
                                    v-for="feature in features"
                                    :key="feature.name"
                                    class="pt-6"
                                >
                                    <div
                                        class="flow-root px-6 pb-8 rounded-lg bg-gray-50"
                                    >
                                        <div class="-mt-6">
                                            <div>
                                                <span
                                                    class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-[#F6661A] to-[#ff9100] ]"
                                                >
                                                    <component
                                                        :is="feature.icon"
                                                        class="w-6 h-6 text-white"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </div>
                                            <h3
                                                class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                                            >
                                                {{ feature.name }}
                                            </h3>
                                            <p
                                                class="mt-5 text-base text-gray-500"
                                            >
                                                {{ feature.description }}
                                            </p>
                                        </div>
                                    </div>
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
import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    MenuIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    XIcon,
} from '@heroicons/vue/outline'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/vue/solid'

const features = [
    {
        name: 'Data Scraping',
        description:
            'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
        icon: CloudUploadIcon,
    },
    {
        name: 'Backend Development',
        description:
            'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
        icon: LockClosedIcon,
    },
    {
        name: 'System Design',
        description:
            'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores quinnnnn.',
        icon: RefreshIcon,
    },
]

export default {
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        ChevronRightIcon,
        ExternalLinkIcon,
        MenuIcon,
        XIcon,
    },
    setup() {
        return {
            features,
        }
    },
}
</script>
