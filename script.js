var questions = [{
        Type: "True/False",
        Question: "Javascript and Java are the same language",
        Correct: "False",
        Incorrect: "True"
    },
    {
        Type: "MultipleChoice",
        Question: "How would one declare a function in Javascript",
        Correct: "function name(){code}",
        Incorrect: "function.name.{code}",
        Incorrect: "function:name{code}"
    },
    {
        Type: "MultipleSelect",
        Question: "Selct all the primitive data types",
        Correct: "String",
        Correct: "Number",
        Correct: "boolean",

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
    let question = document.getElementById("question-text").innerText = questions[index]["Question"]
    document.getElementById("question-text-wrapper").classList.remove("hide")
    //console.log(question)

    // add question items
    questionType = questions[index]["Type"]
    console.log(questionType)

    if (questionType == "True/False") {
        trueFalse(questions[index])
    } else if (questionType == "MultipleChoice") {
        multipleChoice(question[index])
    } else if (questionType == "MultipleSelect") {
        MultiplesSelect(question[index])
    }



}

function trueFalse(question) {
    console.log("true false function")
    let questionWrapper = document.getElementById("quiz-content-questions-wrapper")
    // add question holder that we can remove from the parent during the next question
    let questionHolder = document.createElement("div")
    questionWrapper.appendChild(questionHolder)

    // add true false question
    // add true   
    let questionTrue = document.createElement("input")
    questionTrue.setAttribute("type", "radio")
    questionTrue.setAttribute("name", "TF")
    questionTrue.setAttribute("id", "True")
    questionTrue.setAttribute("value", "true")
    questionHolder.appendChild(questionTrue)
    trueLabel = document.createElement("label")
    trueLabel.setAttribute("for", "True")
    questionHolder.append(trueLabel)
    trueLabel.innerText = "True"

    //add false
    let questionFalse = document.createElement("input")
    questionFalse.setAttribute("type", "radio")
    questionFalse.setAttribute("name", "TF")
    questionFalse.setAttribute("id", "False")
    questionFalse.setAttribute("value", "false")
    questionHolder.appendChild(questionFalse)
    trueLabel = document.createElement("label")
    trueLabel.setAttribute("for", "False")
    questionHolder.append(trueLabel)
    trueLabel.innerText = "False"

    // get status on change. 
    var radios = document.querySelectorAll('[name="TF"]');

    function changeHandler(event) {
        if (this.value === 'true') {
            console.log('value', 'true');
        } else if (this.value === 'false') {
            console.log('value', 'false');
        }
    }

    Array.prototype.forEach.call(radios, function (radio) {
        radio.addEventListener('change', changeHandler);
    });




}

function multipleChoice(question) {
    console.log("multiple Choice Function")

}

function MultiplesSelect(question) {
    console.log("multiple select function")
}