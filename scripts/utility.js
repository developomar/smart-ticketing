//get element text
function getElementTextByID (elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const valueText = parseInt(elementValueText);
    return valueText;
}

// get string text
function getElementStringTextByID (elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const valueText = elementValueText
    return valueText;
}

//get input value
function getElementInputValueByID (elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.value;
    const valueText = elementValueText
    return valueText;
}

//set element text
function setElementTextByID (elementID, value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}



// add bg color
function addBackgroundAndTextColorByID (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]', 'text-[#FFF]');
}

// remove bg color
function removeBackgroundColorByID (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#F7F8F8]')
}