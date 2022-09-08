<template>
    <div class="px-8 mt-32">
        <div class="mx-auto overflow-hidden max-w-7xl">
            <div
                class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
            >
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    My Projects
                </h2>
                <p class="text-xl text-gray-500">
                    Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
                    dolor ultricies donec risus sodales. Tempus quis et.
                </p>
            </div>

            <div
                class="grid grid-cols-2 mt-8 -mx-px border border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
            >
                <div
                    v-for="product in products"
                    :key="product.id"
                    class="relative p-4 border-b border-r border-gray-200 group sm:p-6"
                >
                    <div
                        class="overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75"
                    >
                        <img
                            :src="product.imageSrc"
                            :alt="product.imageAlt"
                            class="object-cover object-center w-full h-full"
                        />
                    </div>
                    <div class="pt-10 pb-4 text-center">
                        <h3 class="text-sm font-medium text-gray-900">
                            <a :href="product.href">
                                <span
                                    aria-hidden="true"
                                    class="absolute inset-0"
                                />
                                {{ product.name }}
                            </a>
                        </h3>

                        <p class="mt-4 text-base font-medium text-blue-700">
                            view
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/solid'

const products = [
    {
        id: 1,
        name: 'Organize Basic Set (Walnut)',

        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 2,
        name: 'Organize Pen Holder',

        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Organize Sticky Note Holder',

        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Organize Phone Holder',

        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    // More products...
]

export default {
    components: {
        StarIcon,
    },
    setup() {
        return {
            products,
        }
    },
}
</script>
