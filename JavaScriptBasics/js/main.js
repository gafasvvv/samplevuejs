{//スコープ
    
// デバック
'use strict';

// console.log('Hello World');

//定数　const
// const price = 150;
// console.log(price * 140);

//変数 let
// let price = 100;
// console.log(price);
// price = 150;
// console.log(price);

// データ型の確認
// console.log(typeof 'hello');
//10進数の数値に変換
// console.log(parseInt('5', 10) + 3);

//条件分岐　if
// const score = 85;
// if (score >= 80) {
//     console.log('優秀');
// }　else if (score >= 60) {
//     console.log('いいね');
// } else {
//     console.log('頑張ろう！');
// }

//if-elseの条件式の別の書き方
//条件式 ? trueの処理 : falseの処理
// const score = 85;
// score >= 80 ? console.log('優秀') : console.log('頑張ろう！')

// 論理演算子　&& (and), ||(or), !~(not)
// const score = 85;
// const name = 'Ryosuke';
// if(score >= 80 && name === 'Ryosuke'){
//         console.log('優秀！');
// }

// 信号機 (switch文)
// const signal = 'orange';
// switch (signal){
//     case 'red':
//         console.log('止まれ！');
//         break;
//     case 'yellow':
//         console.log('注意！');
//         break;
//     case 'blue':
//     //複数指定できる！
//     case 'green':
//         console.log('進め！');
//         break;
//     default:
//         console.log('間違った信号です！');
//         break;
// }

//for文
// for (let i = 1; i <= 10; i++){
//     // console.log('こんにちわ！');
//     //テンプレートリテラル`${i}` {}内の値や計算式を文字列に変換して組み込める
//     console.log(`${i} こんにちわ`);
// }

//while文
// let hp = 150;
// while (hp > 0){
//     console.log(`HP残り ${hp}`)
//     hp -= 15;
// }

// for (let i = 1; i <= 10; i++){
//     // if (i　% 3 === 0){
//     //     //スキップ処理
//     //     continue;
//     // }
//     if (i === 8){
//         //ブレイク処理
//         break;
//     }
//     console.log(i);
// }

//関数function
// function showAd(message = 'AD'){//仮引数
//     console.log('--------');
//     console.log(`---${message}---`);
//     console.log('--------');
// }
//呼び出し
// showAd('headerAd');//実引数
// console.log('How are you doing?')
// showAd();

// 関数宣言と関数式、無名関数
// const sum = function (a, b, c){
//     return a + b + c;
// };
// const total = sum(70, 80, 75) + sum(75, 80, 85);
// console.log(total);

//アロー関数
// const double = a => a * 2;
// console.log(double(12));
}