const redBtn = document.querySelector('.red')
const blueBtn = document.querySelector('.blue')
const blackBtn = document.querySelector('.black')
const bike = document.querySelector('.main')

redBtn.onclick = function(){
    bike.style.backgroundImage = "url(/assets/img/BMW1.png)"
}

blueBtn.onclick = function(){
    bike.style.backgroundImage = "url(/assets/img/BMW2.png)"
}

blackBtn.onclick = function(){
    bike.style.backgroundImage = "url(/assets/img/BMW3.png)"
}