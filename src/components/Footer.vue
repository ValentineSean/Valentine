<template>
    <main>
        <div class="px-8 bg-black">
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
                            class="text-3xl font-extrabold text-[#F2F5EA] sm:text-5xl"
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
                                <h3 class="text-2xl font-medium text-[#F2F5EA]">
                                    {{ item.name }}
                                </h3>
                                <dl class="mt-2 text-xl text-[#F2F5EA]">
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
        telephone: '+263718787946',
    },
    {
        name: 'Calls',
        email: '',
        telephone: '+263718787946',
    },
    {
        name: 'Email',
        email: 'seanchanengeta@gmail.com',
        telephone: '',
    },
]

export default {
    components: {},
    setup() {
        return {
            contactDetails,
        }
    },
}
</script>
