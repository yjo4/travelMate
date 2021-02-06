function count_adult(type) {

    const resultElement = document.getElementById('result_adult');
    
    let number = resultElement.innerText;

    if(type === 'plus') {
        number = parseInt(number) + 1;
    }else if(type === 'minus') {
        
        if(number == 0 ){
            number = 0
        }else{
        number = parseInt(number) - 1;
        }
    }
    
    resultElement.innerText = number;
}

function count_child(type) {

    const resultElement = document.getElementById('result_child');
    
    let number = resultElement.innerText;

    if(type === 'plus') {
        number = parseInt(number) + 1;
    }else if(type === 'minus') {

        if(number == 0 ){
            number = 0
        }else{
        number = parseInt(number) - 1;
        }
    }
    
    resultElement.innerText = number;
}

function count_pet(type) {

    const resultElement = document.getElementById('result_pet');
    
    let number = resultElement.innerText;

    if(type === 'plus') {
        number = parseInt(number) + 1;
    }else if(type === 'minus') {
        
        if(number == 0 ){
            number = 0
        }else{
        number = parseInt(number) - 1;
        }
    }
    
    resultElement.innerText = number;
}