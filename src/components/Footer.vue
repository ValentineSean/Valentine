<template>
    <main>
        <div class="bg-white border border-t-2">
            <div
                class="max-w-md py-24 mx-auto sm:max-w-3xl sm:py-32 lg:max-w-7xl"
            >
                <div class="divide-y divide-warm-gray-200">
                    <section
                        class="lg:grid lg:grid-cols-3 lg:gap-8"
                        aria-labelledby="contact-heading"
                    >
                        <h2
                            id="contact-heading"
                            class="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl"
                        >
                            Get in touch
                        </h2>
                        <div
                            class="grid grid-cols-1 gap-12 mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2"
                        >
                            <div
                                v-for="item in contactDetails"
                                :key="item.name"
                            >
                                <h3
                                    class="text-lg font-medium text-warm-gray-900"
                                >
                                    {{ item.name }}
                                </h3>
                                <dl class="mt-2 text-base text-warm-gray-500">
                                    <div>
                                        <dt class="sr-only">Email</dt>
                                        <dd>
                                            {{ item.email }}
                                        </dd>
                                    </div>
                                    <div class="mt-1">
                                        <dt class="sr-only">Phone number</dt>
                                        <dd>
                                            {{ item.telephone }}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const contactDetails = [
    {
        name: 'WhatsApp',
        email: '',
        telephone: '+1 (555) 123-4567',
    },
    {
        name: 'Calls',
        email: '',
        telephone: '+1 (555) 123-4567',
    },
    {
        name: 'Email',
        email: 'support@example.com',
        telephone: '',
    },
    {
        name: 'Second Email',
        email: 'support@example.com',
        telephone: '',
    },
]

export default {
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        MenuIcon,
        XIcon,
    },
    setup() {
        return {
            contactDetails,
        }
    },
}
</script>
