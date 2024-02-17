var btn1 = document.getElementById("btn1").addEventListener("click", onclick);
var quote = document.getElementById("quote");
var author = document.getElementById("author");
var btn2 = document.getElementById("btn2").addEventListener("click", tweet);
const api = "https://api.quotable.io/random";

function onclick() {
  showQuotes(api);
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.innerHTML,
    "Tweet Window",
    "height=500px,width=700px"
  );
}

async function showQuotes(api) {
  const response = await fetch(api);
  var data = await response.json();
  if (response.status == 400) {
    console.error("error");
  }
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = "~" + data.author;
}
