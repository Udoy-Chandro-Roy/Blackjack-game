
let firstCard = 6
let secondCard = 5

let sum = firstCard + secondCard

console.log(sum)

if(sum <= 21){
    console.log("Do you want to draw a new card")
}else if (sum === 21){
    console.log("Wooho!Youd've got the blackjace!")
}else if(sum > 21){
    console.log("You are out of the game!")
}


