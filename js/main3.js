//算出プロパティの使い方
// var app = new Vue({
//     el: '#app',
//     data: {
//         width: 800,
//         height: 600
//     },
//     //算出プロパティ
//     computed: {
//         //算出プロパティhalfWidthを定義
//         halfWidth: function(){
//             return this.width / 2
//         },
//         halfHeight: function(){
//             return this.height / 2
//         },
//         halfPoint: function(){
//             return {
//                 x: this.halfWidth,
//                 y: this.halfHeight
//             }
//         } 
//     }
// })

//ゲッターとセッター
// var app = new Vue({
//     el: '#app',
//     data: {
//         withoutTax: 0,
//     },
//     //算出プロパティ
//     computed: {
//         //算出プロパティhalfWidthを定義
//         withTax: {
//             get: function(){ 
//                 return this.withoutTax * 1.08
//             },
//             set: function(val){
//                 this.withoutTax = val / 1.08
//             }
//         }
//     }
// })

//算出プロパティのキャッシュ機能
// var app = new Vue({
//         el: '#app',
//         computed: {
//             computedData: function() {
//                 return Math.random()
//             }
//         },
//         methods: {
//             methodsData: function() {
//                 return Math.random()
//             }
//         }
//     })

//リストの絞り込みとソート機能を利用
// var app = new Vue({
//     el: '#app',
//     data: {
//     // フォーム入力と紐付けるデータ
//         budget: 300,
//         //表示件数
//         limit: 2,
//         // 元になるリスト
//         list: [
//             { id: 1, name: 'りんご', price: 98 },
//             { id: 2, name: 'バナナ', price: 198 },
//             { id: 3, name: 'いちご', price: 498 },
//             { id: 4, name: 'オレンジ', price: 128 },
//             { id: 5, name: 'メロン', price: 980 },
//         ],
//         order: false
//     },
//     computed: {
//         //budget以下のリストを返す算出プロパティ
//         matched: function(){
//             return this.list.filter(function(el){
//                 return el.price <= this.budget
//             }, this)
//         },
//         //matchedで返ったデータをlimit件数を返す算出プロパティ
//         limited: function(){
//             return this.matched.slice(0, this.limit)
//         },
//         //sortedを新しく追加
//         sorted: function(){
//             return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
//         },
//         //limitedで使用するリストをsortedに追加
//         limited: function(){
//             return this.sorted.slice(0, this.limit)
//         }
//     }
// })

//フォームを監視してAPIからデータを取得しよう
// var app = new Vue({
//     el: '#app',
//     data: {
//         list: [],
//         current: '',
//         topics: [
//             { value: 'vue', name: 'Vue.js'},
//             { value: 'jQuery', name:'jQuery'},
//             { value: 'Laravel', name:'Laravel'}
//         ]
//     },
//     watch: {
//         current: function(val){
//             axios.get('https://api.github.com/search/repositories',{
//                 params: { q: 'topic:' + val }
//             }).then(function(response){
//                 this.list = response.data.items
//             }.bind(this))
//         }
//     }
// })

//フィルタの使い方
// var app = new Vue({
//         el: '#app',
//         data: {
//             price: 19800
//         },
//         filters: {
//             localeNum: function(val) {
//                 return val.toLocaleString()
//             }
//         }
//     })

//複数フィルタの使い方
// var app = new Vue({
//         el: '#app',
//         filters: {
//             //小数点以下を第二位に丸めるフィルタ
//             round: function(val){
//                 return Math.round(val * 100) / 100;
//             },
//             //度からラジアンに変換するフィルタ
//             radian: function(val){
//                 return val * Math.PI / 180;
//             }
//         }
//     })

//カスタムディレクティブの使い方
// var app = new Vue({
//         el: '#app',
//         directives: {
//             focus: {
//             //紐ついてる要素がDOMに挿入されるとき
//                 inserted: function(el){
//                     el.focus()// 要素にフォーカスを当てる
//                 }
//             }
//         }
//     })
    //使用可能なフック
    // Vue.directive('example', {
    //     bind: function (el, binding) {
    //       console.log('v-example bind')
    //     },
    //     inserted: function (el, binding) {
    //       console.log('v-example inserted')
    //     },
    //     update: function (el, binding) {
    //       console.log('v-example update')
    //     },
    //     componentUpdated: function (el, binding) {
    //       console.log('v-example componentUpdated')
    //     },
    //     unbind: function (el, binding) {
    //       console.log('v-example unbind')
    //     }
    //   })

    new Vue({
        el: '#app',
        data: {
          list: []
        },
        watch: {
          list: function () {
            // 更新後のul要素の高さを取得できない…
            console.log('通常:', this.$refs.list.offsetHeight)
            // nextTickを使えばできる！
            this.$nextTick(function () {
              console.log('nextTick:', this.$refs.list.offsetHeight)
            })
          }
        }
      })