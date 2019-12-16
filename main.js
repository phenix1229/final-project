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
    "checkingBalance": 0,
    "savingsBalance": 0,
    "cActDate": [],
    "cActDesc": [],
    "cActAmt": [],
    "sActDate": [],
    "sActDesc": [],
    "sActAmt": [],
}


function setData (){
    if (!localStorage.length > 0){
        let dataStr = JSON.stringify(balanceData);
        localStorage.setItem("appData", dataStr);
    }
}

window.addEventListener('load', () => {
    setData();
    document.querySelector('#cAmount').innerText = `$${dataObj.checkingBalance}`;
    document.querySelector('#sAmount').innerText = `$${dataObj.savingsBalance}`;
});

let bdo = localStorage.getItem('appData');

let dataObj = JSON.parse(bdo);

function updateData (){
    let dataStr = JSON.stringify(dataObj);
    localStorage.setItem("appData", dataStr);
}