let inputValue = ''
let listItems = []

let input = document.getElementById('input')
let button = document.querySelector('.button')

const handleChange = (event) => {
    inputValue = event.target.value
}

const handleSubmit = () => {
    listItems.push(inputValue)
    localStorage.setItem('todos', JSON.stringify(listItems))
    renderList()
    input.value = ''
    inputValue = ''
}

const renderList = () => {
    let todos = JSON.parse(localStorage.getItem('todos'))
    let list = document.querySelector('.list')
    list.innerHTML = ''
}

input.addEventListener('input', handleChange)
button.addEventListener('click', handleSubmit)