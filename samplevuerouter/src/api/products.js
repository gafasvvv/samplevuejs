
//商品リストの配列
const database = [
    { id: 1, name: 'りんご', price: 98, content: 'あっさりしてて食べやすい！' },
    { id: 2, name: 'バナナ', price: 198, content: 'エクアドル産！' },
    { id: 3, name: 'いちご', price: 398, content: '食後のデザートに！' },
]
//インポート先で使用できる関数をオブジェクトとしてまとめたもの
export default {
    fetch(id) { return database },
    find(id) { return database.find(el => el.id === id) },
    asyncFind(id, callback) {
        setTimeout(() => {
            callback(database.find(el => el.id === id))
        }, 1000)
    }
}