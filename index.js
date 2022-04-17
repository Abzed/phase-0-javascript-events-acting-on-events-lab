function moveDodgerLeft(){
    let dodger = document.getElementById('dodger')
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener('keydown', function(e){
    if(e.key == "ArrowLeft"){
        moveDodgerLeft();
    }
})

function moveDodgerRight(){
    let dodger = document.getElementById('dodger')
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    if(left > 0){
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener('keydown', function(e){
    // console.log(e);
    if(e.key == 'ArrowRight'){
        moveDodgerRight();
    }
})












