const startButton = document.getElementById("start-btn")
const questionConatainerEl = document.getElementById("question-container")
let shuffledQustions,questionIndex
const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answer-buttons')
const nextButton = document.getElementById("next-btn")



startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    questionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    questionConatainerEl.classList.remove('hide')
    shuffledQustions = questions.sort(()=>Math.random() -0.5)
    questionIndex = 0
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQustions[questionIndex])

}
function showQuestion(question){
    questionEl.innerText = question.question 
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerEl.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild)
    }
}

function selectAnswer(e){
    selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerEl.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQustions.length > questionIndex + 1){
        nextButton.classList.remove('hide')
    } else{
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
    

}
function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'what is the best tech company in the world?',
        answers: [
            {text: 'Google', wrong: 'false'},
            {text: 'Amazon', wrong: 'false'},
            {text: 'Apple', wrong: 'false'},
            {text: 'Netflix', correct: 'true'}
        ]
    },

    {
        question: 'what is the greatest anime of all time?',
        answers: [
            {text: 'Naruto', wrong: 'false'},
            {text: 'Bleach', wrong: 'false'},
            {text: 'Demon Slayer', correct: 'true'},
            {text: 'One Piece', wrong: 'false'}

        ]
    },

    {
        question: 'who is the best footballer ever?',
        answers: [
            {text: 'C.Ronaldo', wrong: 'false'},
            {text: 'Messi', wrong: 'false'},
            {text: 'Pele', correct: 'true'},
            {text: 'Maradona', wrong: 'false'}
        ]
    },

    {
        question: 'what is best language?',
        answers: [
            {text: 'Kotlin', wrong: 'false'},
            {text: 'Go', wrong: 'false'},
            {text: 'Python', wrong: 'false'},
            {text: 'javascript', correct: 'true'}
        ]
    }
]