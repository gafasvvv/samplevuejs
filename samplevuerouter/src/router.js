import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue'//商品一覧
import Product from '@/views/Product.vue'//商品詳細（親ルート）

//Productの子ルート達
import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'

//Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)

//VueRouterインスタンスを生成する
const router = new VueRouter({
    //ヒストリーモード
    // mode: 'history',
    //URLのパスと紐づくコンポーネントをマッピング
    routes: [
        {//ホーム
            path: '/', 
            component: Home
        },
        { //商品一覧ページ
            path: '/product',
            component: ProductList
        },
        { //商品情報ページ
            path: '/product/:id',
            component: Product,
            //関数の場合第１引数として現在のルートオブジェクトが使用できる
            props: route => ({ id: Number(route.params.id) }),
            children: [
                //商品詳細
                {
                    name: 'product-home',
                    path: '',
                    component: ProductHome
                },
                //商品のレビュー一覧
                {
                    name: 'product-review',
                    path: 'review',
                    component: ProductReview
                },
                //商品のレビュー詳細
                {
                    name: 'product-detail',
                    path: 'review/:rid',//親ルートと被らないパラメータを指定
                    component: ProductReviewDetail
                },
            ]
            //Vuexを使ってパラメータをpropsとしてコンポーネントに渡す必要がないのでコメントアウト
            // props: true 
        },
    ]
})

//生成したVueRouterインスタンスをエクスポート
export default router