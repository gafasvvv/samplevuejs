var windowplugin = {
    install: function(Vue){
        //プラグインデータ用にVueインスタンスを利用する
        var store = new Vue ({
            data: {
                scrollY: 0
            }
        })
        //ウィンドウのスクロールイベントをハンドル
        var timer = null
        window.addEventListener('scroll', function(){
            if (timer === null){
                timer = setTimeout(function(){
                    //200ms感覚でscrollプロパティに代入
                    store.scrollY = window.scrollY
                    clearTimeout(timer)
                    timer = null
                }, 200)
            }
        })
        //インスタンスプロパティに登録
        Vue.prototype.$window = store.$data
    }
}
Vue.use(windowPlugin)

Vue.component('my-component', {
    template: '<div>{{ scrollY }}</div>',
    computed: {
      scrollY: function(){ return this.$window.scrollY }
    }
  })