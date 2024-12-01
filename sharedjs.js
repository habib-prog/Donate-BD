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

function showHiddenSections(id){
    document.getElementById('h-section').classList.add('hidden');
    document.getElementById('d-part').classList.add('hidden');
    document.getElementById('blog-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// History Reusable Function
function addToHistory(donationType, amount){
    const historyContainer = document.getElementById('h-container');
    const historycard = document.createElement('div');
    historycard.className = "bg-slate-50 shadow-md rounded-lg p-4";

    const donationinfo = document.createElement('p');
    donationinfo.className = "sm:text-lg sm:font-semibold text-base";
    donationinfo.textContent = `You donated for ${donationType} ${amount.toLocaleString()} BDT`;

    const timestamp = document.createElement('span');
    timestamp.className = "text-sm text-gray-500";
    const now = new Date();
    timestamp.textContent = `Date: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`

    historycard.appendChild(donationinfo);
    historycard.appendChild(timestamp);

    historyContainer.appendChild(historycard);

}
function showHiddenSection(id){
    document.getElementById('h-btn').classList.remove('bg-green-300', 'hover:bg-green-300');
    document.getElementById('d-btn').classList.remove('bg-green-300','hover:bg-green-300');
    document.getElementById('blog-btn').classList.remove('bg-green-300','hover:bg-green-300');
    document.getElementById(id).classList.add('bg-green-300','hover:bg-green-300');
    
}