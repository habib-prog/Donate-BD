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
    document.getElementById('balance-noakhali').innerText = balanceAfterDonating.toLocaleString('bn-bd');
    const newmainbalance = mainbalance - noakhaliInputAmount;
    document.getElementById('main-balance').innerText = newmainbalance.toLocaleString('bn-bd');
    document.getElementById('donate-noakhali-input').value = '';
    document.getElementById('my_modal_5').showModal();
    }

    // const noakhaliInputAmount = getInputValueById('donate-noakhali-input');
    // const noakhaliPresentBalanceIs = getTextFieldValueById('balance-noakhali');
    // const balanceAfterDonating = noakhaliInputAmount + noakhaliPresentBalanceIs;
    // noakhaliPresentBalanceIs.innerText = balanceAfterDonating.toLocaleString();
})

