'use strict';

{
    //Document Object Model / DOM

    // document.body.textContent = 'こんにちわ！';
    // document.title = 'こんにちわ！';

    //id属性の要素の取得
    // document.getElementById('target').textContent = 'こんばんわ！';

    //querySelector
    // document.querySelector('h1').textContent = 'H1!!!';
    //querySelectorAllで奇数番目だけ変更
    // document.querySelectorAll('li:nth-child(odd)').forEach(li => {
    //     li.textContent = 'LI';
    // })

    //親要素と子要素
    // const ul = document.querySelector('ul');

    // console.log(ul.parentNode);
    // console.log(ul.children);
    // console.log(ul.children[0]);

    // for (let i = 0; i < ul.children.length; i++){
    //     console.log(ul.children[i].textContent);
    // }

    // const h1 = document.querySelector('h1');
    // console.log(h1.title);
    // h1.title = 'Changed!'

    // h1.style.color = 'gray';
    // h1.style.backgroundColor = 'pink';

    //HTMLのカスタム属性
    // const h1 = document.querySelector('h1');
    // console.log(h1.dataset.appId);
    // h1.dataset.appId = 'this is message';

    //クラス属性の操作
    //const div = document.querySelector('div');
    // div.className = 'box border-pink';

    // div.classList.add ('border-pink');
    // div.classList.remove ('box');


    //.contains　含んでいるか確認
    // if (div.classList.contains('border-pink')) {
    //     div.classList.remove ('border-pink')
    // } else {
    //     div.classList.add ('border-pink');
    // }
    //おんなじ処理！
    //div.classList.toggle('border-pink');

    //JavaScriptだけで要素を生成してドキュメントに追加していく方法について見ていきます。
    //appendChild, createElement
    // const h1 = document.createElement('h1');
    // h1.textContent = 'title';
    // document.body.appendChild(h1);

    // const p = document.createElement('p');
    // p.textContent = 'hello';
    // document.body.appendChild(p);

    //insertBefore
    // const h2 = document.createElement('h2');
    // h2.textContent = 'Sub title';
    // document.body.insertBefore(h2, p);

    //cloneNode
    // const copy = p.cloneNode(true);
    // document.body.insertBefore(copy, h2);

    //removeChild
    // document.body.removeChild(h2);

    //テキスト入力部品をJavaScriptから操作するための方法
    // const text = document.querySelector('input[type="text"]');
    // const textarea = document.querySelector('textarea');

    // console.log(text.value);
    // console.log(textarea.value);

    // text.focus();
    // text.select();
    // text.disabled = true;

    //チェックボックス、ラジオボタン、セレクトボックス
    // console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
    // console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);
    // document.querySelectorAll('input[type="checkbox"]')[1].checked = true;

    // console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
    // console.log(document.querySelectorAll('input[type="radio"]')[1].checked);
    // document.querySelectorAll('input[type="radio"]')[1].checked = true;

    // console.log(document.querySelectorAll('select > option')[0].selected);
    // console.log(document.querySelectorAll('select > option')[1].selected);
    // console.log(document.querySelectorAll('select > option')[2].selected);
    // document.querySelectorAll('select > option')[2].selected = true;

    //特定の動作を行われたときに処理が実行されるイベントリスナーについて
    // const button = document.querySelector('button');
    // button.addEventListener('dblclick', ()=>{//ダブルクリック！
    //     console.log('clicked');
    // });

    //イベントオブジェクトを使ってイベントに関する情報を取得する方法について
    // const div = document.querySelector('div');
    // document.addEventListener('mousemove', e=>{
    //     div.textContent = `${e.clientX}:${e.clientY}`;
    // });

    //要素に設定された規定の動作をキャンセルするためのpreventDefaultメソッドについて
    const a = document.querySelector('a');
    const span = document.querySelector('span');
    a.addEventListener('click', e =>{
        e.preventDefault();
        a.classList.add('hidden');
        span.classList.remove('hidden');
    });

}