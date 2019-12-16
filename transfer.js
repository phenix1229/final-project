let bdo = localStorage.getItem('appData');

let dataObj = JSON.parse(bdo);

const transAmount = document.querySelector('#transAmount');

const transFrom = document.querySelector('#transFrom');

const transTo = document.querySelector('#transTo');

const tfVal = () => {
    if(transFrom.value === '1'){
        return 'checking';
    } else {
        return 'savings';
    }
}

const ttVal = () => {
    if(transTo.value === '1'){
        return 'checking';
    } else {
        return 'savings';
    }
}

const calcBalAfterTrans = () => {
    if (transFrom.value === 1 && transTo.value === 2){
        balanceData.checkingBalance = Number(balanceData.checkingBalance) - Number(transAmount);
        balanceData.savingsBalance = Number(balanceData.savingsBalance) + Number(transAmount);
    } else if (transFrom.value === 2 && transTo.value === 1){
        balanceData.savingsBalance = Number(balanceData.savingsBalance) - Number(transAmount);
        balanceData.checkingBalance = Number(balanceData.checkingBalance) + Number(transAmount);
    }
}



document.querySelector('#submitTrans').addEventListener('click', function(){
    if(transAmount){
        balanceData.actDate.push(today());
        balanceData.actDesc.push(`Transfer from ${tfVal()} to ${ttVal()}`);
        balanceData.actAmt.push(`${transAmount.value}`);
        calcBalAfterTrans();
        transAmount.value = '';
    }
    updateData()
})