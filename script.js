

//Random color generator.
function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let chosenColor = random_rgba();

//Generate a square grid with a prompt imput.
const mainScreen = document.querySelector('#screen');
let numberOfGrids = prompt('select grid') **2;
function gridGenerator(cycle){
    for (let index = 0; index < cycle; index++) {
        const newDiv =document.createElement('div');
        newDiv.className = 'pixel';
        newDiv.id ='id ' + index;
        mainScreen.appendChild(newDiv);
    
    }
}
//Calculate the number of 'autos' for the grid container.
let  gridValue = "";
function gridTemplateColumValue(){
    const cycle = Math.sqrt(numberOfGrids);
    for (let index = 0; index < cycle; index++) {
        gridValue += ['auto ']
}

//Set *grid-template-columns* css property.
let count = getComputedStyle(document.documentElement).getPropertyValue('--Template');
document.documentElement.style.setProperty('--Template',gridValue)
console.log(getComputedStyle(document.documentElement).getPropertyValue('--Template'));
return gridValue;
}



//Div will change color
function paintRandom(){
    chosenColor = random_rgba();
    let boxId =(this.id)
    document.getElementById(boxId).style.background = chosenColor;
    console.log(document.getElementById(boxId).style.background);
    console.log(this);
}
let paintMode = 'paintRandom';

function pixelInk(){
const gridPixels = document.querySelectorAll('.pixel');
console.log(gridPixels);
if (paintMode == 'paintRandom') {
gridPixels.forEach(gridPixels => {
gridPixels.addEventListener('mouseover', paintRandom );
});
}
//if
}
//To stop pen when mouse is up.
function stopPen(){
    const gridPixels = document.querySelectorAll('.pixel');
    gridPixels.forEach(gridPixels => {
        gridPixels.removeEventListener('mouseover',paintRandom);
    });
}


mainScreen.addEventListener('mousedown', pixelInk);
mainScreen.addEventListener('mouseup',stopPen)

gridGenerator(numberOfGrids);
gridTemplateColumValue();

let gridSliderValue = document.getElementById("gridslider").value;
console.log(gridSliderValue)