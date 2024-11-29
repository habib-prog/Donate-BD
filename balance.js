// Balance Function for Noakhali
document.getElementById('noakhali-submit').addEventListener('click', function (event){
    event.preventDefault();

    const noakhaliInputAmount = getInputValueById('donate-noakhali-input');
    const mainbalance = getTextFieldValueById('main-balance');

    if(isNaN(noakhaliInputAmount)){
         alert('Only numbers are allowed!');
    }
    else if(noakhaliInputAmount > mainbalance){
         alert('Do not have sufficient Balance!');
    }
    else if(noakhaliInputAmount <= 0){
        alert("Negative numbers aren't allowed!");
    }
    else{
    
    const noakhaliPresentBalanceIs = getTextFieldValueById('balance-noakhali');
    const balanceAfterDonating = noakhaliInputAmount + noakhaliPresentBalanceIs;
    document.getElementById('balance-noakhali').innerText = balanceAfterDonating.toLocaleString();
    const newmainbalance = mainbalance - noakhaliInputAmount;
    document.getElementById('main-balance').innerText = newmainbalance.toLocaleString();
    document.getElementById('donate-noakhali-input').value = '';
    document.getElementById('my_modal_5').showModal();
    }

    // const noakhaliInputAmount = getInputValueById('donate-noakhali-input');
    // const noakhaliPresentBalanceIs = getTextFieldValueById('balance-noakhali');
    // const balanceAfterDonating = noakhaliInputAmount + noakhaliPresentBalanceIs;
    // noakhaliPresentBalanceIs.innerText = balanceAfterDonating.toLocaleString();
});

document.getElementById('fenni-button').addEventListener('click', function (event){
    event.preventDefault();

    const fenniInputAmount = getInputValueById('fenni-input');
    const fenniMainBalance = getTextFieldValueById('main-balance');

    if(isNaN(fenniInputAmount)){
        alert('Only numbers are allowed!');
    }
    else if(fenniInputAmount > fenniMainBalance){
        alert('Do not have sufficient Balance!');
    }
    else if(fenniInputAmount <= 0){
        alert('Negative or zero value are not allowed');
    }
    else{
        const fenniCurrentBalance = getTextFieldValueById('fenni-balance');
        const newBalance = fenniInputAmount + fenniCurrentBalance;
        document.getElementById('fenni-balance').innerText = newBalance.toLocaleString();

        const newMainBalances = fenniMainBalance - fenniInputAmount;
        document.getElementById('main-balance').innerText = newMainBalances.toLocaleString();
        
        document.getElementById('fenni-input').value = '';

        document.getElementById('my_modal_6').showModal();

    }
})

document.getElementById('med-button').addEventListener('click', function (event){
    event.preventDefault();

    const medinput = getInputValueById('med-input');
    const medmain = getTextFieldValueById('main-balance');

    // Condition Check
    if(isNaN(medinput)){
        alert('Only numbers are allowed!');
    }
    else if(medinput > medmain){
        alert('Do not have sufficient balance!');
    }
    else if(medinput <=0){
        alert('Negative or zero value is not allowed!');
    }
    else {

        const medCurrentBalance = getTextFieldValueById('medicine-balance');
        const medNewBalance = medCurrentBalance + medinput;
        document.getElementById('medicine-balance').innerText = medNewBalance.toLocaleString();

        const mainaccDecreasedBalance = medmain - medinput;
        document.getElementById('main-balance').innerText = mainaccDecreasedBalance.toLocaleString();

        document.getElementById('med-input').value = '';

        document.getElementById('my_modal_7').showModal();
 }


})



