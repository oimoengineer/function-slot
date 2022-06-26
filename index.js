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

// select用for文 もっときれいに書けそう
selectFunctions = [];
appFunctions.forEach( function( value, index ){
  selectFunctions.push(index + 1); 
});
console.log(selectFunctions);

//optionを追加
let select = document.getElementById("appFunctionNumber");
window.onload = function addOption() {
  for (let i = 0; i < appFunctions.length; i++){
  let select = document.getElementById("appFunctionNumber");
  let option = document.createElement("option");
  option.text = selectFunctions[i];
  option.value = selectFunctions[i];
  select.appendChild(option);
  }
}

