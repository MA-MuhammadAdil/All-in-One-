
var run = 0 


function abc(){

    var character = document.getElementById('character')
    if(event.keyCode === 68 && run< 1200 ){
        run = run + 10
        character.style.left = run + 'px'
        character.src ='iron-walk.gif'
    }
    if(event.keyCode === 65 && run > 10){
        run = run - 10
        character.style.left = run + 'px'
        character.src ='iron-walk.gif'
    
    }
    if(event.keyCode === 32){
        character.style.width = '400px'
        character.style.height = '400px'
        character.src ='iron-gem.gif'
        setTimeout(function(){
            character.src ='iron-man-stance.gif'
        character.style.width = '250px'
        character.style.height = '250px'

        },2500)
 

    }
    

 }
 window.onkeydown = abc