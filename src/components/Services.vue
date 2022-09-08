<template>
    <div class="bg-black">
        <div class="relative overflow-hidden">
            <main>
                <!-- Feature section with grid -->
                <div
                    class="relative px-4 py-16 bg-black lg:px-0 sm:py-24 lg:py-32"
                >
                    <div
                        class="flex flex-col items-center mx-auto max-w-7xl md:flex-row"
                    >
                        <div class="flex flex-col items-start lg:w-1/2">
                            <p
                                class="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                            >
                                What Services Do I Provide
                            </p>
                            <p class="mt-5 text-xl text-gray-500 max-w-prose">
                                I will help you with finding a solution and
                                solve your problems
                            </p>
                            <a
                                v-smooth-scroll="{
                                    offset: -100,
                                    duration: 500,
                                    easing: 'easeInOutCubic',
                                }"
                                href="#footer"
                                class="inline-flex items-center px-16 py-4 mt-12 text-sm font-bold text-white bg-blue-500 hover:text-black hover:bg-white"
                            >
                                Let's Talk
                            </a>
                        </div>
                        <div
                            class="flex flex-col w-full mt-12 space-y-8 text-white lg:w-1/2"
                        >
                            <Disclosure v-slot="{ open }">
                                <!-- Use the `open` state to conditionally change the direction of an icon. -->
                                <DisclosureButton class="py-2">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <div>
                                            <span class="text-3xl font-bold"
                                                >01.</span
                                            >
                                            <span class="text-2xl">
                                                Backend Development</span
                                            >
                                        </div>
                                        <ChevronRightIcon
                                            :class="
                                                open
                                                    ? 'rotate-[135deg] transform'
                                                    : ' rotate-[300deg] transform'
                                            "
                                            class="w-8 h-8"
                                        />
                                    </div>
                                </DisclosureButton>
                                <DisclosurePanel>No</DisclosurePanel>
                            </Disclosure>

                            <Disclosure v-slot="{ open }">
                                <!-- Use the `open` state to conditionally change the direction of an icon. -->
                                <DisclosureButton class="py-2">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <div>
                                            <span class="text-3xl font-bold"
                                                >02.</span
                                            >
                                            <span class="text-2xl">
                                                Data Scraping</span
                                            >
                                        </div>
                                        <ChevronRightIcon
                                            :class="
                                                open
                                                    ? 'rotate-[135deg] transform'
                                                    : ' rotate-[300deg] transform'
                                            "
                                            class="w-8 h-8"
                                        />
                                    </div>
                                </DisclosureButton>
                                <DisclosurePanel>No</DisclosurePanel>
                            </Disclosure>
                            <Disclosure v-slot="{ open }">
                                <!-- Use the `open` state to conditionally change the direction of an icon. -->
                                <DisclosureButton class="py-2">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <div>
                                            <span class="text-3xl font-bold"
                                                >03.</span
                                            >
                                            <span class="text-2xl">
                                                System Design</span
                                            >
                                        </div>
                                        <ChevronRightIcon
                                            :class="
                                                open
                                                    ? 'rotate-[135deg] transform'
                                                    : ' rotate-[300deg] transform'
                                            "
                                            class="w-8 h-8"
                                        />
                                    </div>
                                </DisclosureButton>
                                <DisclosurePanel>No</DisclosurePanel>
                            </Disclosure>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { defineComponent, h, ref } from 'vue'
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'
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
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    },
    setup() {
        const open = ref(false)
        return {
            features,
            open,
        }
    },
}
</script>
