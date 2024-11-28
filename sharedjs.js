function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textFieldValue = document.getElementById(id).innerText;
    const textFieldNumber = parseFloat(textFieldValue.replace(/,/g,''));
    return textFieldNumber;
}