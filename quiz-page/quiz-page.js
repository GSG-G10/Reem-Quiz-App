//  Variables
let questionContent=document.getElementById('question')
let Answer1=document.getElementById('Answer1')
let Answer2=document.getElementById('Answer2')
let Answer3=document.getElementById('Answer3')
let Answer4=document.getElementById('Answer4')
let nextBtn=document.getElementById('next')
let backbtn=document.getElementById('backbtn')
let article=document.getElementById('question-side')
var choice = document.getElementsByName('answer');
let score=0
//Action for next button
nextBtn.addEventListener('click',nextQuestion)
backbtn.addEventListener('click',backToHome)
function backToHome(){
  window.location.href="../index.html";
}

// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 0,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 1,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 2,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 3,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 4,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
//**************************************Question end********************************
let selectedChoice
//============gitRadioValue================
function gitRadioValue() { 
  for(j = 0; j< 4; j++) {  
   if(choice[j].type="radio") {
    if(choice[j].checked){
    // console.log (choice[i].name + " Value: "+ choice[i].value + "<br>");
     selectedChoice=choice[j].value
     console.log(selectedChoice)
    }
      }
  }
}
//============= calculateScore =============
function calculateScore(i ,selectedChoice){
  if(selectedChoice===questions[i-1].answer){
    score+=1;
    console.log(score)
  }
}
// =========== nextQuestion btn ===========
var i =1;
let playerName
function nextQuestion(){
  gitRadioValue()
  calculateScore(i ,selectedChoice)

        if(i<5){
        if(questions[i].numb==i){
        questionContent.innerText=questions[i].question
       
        //To change labels Answer
        Answer1.innerText=questions[i].options[0]
        Answer2.innerText=questions[i].options[1]
        Answer3.innerText=questions[i].options[2]
        Answer4.innerText=questions[i].options[3]
        //To change Radio buttons values 
        choice[0].value=questions[i].options[0]
        choice[0].checked=false
        choice[1].value=questions[i].options[1]
        choice[1].checked=false
        choice[2].value=questions[i].options[2]
        choice[2].checked=false
        choice[3].value=questions[i].options[3]
        choice[3].checked=false

        ++i;
        }

       }
      else { // For final score when quiz end 
         playerName=sessionStorage.getItem("name"); //get name from session sorage
         article.innerText=`   ${playerName}      :     ${score} / 5 ` 
         nextBtn.classList.add("hide");
         article.classList.add("scoreStyle");
         backbtn.classList.add("unhide");
         addNameToLocalSorage()
         getDataFromLocalSorage()
      }

    }
// Edit score in local


let dataArray = [];         // Array to push new data

function addNameToLocalSorage(){
// let playerName=sessionStorage.getItem("name");
const dataObject = {
    name: playerName,
    score:score 
}
/* If there is data saved already in local storage, add the new data to old data*/
let oldData = JSON.parse(localStorage.getItem("data"));

if((oldData !== null)){
    oldData.push(dataObject);
    localStorage.setItem("data", JSON.stringify(oldData))
   
} else{     /* If local storage is empty, Push new data to the empty array */
    dataArray.push(dataObject)  //Push object of data to the array
    /* set stringified data in local storage */
    localStorage.setItem('data', JSON.stringify(dataArray))
}

}
// ******************GIT DATA FROM LOCAL STORAGE*************************
function getDataFromLocalSorage(){
  let dataFromLocal = JSON.parse(localStorage.getItem("data"));
  console.log(dataFromLocal)
  for(var z=dataFromLocal.length-2;z>0;--z){
    article.innerText+='\n'
    article.innerText+=`${dataFromLocal[z].name}    :     ${dataFromLocal[z].score} /5`
  }

}
