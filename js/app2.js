class Game {
    constructor() {
        this.gameQuestions = [ 
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

        this.idx = 0

        this.theQuestion = document.getElementById('theQuestion')
        this.question = ''
        this.answerA = ''
        this.answerB = ''
        this.answerC = ''
        this.answerD = ''
        this.correctAnswer = ''  

        this.playBtn = document.getElementById('playBtn')
        this.nextBtn = document.getElementById('nextBtn')

        this.answerAText = document.getElementById('answerAText')
        this.answerBText = document.getElementById('answerBText')    
        this.answerCText = document.getElementById('answerCText')    
        this.answerDText = document.getElementById('answerDText')
        this.answerText = document.querySelectorAll('.answer-text')
    }

    init() {
        this.getData()
    }

    startGame() {
        document.getElementById('section1').classList.add('d-none')
        document.getElementById('section2').classList.remove('d-none')
        document.getElementById('section3').classList.remove('d-none')
    }

    getData() {
        let idx = Math.floor(Math.random() * this.gameQuestions.length)

        let data = this.gameQuestions[idx]

        console.log(data)
        this.displayData(data)
    }

    displayData(data) {
        this.question = data.question
        this.answerA = data.a
        this.answerB = data.b 
        this.answerC = data.c 
        this.answerD = data.d

        this.theQuestion.innerText = this.question
        this.answerAText.innerText = this.answerA
        this.answerBText.innerText = this.answerB
        this.answerCText.innerText = this.answerC
        this.answerDText.innerText = this.answerD
    }

    
    //  ***************************************************

//  SELECT AN ANSWER.....


    // ****************************************************
    
}

const triviaGame = new Game() 

// triviaGame.init()

triviaGame.playBtn.addEventListener('click', ()=> {
    triviaGame.startGame()
    triviaGame.init()
})