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
    const transDolAmt = Math.round(transAmount.value * 100) / 100;
    if (transFrom.value === '1' && transTo.value === '2'){
        dataObj.checkingBalance = Number(dataObj.checkingBalance) - Number(transDolAmt);
        dataObj.savingsBalance = Number(dataObj.savingsBalance) + Number(transDolAmt);
    } else if (transFrom.value === '2' && transTo.value === '1'){
        dataObj.savingsBalance = Number(dataObj.savingsBalance) - Number(transDolAmt);
        dataObj.checkingBalance = Number(dataObj.checkingBalance) + Number(transDolAmt);
    }
}



document.querySelector('#submitTrans').addEventListener('click', function(){
    if (checkForNumbers(transAmount.value) || !transAmount){
        alert('Please enter transfer amount as a number.\nExample: 1.00');
        transAmount.value = '';
    } else {
        const transDolAmt = Math.round(transAmount.value * 100) / 100;
        if(transAmount && transFrom.value === '1'){

            dataObj.cActDate.push(today());
            dataObj.sActDate.push(today());
            dataObj.cActDesc.push(`Transfer to ${ttVal()}.`);
            dataObj.sActDesc.push(`Transfer from ${tfVal()}.`);
            dataObj.cActAmt.push(`-${transDolAmt}`);
            dataObj.sActAmt.push(`${transDolAmt}`);
        }
        if(transAmount && transFrom.value === '2'){
            dataObj.cActDate.push(today());
            dataObj.sActDate.push(today());
            dataObj.sActDesc.push(`Transfer to ${ttVal()}.`);
            dataObj.cActDesc.push(`Transfer from ${tfVal()}.`);
            dataObj.sActAmt.push(`-${transDolAmt}`);
            dataObj.cActAmt.push(`${transDolAmt}`);
        }
    }
    calcBalAfterTrans();
    transAmount.value = '';
    updateData()
    location.reload();
})