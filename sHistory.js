window.addEventListener('load', function(){
    dataObj.sActDate.forEach(item => {
        document.querySelector('#actionDate').appendChild(document.createElement('tr')).innerText = item;
    });
    dataObj.sActDesc.forEach(item => {
        document.querySelector('#actionDesc').appendChild(document.createElement('tr')).innerText = item;
    });
    dataObj.sActAmt.forEach(item => {
        document.querySelector('#actionAmount').appendChild(document.createElement('tr')).innerText = item;
    });
})

