const form = document.querySelector("form")
const finalResult = document.querySelector(".result")
const correctAnswers = ["B", "B", "B", "B"]

form.addEventListener("submit", e => {
    e.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })

    scrollTo(0,100)

    finalResult.querySelector("span").textContent =`${score}%`
    finalResult.classList.remove("d-none")
})


// write on notebook about this function
// setTimeout(() => {
//     alert("2 segundos depois....")
// }, 2000)
