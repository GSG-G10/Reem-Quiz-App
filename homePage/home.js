
let startBtn=document.getElementById('startbtn')
let Inputname=document.getElementById('name')
let dataArray = [];         // Array to push new data
startBtn.addEventListener('click',addName)


function addName(){
if(Inputname.value==''){
    alert('You must enter name')
    
}
else{
//Add Name to Session storage
sessionStorage.setItem("name", Inputname.value);
window.location.href="./quiz-page/quiz-page.html";
}
}
