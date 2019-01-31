// テキストのデータバインディング
// var app = new Vue({
//     el: '#app',
//     data: {
//         //オブジェクトデータ
//         message: {
//             value: 'Hello Vue.js!'
//         },
//         //配列データ
//         list: ['りんご', 'バナナ', 'いちご'],
//         //別のデータを使用してlistから取り出す要素を動的にする
//         num: 1
//     }
// })

// DOMのtextContentプロパティにバインド
// DOMのscrollプロパティにバインド
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue.js!',
//         scroll: 0
//     },
//     mounted: function(){
//         //要素のスクロール量を操作
//         this.scroll = 100  
//     }
// })

// countプロパティについて
// var app = new Vue({
//     el: '#app',
//     data: {
//         count: 0
//     },
//     methods: {
//         //ボタンをクリックした時のハンドラ
//         increment: function(){
//             //処理は再代入だけで良い
//             this.count += 1
//         }
//     }
// })

// クラスとスタイルのデータバインディング 
// var app = new Vue({
//         el: '#app',
//         data: {
//             isChild: true,
//             isActive: true,
//             textColor: 'red',
//             bgColor: 'lightgray'
//         }
//     })

//オブジェクトデータを渡すこともできる
// var app = new Vue({
//     el: '#app',
//     data: {
//         classObject: {
//             child: true,
//             'is-active': false
//         },
//         styleObject: {
//             color: 'red',
//             backgroundColor: 'lightgray'
//         }
//     }
// })

// 複数の属性のデータバインディング
// var app = new Vue({
//     el: '#app',
//     data: {
//         item:{
//             id:1,
//             src:'cat.png',
//             alt:' 商品サムネイル',
//             width: 200,
//             height: 200
//         }
//     }
// })

// SVG(Scalable Vector Graphics)
// イラストレーターで扱うベクターデータのデータバインディング
// var app = new Vue({
//     el: '#app',
//     data: {
//         radius: 50
//     }
// })

// リストデータの表示と更新
// var app = new Vue({
//     el: '#app',
//     data: {
//         list:[
//             { id:1, name: 'スライム', hp: 100},
//             { id:2, name: 'ゴブリン', hp: 200},
//             { id:3, name: 'ドラゴン', hp: 500}
//         ]
//     }
// })

// 繰り返し描画しながら、さまざまな条件を適用する
// var app = new Vue({
//     el: '#app',
//     data: {
//         list:[
//             { id:1, name: 'スライム', hp: 100},
//             { id:2, name: 'ゴブリン', hp: 300},
//             { id:3, name: 'ドラゴン', hp: 500}
//         ]
//     }
// })

//要素（モンスター）の追加と削除
// var app = new Vue({
//     el: '#app',
//     data: {
//         name: '',
//         list:[
//             { id:1, name: 'スライム', hp: 100},
//             { id:2, name: 'ゴブリン', hp: 300},
//             { id:3, name: 'ドラゴン', hp: 500}
//         ]
//     },
//     methods: {
//         //追加ボタンをクリックした時のハンドラ
//         doAdd: function(){
//             //リスト内で１番大きいIDを取得
//             var max = this.list.reduce(function(a, b){
//                 return a > b.id ? a : b.id
//             }, 0)
//             //新しいモンスターをリストに追加
//             this.list.push({
//                 //現在の最大のIDに+1してユニークなIDを追加
//                 id: max + 1,
//                 // 現在のフォームの入力値
//                 name: this.name,
//                 hp: 500
//             })
//         },
//         //削除ボタンをクリックした時のハンドラ
//         doRemove: function(index){
//             //受け取ったインデックスの位置から１個要素を削除
//             this.list.splice(index, 1)
//         }
//     }
// })

//すべての要素にactiveプロパティを追加したい
// var app = new Vue({
//     el: '#app',
//     data: {
//         name: '',
//         list:[
//             { id:1, name: 'スライム', hp: 100},
//             { id:2, name: 'ゴブリン', hp: 300},
//             { id:3, name: 'ドラゴン', hp: 500}
//         ]
//     },
//     created: function(){
//     //すべての要素にactiveプロパティを追加したい
//     this.list.forEach(function(item){
//         this.$set(item, 'active', false)
//         //「item.active = false」ではリアクティブにならない
//         }, this)
//     }
// })

//リスト要素プロパティの更新
// var app = new Vue({
//     el: '#app',
//     data: {
//         list:[
//             { id:1, name: 'スライム', hp: 100},
//             { id:2, name: 'ゴブリン', hp: 300},
//             { id:3, name: 'ドラゴン', hp: 500}
//         ]
//     },
//     methods: {
//         //ボタンのクリックイベントのハンドラ
//         doAttack: function(index){
//             //HPを10ずつ減らす
//             this.list[index].hp -= 10
//         }
//     }
// })

//外部データ（JsonファイルやWebAPIなど）から取得する
// var app = new Vue({
//     el: '#app',
//     data: {
//         //あらかじめ空リストを用意しておく
//         list: []
//     },
//     created: function(){
//         axios.get('list.json').then(function(response){
//             //取得完了したらlistに代入
//             this.list = response.data
//         }.bind(this)).catch(function(e){
//             console.error(e)
//         })
//     }
// })

//DOMを直接参照する$elの使い方
// var app = new Vue({
//     el: '#app',
//     mounted: function(){
//         console.log(this.$el)
//     }
// })

// DOMを直接参照する$refsの使い方
// var app = new Vue({
//     el: '#app',
//     mounted: function(){
//         console.log(this.$refs.hello)
//     }
// })

//$elや$refsは一時的な変更
// var app = new Vue({
//     el: '#app',
//     data: {
//         show: true
//     },
//     methods: {
//         handleClick(){
//             var count = this.$refs.count
//             if (count){
//                 count.innerText = parseInt(count.innerText, 10) + 1
//             }
//         }
//     }
// })