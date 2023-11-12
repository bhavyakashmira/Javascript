/*https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js */


const butt = document.querySelectorAll('.button')
const body  = document.querySelector('body')

butt.forEach((item)=>{
  item.addEventListener('click',function(e){
    body.style.backgroundColor = e.target.id
  //  if(e.target.id=='grey'){
  //    body.style.backgroundColor = e.target.id
  //  }
  //  if(e.target.id=='yellow'){
  //   body.style.backgroundColor = e.target.id
  // }
  // if(e.target.id=='blue'){
  //   body.style.backgroundColor = e.target.id
  // }
  // if(e.target.id=='white'){
  //   body.style.backgroundColor = e.target.id
  // }
  })
})