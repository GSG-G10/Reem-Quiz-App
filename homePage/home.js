
let startBtn=document.getElementById('startbtn')
let Inputname=document.getElementById('name')
let dataArray = [];         // Array to push new data
startBtn.addEventListener('click',addName)

//Add Name to Session storage
function addName(){
sessionStorage.setItem("name", Inputname.value);
window.location.href="./quiz-page/quiz-page.html";
}
