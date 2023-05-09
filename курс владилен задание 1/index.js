

const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')


box1.addEventListener('click', redCircleUpdate)
box2.addEventListener('click', blueSquareUpdate)
// box3.addEventListener('click', orangeCircleUpdate)

// function redCircle() {
//     box1.classList.add('circle')
// }

// function blueSquare() {
//     box2.classList.remove('orange')
//     box2.classList.add('blue')
// }

// function orangeCircle() {
//     box3.classList.remove('green')
//     box3.classList.add('orange', 'circle')
// }

// красный кругАпдейт
function redCircleUpdate() {  
    if (box1.classList.contains('circle')) {
        box1.classList.remove('circle')
    } else {
        box1.classList.add('circle')
    }
}
// синий квадратАпдейт
function blueSquareUpdate() {
    if (box2.classList.contains('orange')) {
        box2.classList.remove('orange')
        box2.classList.add('blue')
    }else if (box2.classList.contains('blue')){
        box2.classList.remove('blue')
        box2.classList.add('orange')
    }   
}

// оранжевый кругАпдейт
function orangeCircleUpdate() {
    if (box3.classList.contains('green')) {
        box3.classList.remove('green')
        box3.classList.add('orange', 'circle')
    }else{
        box3.classList.remove('orange', 'circle')
        box3.classList.add('green')
    }
}

