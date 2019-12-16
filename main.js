document.querySelector('#menu > h2').addEventListener('click', function(){
    const optionsDiv = document.querySelector('#menuOptions');
    if(optionsDiv.style.display === 'none'){
        optionsDiv.style.display = 'block';
    } else {
        optionsDiv.style.display = 'none';
    }
})