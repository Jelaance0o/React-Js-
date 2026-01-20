// var root  = ReactDOM.createRoot(document.querySelector("#container")) //* Selecting a div as a root */

// var h1 = React.createElement('h1',{id:'hero'},"This is h1")
// var h2 = React.createElement('h2',{id:'hero'},"This is h2")
// var div = React.createElement('div',null,[h1,h2])

// root.render(div)
 
// root.render(h1())   //render means - uske andar kya chalana hai

var root = ReactDOM.createRoot(document.querySelector('#container'))   //function call from import 

// import alu from './app.js'
// root.render(alu())


// var h1 = document.createElement('h1')
// h1.innerHTML = "Hello Guyss"
// document.body.appendChild(h1)



import sec from './app.js'
root.render(sec())


// Library.
// - GSAP (Moving Animations)
// - Lenis (Scrolling Smoothness)
// - Swiper (sliders)
// - three (3Ds)