let span = document.querySelector(".span");
let boxer=document.querySelector(".boxer")
span.onclick=function(){
boxer.classList.toggle("open")
}
// Our Fut
// let balckes = document.querySelector(".balckes");
// let backvisable = document.querySelector(".backvisable");
// balckes.onclick=function(){
//    backvisable.classList.toggle("open")
// }
// console.log(balckes)
let show = document.querySelectorAll(".show ul li");
show.forEach(li=>{
li.addEventListener("click",function(){
   document.querySelector(li.getAttribute("data-href")).scrollIntoView({
behavior:"smooth"
})
})
})
