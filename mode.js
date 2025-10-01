let trilho = document.getElementById('trilho');
let body = document.body
let card = document.querySelector('.card')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    card.classList.toggle('dark')
})