<template>
    <div>
        <div class="products-wrapper bg-slate-100 grid grid-cols-3 gap-4 rounded-xl p-6">
            <router-link v-for="product in productList" :key="product.id" :to="`/products/${product.id}`">
                <ProductCard :product-name="product.name" :product-price="product.price"
                    :product-description="product.description" :banner="product.bannerImage" />
            </router-link>
        </div>
    </div>
</template>

<script setup>
import ProductCard from '../../components/ProductCard/Index.vue'
import { productList } from './index.js'



</script>

<style lang="scss" scoped></style>