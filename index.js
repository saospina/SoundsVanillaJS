window.addEventListener('load', () => {
     const SOUNDS = document.querySelectorAll('.sound');
     const PADS = document.querySelectorAll('.pads div');
     console.log(SOUNDS[0]);

     PADS.forEach((pad, index) => {
         pad.addEventListener('click', () => {
             SOUNDS[index].play();
         })
     })
     
     
})