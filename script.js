

//Random color generator.
let ranColor ='';
function randomColor(){
    ranColor = Math.floor(Math.random()*16777215).toString(16);
    return ranColor;
}


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
function paintFunction(){
    randomColor();
    this.classList.add('normalModeOn')
    console.log(this);
}

function pixelInk(){
const gridPixels = document.querySelectorAll('.pixel');
console.log(gridPixels);
gridPixels.forEach(gridPixels => {
gridPixels.addEventListener('mouseover', paintFunction );
});
}
//To stop pen when mouse is up.
function stopPen(){
    const gridPixels = document.querySelectorAll('.pixel');
    gridPixels.forEach(gridPixels => {
        gridPixels.removeEventListener('mouseover',paintFunction);
    });
}


mainScreen.addEventListener('mousedown', pixelInk);
mainScreen.addEventListener('mouseup',stopPen)

gridGenerator(numberOfGrids);
gridTemplateColumValue();

