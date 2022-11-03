const form = document.querySelector("form")
const finalResult = document.querySelector(".result")
const correctAnswers = ["B", "B", "B", "A"]

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

    //retorna a pagina pra cima automaticamente quando o evento submit for ativado
    scrollTo(0,0)

    finalResult.classList.remove("d-none")
    
    let counter = 0
    // repete a funcao de X em X segundos
    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }
        finalResult.querySelector("span").textContent =`${counter}%`
        counter++   
    }, 10)
})










// funcao que deve ser invoca depois de X segundos
// write on notebook about this function
// setTimeout(() => {
//     alert("2 segundos depois....")
// }, 2000)
