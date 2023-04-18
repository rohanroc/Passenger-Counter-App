let counter = document.getElementById("counter-var")
let saveEl = document.getElementById("entries-el")
let count = 0
console.log(saveEl)

// function for increment by one 
function increment() {
    count = count + 1
    counter.innerText = count
}

// function for save the value 

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    counter.innerText = count
}
