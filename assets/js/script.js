const QUESTION = [{"question": "Who is Harrys best friends",  "answer1" : "Hermonie and Ron","answer2": "Malfoy and Neville", "correct": "Hermonie and Ron"}, {"question": "Who is ther principal of Hogwarts?",  "answer1" : "Snape", "answer2": "Dumbeldore", "correct":"Dumbeldore"}]

/*Questioncount*/
let currentQuestion = 0;
let correctQuestion = 0;




/*counts correctquestions*
*got element for starbutton,answersbuttons and submitbutton*/


let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let submit = document.getElementById("submit");
let questionarea = document.getElementById('question-area')

/*calling events when clicked on*
*The first one calls the displayquestionfucntion etc...*/

answer1.addEventListener('click', selectedAnswer);
answer2.addEventListener('click', selectedAnswer);


/*Here are the questions shown*/
function displayNextQuestion() {
  let q = QUESTION[currentQuestion];
  document.getElementById("question-area").classList.remove('hide')
   document.getElementById("question").innerText = q.question;
   document.getElementById("answer1").innerText = q.answer1;
   document.getElementById("answer2").innerText = q.answer2;
   
   
  } 

/*submitbutton apears when user choose an answer*/
function selectedAnswer(Event) {
  
  selectedAnswer = Event.currentTarget.innerText
   /*This code for my scoreboard is from the Love-math project
 For every right answer the scorepoint rises*/
  let q = QUESTION[currentQuestion];
  if (selectedAnswer === q.correct) 
    
  
   { let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    correctQuestion ++;
  }
  currentQuestion++;
  
  if (currentQuestion < QUESTION.length ) {
    displayNextQuestion()
    } else {
    alert("you've got " + correctQuestion)
    }
}

displayNextQuestion()
