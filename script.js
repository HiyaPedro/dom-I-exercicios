const frutas = ["laranja", "limão", "uva"]

// const firstFruta = () => {
//     let fOne = frutas.slice(0, 1)
//     return fOne
// }
// const result = firstFruta()
// console.log(result)

//  let liItem = document.getElementById("fruta-1");
//  liItem.innerHTML += result
//  const firstFruits = () => {
    for (let i = 0; i < frutas.length; i++) {
        document.getElementById(`fruta-${i+1}`).innerHTML += frutas[i]         
    }
// }
// const result = firstFruits()
// console.log(result)

/*-----EXERCICIO 1-----*/
// let liItem1 = document.getElementById("fruta-1");
// liItem1.innerHTML += frutas[0]
// let liItem2 = document.getElementById("fruta-2");
// liItem2.innerHTML += frutas[1]
// let liItem3 = document.getElementById("fruta-3");
// liItem3.innerHTML += frutas[2]

/*-----EXERCICIO 2-----*/
/*(1) insert onkeyup="" in html markup for the input field*/
/*(2) write a function in Js*/
let fruitName = document.getElementById("fruitName")
const getInput = () => {
     console.log(fruitName.value)
}
/*(3) insert function name into onkeyup="" in html markup*/

/*-----EXERCICIO 3-----*/
/*Create a function that causes the input value to be added to the list of fruits in exercise 1.
Create a button and use an `onclick` event on the created button, so that, when clicking on the button, the input value from exercise 2 is added to the list.*/

const onClickFruit =() => {
   document.getElementById("fruta-4").innerHTML = fruitName.value
   fruitName.value=""
}
