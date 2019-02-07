
<!-- 商品一覧と商品情報の表示のみのSPA
 <template>
    <div class="product">
        <h1>{{ detail.name }}</h1>
        <dl class="product-table">
            <dt>商品名</dt><dd>{{ item.name }}</dd>
            <dt>価格</dt><dd>{{ item.price }}</dd>
            <dt>商品説明</dt><dd>{{ item.content }}</dd>
        </dl>
    </div>
    <div v-else key="loading">商品情報を読み込んでいます・・・</div>
</template>

<script>
import products from '@/api/products.js'
export default {
    props: { id: Number },
    data() {
        return {
            item: null
        }
    },
    watch: {
        id: {
            handler() {
                products.asyncFind(this.id, item => {
                    this.item = item
                })
            }, immediate: true
        }
    }
}
</script> -->

<!-- 商品の詳細とそのレビューも表示-->
<template>
    <div class="product">
        <h1>{{ detail.name }}</h1>
        <nav class="nav">
            <router-link :to="{ name: 'product-home' }">商品詳細</router-link>
            <router-link :to="{ name: 'product-review' }">レビュー</router-link>
        </nav>
        <!-- ここに子ルートを埋め込む -->
        <router-view />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: { id: Number },
    computed: mapGetters('product', ['detail']),
    watch: {
        id: {
            handler() {
                this.$store.dispatch('product/load', this.id)
            }, immediate: true
        }
    },
    beforeDestroy() {
        //親ルートを移動するとき商品詳細データを破棄
        this.$store.dispatch('product/destroy')
    }
}
</script>



