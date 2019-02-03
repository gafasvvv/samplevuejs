//イベントハンドリング
// var app = new Vue({
//     el: '#app',
//     methods: {
//         handleClick: function(){
//             alert('クリックしました！')
//         }
//     }
// })

// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue.js!!!',
//     },
//     methods: {
//         handleInput: function(event){
//             //代入前に何かの処理を行う
//             this.message = event.target.value
//         }
//     }
// })

// var app = new Vue({
//     el: '#app',
//     methods: {
//         handler: function(comment){
//             console.log(comment)
//         }
//     }
// })

// 双方向データーバインディング
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: ''
//     }
// })

//単一要素
// var app = new Vue({
//     el: '#app',
//     data: {
//         val: 'いいえ'
//     }
// })

//複数要素
// var app = new Vue({
//     el: '#app',
//     data: {
//         val: []
//     }
// })

//ラジオボタン
// var app = new Vue({
//     el: '#app',
//     data: {
//         val: ''
//     }
// })

//セレクトボックス（単一選択）
// var app = new Vue({
//     el: '#app',
//     data: {
//         val: ''
//     }
// })

//セレクトボックス（複数選択）
// var app = new Vue({
//     el: '#app',
//     data: {
//         val: []
//     }
// })

//セレクトボックス（複数選択）
// var app = new Vue({
//     el: '#app',
//     data: {
//         val: []
//     }
// })

//画像ファイル(画像が変更されると画面上にプレビューが表示)
// var app = new Vue({
//     el: '#app',
//     data: {
//         preview: ''
//     },
//     methods: {
//         handleChange: function(event){
//             var file = event.target.files[0]
//             if(file && file.type.match(/^image\/(png|jpeg)$/)){
//                 this.preview = window.URL.createObjectURL(file)
//             }
//         }
//     }
// })

// その他の入力タイプ
// var app = new Vue({
//     el: '#app',
//     data: {
//         val: 50,
//         price: 100
//     }
// })

// スクロールイベントの取得
// var app = new Vue({
//     el: '#app',
//     data: {
//         scrollY: 0,
//         timer: null
//     },
//     created: function(){
//         //ハンドラを登録
//         window.addEventListener('scroll', this.handleScroll)
//     },
//     beforeDestroy: function(){
//         //ハンドラを解除（コンポーネントやSPAの場合忘れやすい）
//         window.removeEventListener('scroll', this.handleScroll)
//     },
//     methods: {
//         //違和感のない程度に200ms間隔でscrollデータを更新する
//         handleScroll: function(){
//             if(this.timer === null){
//                 this.timer = setTimeout(function(){
//                     this.scrollY = window.scrollY
//                     clearTimeout(this.timer)
//                     this.timer = null
//                 }.bind(this),200)
//             }
//         }
//     }
// })

