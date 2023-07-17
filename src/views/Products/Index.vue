<template>
    <div>
        <div class="products-wrapper bg-slate-100 grid grid-cols-3 gap-4 rounded-xl p-6">
            <router-link v-for="product in productList" :key="product.id" :to="`/products/${product.id}`">
                <ProductCard :product-name="product.name" :product-price="product.price"
                    :product-discount="product.discount" :product-description="product.description"
                    :banner="getProductsImage(product.bannerImage)" />
            </router-link>
        </div>
    </div>
</template>

<script setup>
import ProductCard from '../../components/ProductCard/Index.vue'
import { getProductsImage } from '../../utils/image'

const productList = [
    {
        name: "低氘水",
        price: 0,
        discount: 0,
        id: "7-5",
        description: "-",
        bannerImage: "低氘水1.jpg",
        imageList: [
            "低氘水1.jpg",
            "低氘水2.jpg",
        ],
    },
    {
        name: "氫水杯",
        price: 12000,
        discount: 6800,
        id: "7-4",
        description: "吸·喝·敷·噴 四種應用形態，做您24小時的全時健康助理。",
        bannerImage: "氫水杯3.jpg",
        imageList: [
            "氫水杯1.jpg",
            "氫水杯2.jpg",
            "氫水杯3.jpg",
        ],
    },
    {
        name: "氫水機",
        price: 86000,
        discount: 68000,
        productId: "7-3",
        description: "氫心TM納米水氣泡臺上式氫水機。純物理混合，唇邊超高濃！",
        bannerImage: "氫水機3.jpg",
        imageList: [
            "氫水機1.jpg",
            "氫水機2.jpg",
            "氫水機3.jpg",
        ],
    },
    {
        name: "氫浴機",
        price: 46000,
        discount: 38800,
        productId: "7-2",
        description: '換一種沐浴方式，打造一個"不會生鏽"的身體！',
        bannerImage: "氫浴機3.jpg",
        imageList: [
            "氫浴機1.jpg",
            "氫浴機2.jpg",
            "氫浴機3.jpg",
        ],
    },
    {
        name: "氫氣機",
        price: 120000,
        discount: 98000,
        productId: "7-1",
        description: "最佳抗氧化劑，安全無毒性副作用。滲透細胞内層，修護受損細胞。",
        bannerImage: "納諾巴伯3.jpg",
        imageList: [
            "納諾巴伯1.jpg",
            "納諾巴伯2.jpg",
            "納諾巴伯3.jpg",
        ],
    },
];


</script>

<style lang="scss" scoped></style>