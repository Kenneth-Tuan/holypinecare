<template>
    <div class="product-card w-full rounded-xl p-4 hover:shadow-2xl cursor-pointer flex-col justify-start">
        <div
            class="product-img w-full h-max rounded-xl mb-4 overflow-hidden bg-white flex flex-row justify-center items-center">
            <img class="w-80 h-80" :src="banner" alt="">
        </div>
        <div class="product-name text-3xl mb-4 font-semibold">
            {{ productName ?? 'lorum' }}
        </div>
        <div class="product-description text-lg mb-4 font-medium flex-grow">
            {{ productDescription ?? 'lorum' }}
        </div>
        <div class="product-price">
            <span class="text-3xl text-gray-900" :class="[{ 'line-through': hasDiscount }]">
                NT$
            </span>
            <span class="text-3xl text-gray-900" :class="[{ 'line-through': hasDiscount }]">
                {{ checkedPrice.toLocaleString() }} {{ productUnit ? `/ ${productUnit}` : '' }}
            </span>
        </div>
        <template v-if="hasDiscount">
            <span class="text-3xl text-orange-600">
                NT$
            </span>
            <span class="text-3xl text-orange-600">
                {{ productDiscount.toLocaleString() }} {{ productUnit ? `/ ${productUnit}` : '' }}
            </span>
        </template>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    banner: String,
    productName: String,
    productDescription: String,
    productPrice: Number,
    productDiscount: Number,
    productUnit: String
})

const checkedPrice = computed(() => props.productPrice ? props.productPrice.toLocaleString() : '-')

const hasDiscount = computed(() => props.productDiscount < props.productPrice ? true : false)

</script>

<style lang="scss" scoped></style>