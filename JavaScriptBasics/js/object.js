'use strict';

{
    // //配列
    // const scores = [80, 90, 85];
    // console.log(scores[1]);

    // //配列の値の変更は可能、再代入は不可能
    // scores[2] = 100;
    // console.log(scores)

    // console.log(scores.length);

    // //オブジェクトの作り方
    // const player = {
    //     name: 'Ryosuke',//プロパティ
    //     score: 78,//名前: 値
    // };
    // //オブジェクトの呼び出し
    // console.log(player.name);
    // console.log(player['name']);

    // //値の変更
    // player.score  = 100;
    // console.log(player);

    // // 値の追加
    // player.email = 'ryosuke@gmail.com';

    // //要素を削除
    // delete player.score;
    // console.log(player);

    // //クラス
    // class Player {//親クラス
        
    //     constructor(name, age){//メソッド(初期化処理)
    //         this.name = name;
    //         this.age = age;
    //     }

    //     showInfo(){
    //         console.log(`name: ${this.name} age: ${this.age}`);
    //     }

    //     //static インスタンス化なしで呼び出せる
    //     static showVersion(){
    //         console.log('Player class var. 1,0')
    //     }
    // }

    // //インスタンスの生成
    // const ryosuke = new Player('ryosuke', '26');
    // const masashi = new Player('masashi', '25');

    // //出力
    // console.log(ryosuke.age);
    // ryosuke.showInfo();
    // Player.showVersion();

    // //継承について
    // class SoccerPlayer extends Player{//子クラス

    //     constructor(name, age, number){
    //         super(name, age);//親クラスのプロパティを継承
    //         this.number = number;//プロパティの追加
    //     }

    //     kick(){//メソッドの追加
    //         console.log(' ゴール！！！');
    //     }

    // }
    // const naoto = new SoccerPlayer('naoto', 25, 10);

    // naoto.kick();
    // console.log(naoto.number);
    // naoto.showInfo();

    //配列の処理について
    // const a = [1, 5, 10];
    // a.unshift(100);//先頭に追加
    // a.push(200, 300);//末尾に追加
    // console.log(a);

    // const a = [1, 5, 10];
    // a.shift();//先頭を削除
    // a.pop();//末尾を削除
    // console.log(a);

    // const a = [1, 5, 10];
    // a.splice(2, 0, 6, 7);//2番のあとに何も削除せず6と7を追加
    // console.log(a);
    // const removed = a.splice(1, 2,);//1番から2つを削除
    // console.log(a);
    // console.log(removed);//取り除いたものを出力
    
    //foreach文
    // const a = [1, 5, 10];
    // a.forEach((item, index) => {//アロー関数使用
    //     console.log(`${index}: ${item}`);
    // });
    
    // const a = [1, 2, 5, 10];
    // const b = [];
    // a.forEach(item => {
    //     b.push(item * 2);
    // });
    // console.log(b);

    // const b = a.map(item => item * 2);//aに()内の関数処理をする
    // console.log(b);

    // const b = a.filter(item => item % 2 === 0);//aの2の倍数のみ取り出す
    // console.log(b);

    // オブジェクトのキーや値を配列に変換
    //Object.keys(),Object.values(),Object.entries()
    // const o = {
    //     a: 1,
    //     b: 2,
    // };
    // console.log(Object.keys(o));//["a", "b"]
    // console.log(Object.values(o));//[1, 2] 
    // console.log(Object.entries(o));//[["a", 1],["b", 2]]

    // Object.keys(o).forEach(key => {//Object.keys(o)は配列なのでforEachが使える
    //     console.log(`${key}: ${o[key]}`)
    // });

    //スプレッド演算子(...)
    // const a = [10, 20];
    // const b = [1, 2, ... a];
    // console.log(b);
    // a[0] = 100;
    // console.log(b);//値を変更してもbは変わらない

    // const a = [10, 20];
    // const sum = (a, b) => a + b;
    // console.log(sum(...a));

    // const o1 = {a: 1};
    // const o2 = {...o1, b:2};
    // console.log(o2);

    //分割代入
    // const numbers = [1, 2];
    // const [a, b] = numbers;
    // console.log(a);
    // console.log(b);

    //分割代入とスプレッド演算子の併用
    // const numbers = [1, 2, 3, 8];
    // const [a, b, ...rest] = numbers;//[]だよ
    // console.log(a);
    // console.log(b);
    // console.log(rest);

    //オブジェクトに対する分割代入とスプレッド演算子の併用
    // const monster = {
    //     name: 'slime',
    //     score: 98,
    //     hp: 55,
    //     mp: 24,
    // };

    // const{name, score, ...points} = monster;//{}だよ
    // console.log(name);
    // console.log(score);
    // console.log(points);

    //文字列へのアクセス
    // const str = 'hello'
    // console.log(str.length);//5
    // console.log(str.substring(2, 4));//ll
    // console.log(str[1]);//e

    //Mathオブジェクト
    // console.log(Math.PI);//円周率
    // console.log(Math.random());//0...0.9999の乱数を表示
    // Math.random()->0...0.9999999
    // Math.random() * 6->0...5.99999
    // Math.random() * 6 + 1->1...6.999999
    // Math.floor(Math.random() * 6 + 1)->1...6
    // console.log(Math.floor(Math.random() * 6 + 1));//サイコロで使える！

    //Dateオブジェクトの表示
    // const d = new Date();
    // console.log(d);
    // console.log(d.getFullYear());
    // console.log(d.getMonth());
    // console.log(d.getDate());
    // console.log(d.getDay());
    // console.log(d.getHours());
    // console.log(d.getMinutes());
    // console.log(d.getSeconds());
    // console.log(d.getMilliseconds());
    // console.log(d.getTime());//全世界共通経過ミリ秒

    //Dateオブジェクトの操作
    // const d = new Date(2018, 11);//2018/12/01 00:00:00
    // d.setHours(10, 20, 30);//2018/12/01 10:20:30
    // d.setDate(32);//2019/01/01 10:20:30
    // d.setDate(d.getDate() + 3);//2019/01/04 10:20:30
    // console.log(d);

    //Dateオブジェクトの差分
    // const d1 = new Date(2018,11, 1);
    // const d2 = new Date(2018,11, 10);
    // console.log((d2 - d1) / (24 * 60 * 60 * 1000));

    //windowオブジェクトとconfirmオブジェクト
    // window.alert('こんにちわ');
    // alert('こんばんわ');
    // const answer = confirm('確認しましたか？');
    // console.log(answer);//trueとfalseを使って処理を行う

    //setInterval(関数, ミリ秒)
    //処理に負荷をかけすぎないように組む！
    // let i = 0;

    // const showTime = () => {
    //     console.log(new Date());
    //     i++;
    //     if(i > 5){
    //         clearInterval(timerId);//処理を止める
    //     }
    // };

    // let timerId = setInterval(showTime, 1000);

    //setTimeout 処理が時間がかかってもシステムに負荷がかからない
    // let i = 0;
    // const showTime = () => {
    //     console.log(new Date());
    //     let timerId = setTimeout(showTime, 1000);
    //     i++;
    //     if(i > 2){
    //         clearTimeout(timerId);
    //     }
    // };
    // showTime();

    //例外処理
    // const a = 5;
    // try{
    //     console.log(a.toUpperCase());
    // } catch(e){
    //     console.log(e.message);
    // }
    // console.log('Finish');


}