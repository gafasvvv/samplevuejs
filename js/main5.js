// new Vue ({
//     el: '#app',
//     data: {
//         show: true
//     }
// })

// キーの変化によるトランジションの発動
// new Vue ({
//     el: '#app',
//     data: {
//         count: 0
//     }
// })

// 移動トランジション
// new Vue ({
//     el: '#app',
//     data: {
//         order: false,
//         list: [
//             { id: 1, name: "りんご", price: 98},
//             { id: 2, name: "バナナ", price: 198},
//             { id: 3, name: "いちご", price: 298}
//         ]
//     },
//     computed: {
//         //orderの値でリストの順番を反転する算出プロパティ
//         sortedList: function(){
//             //LodashのorderByメソッドの使用
//             return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
//         }
//     }
// })

// 移動トランジション X＆Y座標
// new Vue({
//     el: '#app',
//     data: {
//       list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     },
//     methods: {
//       doShuffle: function () {
//         this.list = _.shuffle(this.list)
//       },
//       doAdd: function() {
//         var newNumber = Math.max.apply(null, this.list) + 1
//         var index = Math.floor(Math.random() * (this.list.length + 1))
//         this.list.splice(index, 0, newNumber)
//       },
//       doRemove: function (index) {
//         this.list.splice(index, 1)
//       }
//     }
//   })

//svgパーツのコンポーネントを定義
Vue.component('my-circle',{
    template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>',
    props: {
        fill: String
    }
})
new Vue({
    el: '#app',
    data: {
        toggle: false
    },
    computed: {
        fill: function(){
            return this.toggle ? 'lightpink' : 'skyblue'
        }
    }
})