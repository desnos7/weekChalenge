// let body= document.querySelector('body')

// let Click=document.createElement('button')
// Click.className='click'
// Click.textContent='ADD DE'
// body.appendChild(Click)


// let container= document.querySelector('.container')


// let tableau=[]


// function create(){

// let numberTab=document.createElement('p')
// numberTab.className='number'
// numberTab.textContent='0'

// container.appendChild(numberTab)


// let remenber=document.querySelectorAll('p')

// remenber.forEach(element => {
  
//   element.addEventListener("click",()=>{

//     numberTab.textContent=Math.floor(Math.random()*6)+1;
//      tableau.push(numberTab.textContent);
//     let nombre= tableau.every((element)=>{
//       return !isNaN(parseInt(element))
//     })
//     console.log(nombre);
//     if(nombre){
//     for(let i=0; i<tableau.length; i++){

// alert(` le resultat de notre DE: ${sumWithInitial}`)

// }
let body= document.querySelector('body')

let Click=document.createElement('button')
Click.className='click'
Click.textContent='ADD DE'
body.appendChild(Click)

let somme=document.createElement('button')
somme.className='result'
somme.textContent='Resultat'
body.appendChild(somme)


let resolve=document.querySelector('.result')

  resolve.addEventListener('click',()=>{
    const sumWithInitial = tableau.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
let ok= alert(` la sommes des dé :${sumWithInitial}`)
tableau=[]
if(ok){


}

  })



let container= document.querySelector('.container')


let tableau=[]


function create(){

  if (container.children.length<5) {
    let numberTab=document.createElement('p')
numberTab.className='number'
numberTab.textContent='0'

container.appendChild(numberTab)
let numberT=document.querySelectorAll('p')


 numberT.forEach(element=>{
  element.addEventListener('click',()=>{
    numberTab.textContent=Math.floor(Math.random()*6)+1;
    
   tableau.push(parseInt(numberTab.textContent))
    console.log(tableau);
  
  })
  
 })
  }else{
  Click.disabled=true;
  }

}


Click.addEventListener("click",create)