// 機能の定義　随時追加するかも
const appFunctions = [
  "認証機能",
  "投稿作成・編集・削除機能",
  "コメント投稿・編集・削除機能",
  "いいね機能",
  "フォロー・フォロワー機能",
  "絞り込み検索機能",
  "ワード検索機能",
  "非同期処理",
  "マルチログイン機能",
  "API連携",
  "画像投稿・編集・削除機能",
  "メール送信機能",
  "チャット機能"
];

appFunctionNumber = appFunctions.length;
console.log(appFunctionNumber);

// select用for文 もっときれいに書けそう
selectFunctions = [];
appFunctions.forEach( function( value, index ){
  selectFunctions.push(index + 1); 
});
console.log(selectFunctions);

//optionを追加
window.onload = function addOption() {
  for (let i = 0; i < appFunctionNumber; i++){
  let select = document.getElementById("appFunctionNumber");
  let option = document.createElement("option");
  option.text = selectFunctions[i];
  option.value = selectFunctions[i];
  select.appendChild(option);
  }
}

//go btn
function startSlot() {
  let slots = document.getElementById("slots");
  let slot = document.createElement("div");
  let appFunction = document.createElement("p");
  //selectから値を取得
  let selectedFunctionNumber = document.getElementById("appFunctionNumber").value;
//  console.log(selectedFunctionNumber);
  //slot用random生成
  let selectedFunctionArray = [];
  for(let i = 0; i < selectedFunctionNumber; i++){
    let num = Math.floor(Math.random() * appFunctionNumber);
    //console.log(num);
    if(!selectedFunctionArray.includes(num)){
      selectedFunctionArray.push(appFunctions[num]);
    }
  }
  appFunction.textContent = selectedFunctionArray;
  slot.appendChild(appFunction);
  slots.appendChild(slot);
}


 //memo
// randomのかぶりをなくしたい
// リセットボタン作成
// css調整
// リファクタリング