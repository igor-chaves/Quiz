const form = document.querySelector("form")
const paragraphScore = document.querySelector("p")
const quizAnswers = ["A", "B"]


form.addEventListener("submit", e => {
    e.preventDefault()
    
    userAnswers = [
        form.question1.value,
        form.question2.value,
    ]
    
    let score = 0
    userAnswers.forEach((answer, index) => {
        if (answer === quizAnswers[index]) {
            console.log(`Answer ${index + 1} correct!`)
            score += 50
            return
        }
        console.log(`Answer ${index + 1} wrong!`)
    })
    console.log(score)
    paragraphScore.textContent = `You got ${score}% on this quiz`
})
