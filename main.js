document.querySelector('#menu > h2').addEventListener('click', function(){
    const optionsDiv = document.querySelector('#menuOptions');
    if(optionsDiv.style.display === 'none'){
        optionsDiv.style.display = 'block';
    } else {
        optionsDiv.style.display = 'none';
    }
})

const today = () =>{
    return `${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`;
}

let balanceData = {
    "checkingBalance": '',
    "savingsBalance": '',
    "actDate": [],
    "actDesc": [],
    "actAmt": [],
}

const updateData = () => {
    let dataStr = JSON.stringify(balanceData);
    localStorage.setItem("appData", dataStr);
}