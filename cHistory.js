window.addEventListener('load', function(){
    dataObj.cActDate.forEach(item => {
        document.querySelector('#actionDate').appendChild(document.createElement('tr')).innerText = item;
    });
    dataObj.cActDesc.forEach(item => {
        document.querySelector('#actionDesc').appendChild(document.createElement('tr')).innerText = item;
    });
    dataObj.cActAmt.forEach(item => {
        document.querySelector('#actionAmount').appendChild(document.createElement('tr')).innerText = `$${item}`;
    });
})

