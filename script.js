//Generate a square grid with a prompt imput.
const mainScreen = document.querySelector('#screen');
let numberOfGrids = prompt('select grid') **2;
function gridGenerator(cycle){
    for (let index = 0; index < cycle; index++) {
        const newDiv =document.createElement('div');
        newDiv.className = 'pixel';
        mainScreen.appendChild(newDiv);
    
    }
}
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

gridGenerator(numberOfGrids);
gridTemplateColumValue();

