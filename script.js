


const applyButton = document.getElementById('apply');
applyButton.addEventListener('click', () =>{
    gridTemplateValue();
});




let sizeSliderValue;
function gridTemplateValue(){
    let sizeSliderValue = document.getElementById('gridslider').value;
    console.log( 'slider value is '+sizeSliderValue);
}
