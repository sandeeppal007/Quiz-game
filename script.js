const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.getElementsByName("answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text =  document.getElementById("c_text");;
const d_text =  document.getElementById("d_text");;
const submitBtn =  document.getElementById("submit");
const scoreAns = document.querySelector(".score")
const refresh = document.getElementById("refresh")

let currentQuiz = 0
let score = 0

let i =0;


loadQuiz();

    function loadQuiz() {
  
        questionEl.innerText = quizData[i].question;
        a_text.innerText = quizData[i].a;
        b_text.innerText = quizData[i].b;
        c_text.innerText = quizData[i].c;
        d_text.innerText = quizData[i].d;
    

    }

let selectedTag;
function deselectAnswers() {
//   console.log(selectedTag);
  selectedTag.checked=false;
}

let selected;


function getSelected() {
for(let x of answerEls ){
    if(x.checked == true){
      selectedTag = x;
      selected = x.id;

    }


    
}

return selected;
}


submitBtn.addEventListener("click",()=>{
  const checked = getSelected();
  console.log(checked);

if(selected == quizData[i].correct){
    
    console.log("right")
    score++;

}else{
    console.log("false")
}
 


 i++;
 deselectAnswers(); 
 if(i<quizData.length){
    loadQuiz();
 } else{

   scoreAns.innerText = score;
   quiz.style.backgroundColor ="green";

 } 
 


});



refresh.addEventListener("click",()=>{
    window.location.reload();
});