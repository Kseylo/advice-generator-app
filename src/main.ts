interface Data {
    slip: {
        id: number
        advice: string
    }
}
function fetchData() {
    fetch('https://api.adviceslip.com/advice').then((response) => {
        if (response.status !== 200) {
            alert('Looks like there was a problem.')
        }
        response.json().then((data) => populateAdvice(data))
    })
}

function populateAdvice(data: Data) {
    const {
        slip: { id, advice },
    } = data
    const adviceHeader = document.querySelector('p')
    const adviceContent = document.querySelector('q')
    adviceHeader!.textContent = `Advice #${id}`
    adviceContent!.textContent = advice

    const main = document.querySelector('main')
    main!.classList.remove('hidden')
}

window.addEventListener('load', fetchData)
document.querySelector('button')!.addEventListener('click', fetchData)
