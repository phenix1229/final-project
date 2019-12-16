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
    if (transFrom.value === '1' && transTo.value === '2'){
        dataObj.checkingBalance = Number(dataObj.checkingBalance) - Number(transAmount.value);
        dataObj.savingsBalance = Number(dataObj.savingsBalance) + Number(transAmount.value);
    } else if (transFrom.value === '2' && transTo.value === '1'){
        dataObj.savingsBalance = Number(dataObj.savingsBalance) - Number(transAmount.value);
        dataObj.checkingBalance = Number(dataObj.checkingBalance) + Number(transAmount.value);
    }
}



document.querySelector('#submitTrans').addEventListener('click', function(){
    if(transAmount && transFrom.value === '1'){
        dataObj.cActDate.push(today());
        dataObj.sActDate.push(today());
        dataObj.cActDesc.push(`Transfer to ${ttVal()}`);
        dataObj.sActDesc.push(`Transfer from ${tfVal()}`);
        dataObj.cActAmt.push(`-${transAmount.value}`);
        dataObj.sActAmt.push(`${transAmount.value}`);
    }
    if(transAmount && transFrom.value === '2'){
        dataObj.cActDate.push(today());
        dataObj.sActDate.push(today());
        dataObj.sActDesc.push(`Transfer to ${ttVal()}`);
        dataObj.cActDesc.push(`Transfer from ${tfVal()}`);
        dataObj.sActAmt.push(`-${transAmount.value}`);
        dataObj.cActAmt.push(`${transAmount.value}`);
    }
    calcBalAfterTrans();
    transAmount.value = '';
    updateData()
})