//Useful functions
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//Set grid column number.
function gridTemplateValue(){
    let templateValue = '';
    let sizeSliderValue = document.getElementById('gridslider').value;
    console.log( 'slider value is '+sizeSliderValue);
        for (let i = 0; i < sizeSliderValue; i++) {
        templateValue += 'auto '
        
    }
    document.documentElement.style.setProperty('--Template',templateValue);
    console.log(templateValue);
}
//Generate grid.
const mainScreen = document.querySelector('#screen');
function genGrid(){
    let gridArea = document.getElementById('gridslider').value**2
    console.log(gridArea);
    //Delete if there are divs already.
    removeAllChildNodes(mainScreen);
    //Create new divs.
    for (let index = 0; index < gridArea; index++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'pixel';
        newDiv.id ='id' + index;
        mainScreen.appendChild(newDiv);
        
    }
}
//Size slider value display.
function displayGridSize(){
    const sizeDiv = document.querySelector('#sizediv');
    let sizeSliderValue = document.getElementById('gridslider').value;
    sizeDiv.textContent = 'Size : ' + sizeSliderValue + " X " + sizeSliderValue;
}
//EVENTS -----
//Reset button.
const resetButton = document.querySelector('#Reset');
resetButton.addEventListener('click', () =>{
    removeAllChildNodes(mainScreen);
    console.log("REMOOVE")
});
//Apply button, grid generator.
const applyButton = document.getElementById('apply');
applyButton.addEventListener('click', () =>{
    gridTemplateValue();
    genGrid();
});
//Size slider value display.
const gridSlider = document.querySelector('#gridslider');
gridSlider.addEventListener('input',displayGridSize)