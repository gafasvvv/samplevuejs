//コンポーネント定義
// var myComponent = {
//     template: '<p>MyComponent</p>'
// }
// new Vue({
//     el: '#app',
//     components: {
//         'my-component': myComponent
//     }
// })

// Vue.component('my-component', {
//     //テンプレート
//     template: '<p>{{ message }}</p>',
//     //データはオブジェクトを返す関数にする
//     data: function(){
//         return {
//             message: 'Hello Vue.js!!!'
//         }
//     },
//     methods: {

//     }
// })

// Vue.component('comp-child', {
//     // テンプレートで受け取ったvalを使用
//     template: '<p>{{ val }}</p>',
//     // 受け取る属性名を指定
//     props: ['val']
//   })
//   new Vue({
//     el: '#app',
//     data: {
//       valueA: 'これは子A',
//       valueB: 'これは子B'
//     }
//   })

//攻撃したらHPは減るゲーム
// //子コンポーネント
// Vue.component('comp-child', {
//     template: '<li>{{ name }} HP:{{ hp }}\
//         <button v-on:click="doAttack">攻撃する！</button></li>',
//     props: { id: Number, name: String, hp: Number },
//     methods: {
//         //ボタンのクリックイベントのハンドラから$emitでattackを発火する
//         doAttack: function(){
//             //引数として自分のIDを渡す
//             this.$emit('attack', this.id)
//         }
//     }
// })
// //親コンポーネント
// new Vue({
//     el: '#app',
//     data: {
//         list: [
//             { id: 1, name: 'スライム', hp:100},
//             { id: 2, name: 'ゴブリン', hp:300},
//             { id: 3, name: 'ドラゴン', hp:500},
//         ]
//     },
//     methods: {
//         //attackが発生した
//         handleAttack: function (id) {
//             //引数のIDから要素を検索
//             var item = this.list.find(function(el){
//                 return el.id === id
//             })
//             //HPが0より多ければ10減らす
//             if (item !== undefined && item.hp > 0) item.hp -= 10
//         }
//     }
// })

//propsの受け取りデータ型を指定する
// Vue.component('example', {
//     props: {
//       value: {
//         type: [String, Number],
//         default: 100,
//         required: true,
//         validator: function (value) {
//           return value > 10
//         }
//       }
//     }
//   })

//子が自分のイベントを起こす
// Vue.component('comp-child', {
//     template: '<button v-on:click="handleClick">イベント発火</button>',
//     methods: {
//         //ボタンのクリックイベントのハンドラでchilds-eventを発火する
//         handleClick: function(){
//             this.$emit('childs-event')
//         }
//     }
// })
//親側で受け取る
// new Vue({
//     el: '#app',
//     methods: {
//         parentsMethod: function(){
//             alert('イベントキャッチ！')
//         }
//     }
// })

//.syncによる双方向データバインディング
// Vue.component('my-component',{
//     template: '<div class="my-component">\
//     <p>名前.{{ name }} HP:{{ hp }}</p>\
//     <p>名前<input v-model="localeName"></p>\
//     <p>HP<input size="5" v-model.number="localeHp"</p>\
//     </div>',
//     props: {
//         name: String,
//         hp: Number
//     },
//     computed: {
//         //算出プロパティのセッターとゲッターを使ってv-modelを使用
//         localeName: {
//             get: function(){
//                 return this.name
//             },
//             set: function(val){
//                 this.$emit('update:name', val)
//             }
//         },
//         localeHp: {
//             get: function(){
//                 return this.hp
//             },
//             set: function(val){
//                 this.$emit('update:hp', val)
//             }
//         }
//     }
// })
// new Vue ({
//     el: '#app',
//     data: {
//         name: 'スライム',
//         hp: 100,
//     }
// })

//動的コンポーネント
//複数コンポーネントの切り替え(特別な属性のis)
// Vue.component('my-component-a', {
//     template: '<div class="my-component-a">componentA</div>'
// })
// Vue.component('my-component-b', {
//     template: '<div class="my-component-b">componentB</div>'
// })
// new Vue ({
//     el: '#app',
//     data: {
//         componentTypes: ['my-component-a','my-component-b'],
//         current: 0,
//     },
//     computed: {
//         component: function(){
//             //currentと一致するindexのコンポーネントを使用
//             return this.componentTypes[this.current]
//         }
//     }
// })

// //２つの子コンポーネントの定義
// //メッセージ一覧用コンポーネント
// Vue.component('comp-board', {
//     template: '<div>Message Board</div>',
// })
// //入力フォーム用コンポーネント
// Vue.component('comp-form', {
//     template: '<div>Form<br/><textarea v-model="message"></textarea></div>',
//     data: function(){
//         return { message: ''}
//     }
// })
// //親コンポーネントの切り替え
// new Vue ({
//     el: '#app',
//     data: {
//         current: 'comp-board'//動的に切り替える
//     }
// })
