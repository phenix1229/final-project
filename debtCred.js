const dollarAmount = document.querySelector('#dollarAmount');

const description = document.querySelector('#description');

const debtOrCred = document.querySelector('#debtOrCred');

const acctChoice = document.querySelector('#acctChoice');

const submitAction = document.querySelector('#submitAction');

const docVal = () => {
    if(debtOrCred.value === '1'){
        return 'Debit';
    } else {
        return 'Credit';
    }
}

const acctVal = () => {
    if(acctChoice.value === '1'){
        return 'checking';
    } else {
        return 'savings';
    }
}

const calcBalAfterAction = () => {
    if (debtOrCred.value === '1' && acctChoice.value === '1'){
        dataObj.checkingBalance = Number(dataObj.checkingBalance) - Number(dollarAmount.value);
    } else if (debtOrCred.value === '1' && acctChoice.value === '2'){
        dataObj.savingsBalance = Number(dataObj.savingsBalance) - Number(dollarAmount.value);
    } else if (debtOrCred.value === '2' && acctChoice.value === '1'){
        dataObj.checkingBalance = Number(Number(dataObj.checkingBalance) + Number(dollarAmount.value));
    } else if (debtOrCred.value === '2' && acctChoice === '2'){
        dataObj.savingsBalance = Number(dataObj.savingsBalance) + Number(dollarAmount.value);
    }
}



document.querySelector('#submitAction').addEventListener('click', function(){
    if(dollarAmount && debtOrCred.value === '1'){
        if (acctChoice.value === '1'){
            dataObj.cActDate.push(today());
            dataObj.cActDesc.push(`${docVal()}. ${description.value}.`);
            dataObj.cActAmt.push(`-${dollarAmount.value}`);
        } else if (acctChoice.value === '2'){
            dataObj.sActDate.push(today());
            dataObj.sActDesc.push(`${docVal()}. ${description.value}.`);
            dataObj.sActAmt.push(`-${dollarAmount.value}`);
        }
    }
    if(dollarAmount && debtOrCred.value === '2'){
        if (acctChoice.value === '1'){
            dataObj.cActDate.push(today());
            dataObj.cActDesc.push(`${docVal()}. ${description.value}.`);
            dataObj.cActAmt.push(`${dollarAmount.value}`);
        } else if (acctChoice.value === '2'){
            dataObj.sActDate.push(today());
            dataObj.sActDesc.push(`${docVal()}. ${description.value}.`);
            dataObj.sActAmt.push(`${dollarAmount.value}`);
        }
    }
    calcBalAfterAction();
    dollarAmount.value = '';
    description.value = '';
    updateData();
    location.reload();
})