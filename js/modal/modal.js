let headerMenu = document.querySelector('#headerMenu')
let modal = document.querySelector('#modal')
let iconX = document.querySelector('#iconX')














headerMenu.addEventListener('click', () => {
    modal.classList.add('modalOpen')
})



iconX.addEventListener('click', () => {
    modal.classList.remove('modalOpen')
});