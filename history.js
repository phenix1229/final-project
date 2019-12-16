let bdo = localStorage.getItem('appData');

let dataObj = JSON.parse(bdo);

window.addEventListener('load', function(){
    document.querySelector('#cAmount').innerText = dataObj['currentBalance'];
    dataObj.actDate.forEach(item => {
        document.querySelector('#actionDate table').appendChild(document.createElement('tr')).innerText = item;
    });
    dataObj.actDesc.forEach(item => {
        document.querySelector('#actionDesc').appendChild(document.createElement('tr')).innerText = item;
    });
    dataObj.actAmt.forEach(item => {
        document.querySelector('#actionAmount').appendChild(document.createElement('tr')).innerText = item;
    });
})

