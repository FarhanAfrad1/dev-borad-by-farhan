function randomNumber () {
    return Math.floor((Math.random()*255)+1)
}

document.getElementById('theme-btn').addEventListener('click',function(){
    
    document.body.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})` ;
})
