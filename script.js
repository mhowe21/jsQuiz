const questions = [{
        Type: "True/False",
        Question: "Javascript and Java are the same language",
        anwsers: [{
                text: "False",
                correct: true
            },
            {
                text: "True",
                correct: false
            }
        ]

    },
    {
        Type: "MultipleChoice",
        Question: "How would one declare a function in Javascript",
        Correct: "function name(){code}",
        anwsers: [{
                text: "function name(){code}",
                correct: true
            },
            {
                text: "function.name.{code}",
                correct: false
            },
            {
                text: "function:name{code}",
                correct: false

            }
        ]
    },
    {
        Type: "MultipleChoice",
        Question: "Which of the following is NOT a primitive data type",
        anwsers: [{
                text: "String",
                correct: false
            },
            {
                text: "Number",
                correct: false
            },
            {
                text: "Hash",
                correct: true
            },
            {
                text: "Boolean",
                correct: false
            }
        ]

    }


]

var time = 2000
let questionIndex = 0
body = document.body


document.getElementById("start-btn").addEventListener("click", function () {
    //start the timer after clicking start. 
    timer()
    document.getElementById("start-btn").classList.add("hide")
    document.getElementById("next-btn").classList.remove("hide")
    displayQuestion(questionIndex)
    questionIndex = questionIndex + 1

})

document.getElementById("next-btn").addEventListener("click", function () {
    console.log(questionIndex)
    displayQuestion(questionIndex)
    questionIndex = questionIndex + 1
})


// timer function 
function timer() {
    //let time = 10
    let timerNumber = document.getElementById("timer-number")
    timerNumber.innerText = (time)

    //countdown
    let runTimer = setInterval(countdown, 1000)


    function countdown() {

        time = time - 1
        //console.log(time)
        timerNumber.innerText = time



        if (time == 0) {
            clearInterval(runTimer)
            timerNumber.innerText = "Times-Up!"
        }

    }

}





function displayQuestion(index) {

    // add question test
    let textContainer = document.getElementById("question-text")
    textContainer.innerText = questions[index].Question

    //console.log(question)

    // add question items
    let anwsersButtons = document.getElementById("anwsers")

    questions[index].anwsers.forEach(anwser => {
        const button = document.createElement("button")
        button.innerText = anwser.text
        if (anwser.correct) {
            button.dataset.correct = anwser.correct
        }
        button.addEventListener("click", choseAnwser)
        anwsersButtons.append(button)
    });
}

function choseAnwser(e) {

}