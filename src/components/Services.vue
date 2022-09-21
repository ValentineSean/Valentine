<template>
    <div class="mt-16 bg-black">
        <div class="relative px-4 overflow-hidden">
            <main>
                <!-- Feature section with grid -->
                <div class="relative py-16 bg-black lg:px-0 sm:py-24 lg:py-32">
                    <div
                        class="flex flex-col items-start mx-auto md:items-center sm:space-x-8 max-w-7xl md:flex-row"
                    >
                        <div class="flex flex-col items-start lg:w-1/2">
                            <p
                                class="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-[#F2F5EA]"
                            >
                                What Services Do I Provide
                            </p>
                            <p
                                class="mt-5 text-lg md:text-2xl text-[#F2F5EA] max-w-prose"
                            >
                                Just tell me what you need
                            </p>
                            <a
                                v-smooth-scroll="{
                                    offset: -100,
                                    duration: 500,
                                    easing: 'easeInOutCubic',
                                }"
                                href="#footer"
                                class="inline-flex items-center px-16 py-4 mt-12 text-sm font-bold text-[#F2F5EA] bg-blue-500 hover:text-black hover:bg-white"
                            >
                                Let's Talk
                            </a>
                        </div>
                        <div
                            class="flex flex-col w-full mt-12 space-y-8 text-[#F2F5EA] lg:w-1/2"
                        >
                            <Disclosure v-slot="{ open }">
                                <!-- Use the `open` state to conditionally change the direction of an icon. -->
                                <DisclosureButton class="py-2">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <div>
                                            <span
                                                class="text-2xl font-bold md:text-3xl"
                                                >01.</span
                                            >
                                            <span class="text-lg md:text-2xl">
                                                Backend Development</span
                                            >
                                        </div>
                                        <!-- <ChevronRightIcon
                                            :class="
                                                open
                                                    ? 'rotate-[135deg] transform'
                                                    : ' rotate-[300deg] transform'
                                            "
                                            class="w-8 h-8"
                                        /> -->
                                    </div>
                                </DisclosureButton>
                                <!--  <DisclosurePanel>No</DisclosurePanel> -->
                            </Disclosure>

                            <Disclosure v-slot="{ open }">
                                <!-- Use the `open` state to conditionally change the direction of an icon. -->
                                <DisclosureButton class="py-2">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <div>
                                            <span
                                                class="text-2xl font-bold md:text-3xl"
                                                >02.</span
                                            >
                                            <span class="text-lg md:text-2xl">
                                                Data Scraping</span
                                            >
                                        </div>
                                        <!-- <ChevronRightIcon
                                            :class="
                                                open
                                                    ? 'rotate-[135deg] transform'
                                                    : ' rotate-[300deg] transform'
                                            "
                                            class="w-8 h-8"
                                        /> -->
                                    </div>
                                </DisclosureButton>
                                <!--  <DisclosurePanel>No</DisclosurePanel> -->
                            </Disclosure>
                            <Disclosure v-slot="{ open }">
                                <!-- Use the `open` state to conditionally change the direction of an icon. -->
                                <DisclosureButton class="py-2">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <div>
                                            <span
                                                class="text-2xl font-bold md:text-3xl"
                                                >03.</span
                                            >
                                            <span class="text-lg md:text-2xl">
                                                Systems Design</span
                                            >
                                        </div>
                                        <!-- <ChevronRightIcon
                                            :class="
                                                open
                                                    ? 'rotate-[135deg] transform'
                                                    : ' rotate-[300deg] transform'
                                            "
                                            class="w-8 h-8"
                                        /> -->
                                    </div>
                                </DisclosureButton>
                                <!--  <DisclosurePanel>No</DisclosurePanel> -->
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
        name: 'Systems Design',
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
        return {
            features,
        }
    },
}
</script>
