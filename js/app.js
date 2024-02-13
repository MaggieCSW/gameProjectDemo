
const gameQuestions = [ 
    {
        id:1,
        question:"What two countries were already involved in a military conflict before the beginning of World War II?",
        a:"Japan and China",
        b:"that is incorrect",
        c:"that is incorrect",
        d:"that is incorrect",
        answer:"a"
    },
    {
        id:2,
        question:"What was the code name for the Battle of Normandy?",
        a:"better luck next time",
        b:"better luck next time",
        c:"better luck next time",
        d:"Operation Overlord",
        answer:"d"
    },
    {
        id:3,
        question:"What was the first Nazi concentration camp?",
        a:"try again",
        b:"Dachau",
        c:"try again",
        d:"try again",
        answer:"b"
    },
    {
        id:4,
        question:"What was the last major battle of World War II?",
        a:"you'll get it next time",
        b:"you'll get it next time",
        c:"Battle of Okinawa",
        d:"you'll get it next time",
        answer:"c"
    },
    {
        id:5,
        question:"Where was the first atom bomb tested?",
        a:"New Mexico",
        b:"you're wrong",
        c:"you're wrong",
        d:"you're wrong",
        answer:"a"
    }

];



// var questions = Math.floor(Math.random(questions.length) * 5) + 1;


// console.log(questions);

// let quiz = ["this is question 1", "this is question 2", "this is question 3", "this is question 4", "this is question 5"]

// quiz.forEach((output) => {
//     console.log(output);
// });

// function output(item, index, array) {
//     console.log(index, item);
// }

//   OR =>     quiz.forEach(function(item, index, array) {
//              console.log(index, item);
//              });

const startGame = () => {
    // when start game is clicked:
    // display question & 4 answers
    // allow user to select 1 of the 4 answers
    // if answer is correct, display message that the answer is correct
    // if answer is incorrect, display message that the player in incorrect

    // if answer is correct, display message 
    console.log('clicked') 
};

const playBtn = document.getElementById('playBtn')




playBtn.addEventListener('click', ()=> {
    startGame();
});

// const section1 = document.getElementById("section1");
// const section2 = document.getElementById("section2");
// const section3 = document.getElementById("section3");
// const nextBtn = document.getElementById("nextBtn")


// when play is clicked, displays section2 and section 3, remove section 1

playBtn.addEventListener('click', ()=> {
    section1.classList.add('d-none')
    section2.classList.remove('d-none')
    section3.classList.remove('d-none')
});

// let index = Math.floor(Math.random() * gameQuestions.length);
// console.log(gameQuestions[index].question); // dont need these 2 lines

// get element by id, inner text

const theQuestion = document.getElementById('theQuestion');

// theQuestion.innerText = gameQuestions[index].question

// when play is clicked 
// use for each loop to push each id into question id's array
// array of id's
// randomizer for id's


//console.log(gameQuestions);



const questionIds = []

gameQuestions.forEach((question) => {
    questionIds.push(question.id)
})
questionIds.sort(() => Math.random() - 0.5)
console.log(questionIds);

// gameQuestions.forEach((item) => {
//     for (let i = 0; i < questionIds.length; i++){
//         console.log(questionIds[i], item.id)
//         // if (questionIds[i] == item.id) {
//         //     console.log(item.question)
//         // }

//     }
// })

for (let i = 0; i <questionIds.length; i++) {
    gameQuestions.forEach((item) => {
        if(item.id == questionIds[i]) {
            console.log(item.question)
        }
    })
}

// match question ids with their answer ids

// let player click on a, b, c, or d
// event listener???






// ANSWER
// if answer to question id 1 = a, display "correct!"
// if answer to question id 1 = b, display "try again"
// if answer to question id 1 = c, display "that is incorrect"
// if answer to question id 1 = d, display "better luck next time"


// let answer = a
//          if (questionIds == 1; ) {
//              statement
//          } else if (anotherCondition) {
//              statement
//          } else if (yetAnotherCondition) {
//              statement
//          } else {
//              statement
//          }


// if the condition is true, statement will be executed



// ??????????????????????????????????????????????????????????????????????????????

//  let questOne = "What two countries were already involved in a military conflict before the beginning of World War II?";
//  let answerOne = "Japan and China";

//        if (questOne == answerOne) {
//        } console.log("you are correct");  // ?????????????????????????????????????

//        if gameQuestions.question == gameQuestions.answer
