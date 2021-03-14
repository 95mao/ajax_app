const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html
}

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
    XHR.onload = () => {  // レスポンスの受信に成功したときの処理
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const list = document.getElementById("list");  // 生成したHTMLを描画する処理
      const formText = document.getElementById("content");  // リセットの対象となるフォーム
      list.insertAdjacentHTML("afterend", buildHTML(XHR));  // 生成したHTMLを描画する処理
       formText.value = "";
    };
  });
 }
 
 window.addEventListener('load', post);