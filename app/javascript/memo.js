function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {  // クリックした時のイベント
    e.preventDefault();  // 既定のイベントを無視する指示（リクエストの重複防止
    const form = document.getElementById("form");  // id「form」を指定（中身は投稿までの一連
    const formData = new FormData(form);  // formの中身のデータを指定（投稿内容？
    const XHR = new XMLHttpRequest();  // jsがhttpを使ってサーバーとやりとりする合図
    XHR.open("POST", "/posts", true);  // xhrのルールの定義
    XHR.responseType = "json";  // レスポンスがどの型で返して欲しいかの指示
    XHR.send(formData);  // レスポンスを返す指示
  });
 }
 
 window.addEventListener('load', post);