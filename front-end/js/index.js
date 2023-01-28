// let svg = document.querySelector('svg');
// let startX = 0;
// let startY = 0;
// let distX = 0;
// let distY = 0;
// let isDown = false;

// svg.addEventListener('mousedown', function(event) {
//   isDown = true;
//   startX = event.clientX;
//   startY = event.clientY;
// });

// svg.addEventListener('mouseup', function() {
//   isDown = false;
// });

// svg.addEventListener('mousemove', function(event) {
//   if (isDown) {
//     distX = event.clientX - startX;
//     distY = event.clientY - startY;
//     svg.style.transform = `translate(${distX}px, ${distY}px)`;
//   }
// });

const owner=document.querySelector('.active');
const rented=document.querySelector('.rented');


rented.addEventListener('click',(e)=>{
    owner.setAttribute('class','active');
    
})
owner.addEventListener('click',(e)=>{
    if(e.target.class==='close'){
        owner.setAttribute('class','owner');

    }
    
})