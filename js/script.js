let dice = document.querySelectorAll('.dice_item')
let dicePoint = document.querySelectorAll('.dice_point')
const btnDice = document.querySelector('.throw_dice')

btnDice.addEventListener("click", event => {
	dice[0].classList.toggle('dice_item')
	dicePoint[0].classList.toggle('dice_point')
	let k = null
	k = Math.trunc((Math.random() * 6))
})