
const gameQuestions = [ 
    {
        id:1,
        question:"What two countries were already involved in a military conflict before the beginning of World War II?",
        a:"Japan and China",
        b:"Korea and China",
        c:"Japan and Korea",
        d:"Russia and China",
        answer:"Japan and China"
    },
    {
        id:2,
        question:"What was the code name for the Battle of Normandy?",
        a:"Operation Spring Awakening",
        b:"Operation Fortitude",
        c:"Operation Barbarossa",
        d:"Operation Overlord",
        answer:"Operation Overlord"
    },
    {
        id:3,
        question:"What was the first Nazi concentration camp?",
        a:"Gross-Rosen",
        b:"Dachau",
        c:"Auschwitz",
        d:"Hinzert",
        answer:"Dachau"
    },
    {
        id:4,
        question:"What was the last major battle of World War II?",
        a:"Battle of the Bulge",
        b:"Battle of Stalingrad",
        c:"Battle of Okinawa",
        d:"Battle of the Atlantic",
        answer:"Battle of Okinawa"
    },
    {
        id:5,
        question:"Where was the first atom bomb tested?",
        a:"New Mexico",
        b:"California",
        c:"Arizona",
        d:"Texas",
        answer:"New Mexico"
    }

];

    // when start game is clicked:
    // display question & 4 answers
    // allow user to select 1 of the 4 answers
    // if answer is correct, display message that the answer is correct
    // if answer is incorrect, display message that the player in incorrect



const startGame = () => { 
    console.log('clicked') 
};

const playBtn = document.getElementById('playBtn')




playBtn.addEventListener('click', ()=> {
    startGame();
});


// when play is clicked, displays section2 and section 3, remove section 1

playBtn.addEventListener('click', ()=> {
    section1.classList.add('d-none')
    section2.classList.remove('d-none')
    section3.classList.remove('d-none')
});


// get element by id, inner text


// ******************************* RANDOMIZE QUESTIONS *****************************************

let idx


const theQuestion = document.getElementById('theQuestion');

const displayQuestion =()=> {

    idx = Math.floor(Math.random() * gameQuestions.length)
    const question = gameQuestions[idx].question
    const answerA = gameQuestions[idx].a
    const answerB = gameQuestions[idx].b
    const answerC = gameQuestions[idx].c
    const answerD = gameQuestions[idx].d
    const correctAnswer = gameQuestions[idx].answer

    document.getElementById('answerAText').innerText = answerA
    document.getElementById('answerBText').innerText = answerB
    document.getElementById('answerCText').innerText = answerC
    document.getElementById('answerDText').innerText = answerD


    console.log(question)

    theQuestion.innerText = question   

}

displayQuestion();


// next button
const nextBtn = document.getElementById('nextBtn')

nextBtn.addEventListener('click', ()=> displayQuestion())

const selectAnswer =()=> {
    let selectedAnswer
    const answerText = document.querySelectorAll('.answer-text')
    // console.log(answerText)

    answerText.forEach(answer => {
        answer.addEventListener('click', ()=> {
            selectedAnswer = answer.innerText
            console.log(selectedAnswer)
        })
    })

}

selectAnswer()


const testAnswers =(selected, correct)=> {
    if (selected === correct) {
        console.log('correct')
    } else {
        console.log('incorrect')
    }
}




//*************************** MATCH CORRECT ANSWER WITH THE QUESTION *****************************

// let matchingAnswer = gameQuestions.filter( (obj) => {
//     if(obj.question == obj.answer){
//         return true;
//     } else 
//     return false;
    
// })

// console.log(matchingAnswer)




// ***********************************************************************************************

// theQuestion.innerText = gameQuestions[index].question

// when play is clicked 
// use for each loop to push each id into question id's array
// array of id's
// randomizer for id's


//console.log(gameQuestions);

// ******************************** what i worked on w/Lorraine ***********************************

// const questionIds = []

// gameQuestions.forEach((question) => {
//     questionIds.push(question.id)
// })
// questionIds.sort(() => Math.random() - 0.5)


// console.log(questionIds);



// ****** This is the one w/Lorraine that i used *****

// for (let i = 0; i <questionIds.length; i++) {
//     gameQuestions.forEach((item) => {
//         if(item.id == questionIds[i]) {
//             console.log(item.question)
//         }
//     })
// }


//***********************************************************************************************




// let answerBoxA = document.getElementById("answerBoxA");
// let answerBoxB = document.getElementById("answerBoxB");
// let answerBoxC = document.getElementById("answerBoxC");
// let answerBoxD = document.getElementById("answerBoxD");

// answerBoxA.addEventListener("click", aAnswer);

// function aAnswer(){
//     console.log(answerBoxA);

// }


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
