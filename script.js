const mainScreen = document.querySelector('#screen')
const content =document.createElement('div');


let numberOfGrids = prompt('select grid') **2

function gridGenerator(cycle){
    for (let index = 0; index <= cycle; index++) {
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
return gridValue;
}
//grid-template-columns has to be (auto )
gridGenerator(numberOfGrids);
gridTemplateColumValue();
