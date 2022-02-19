//Useful functions
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let color = random_rgba();

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

//Set gameModes ----
let gameMode = 'normal' //Default game mode.
function paintFunction(){
    if (gameMode == 'normal'){
        const divId = this.id;
        document.getElementById(divId).style.background = document.querySelector('#ColorSlider').value;
    }
    if (gameMode == 'rainbow'){
            const divId = this.id
            let divColor = random_rgba();
            document.getElementById(divId).style.background = divColor;
        }
    if (gameMode == 'erase'){
        const divId = this.id
        document.getElementById(divId).style.background ='cornsilk'
    }
}






//Normalmode
const normalMode=document.querySelector('#Normal');
normalMode.addEventListener('click', () =>{
    gameMode = 'normal';
    currentMode.textContent = 'Mode : '+gameMode;
    document.querySelector('#ColorSlider').value = '#000000';
});

//Rainbowmode
const rainbowMod = document.querySelector('#Rainbow');
rainbowMod.addEventListener('click',() =>{
    gameMode = 'rainbow';
    currentMode.textContent = 'Mode : '+gameMode;
});

//Choose mode.
    const colorSliderValue = document.querySelector('#ColorSlider').value
    const colorSlider = document.querySelector('#ColorSlider')

    // Erase mode
    const eraseMode = document.querySelector('#Erase')
    eraseMode.addEventListener('click',() =>{
        gameMode = 'erase';
        currentMode.textContent = 'Mode : '+gameMode;
        document.querySelector('#ColorSlider').value = '#fff8dc';
    });
    //Display current mode.
const currentMode = document.querySelector('#displaymode');


//Paint only on mousedown
mainScreen.addEventListener('mousedown',() =>{
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixels => {
        pixels.addEventListener('mouseover',paintFunction);
    });
});


function stopPainting(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixels => {
        pixels.removeEventListener('mouseover',paintFunction);
    });
}
mainScreen.addEventListener('mouseup',stopPainting);
