window.addEventListener('load', () => {
     const SOUNDS = document.querySelectorAll('.sound');
     const PADS = document.querySelectorAll('.pads div');
     const VISUAL = document.querySelector('.visual');
     const COLORS = [
         "lightsalmon",
         "lightgrey",
         "lightseagreen",
         "lightcyan",
         "lightblue",
         "lightyellow"
     ]
     console.log(SOUNDS[0]);

     PADS.forEach((pad, index) => {
         pad.addEventListener('click', () => {
             SOUNDS[index].currentTime = 0;
             SOUNDS[index].play();
             createBubles(index);
         })
     });

     const createBubles = (index) => {
        const buble = document.createElement('div');
        VISUAL.appendChild(buble);
        buble.style.backgroundColor = COLORS[index];
        buble.style.animation = 'jump 1s ease';
        buble.addEventListener('animationend', function () {
            VISUAL.removeChild(this);
        });
     };
     
     
})