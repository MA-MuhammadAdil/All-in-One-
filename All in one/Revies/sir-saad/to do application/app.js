// function signup(){
//     var email = document.getElementById('semail').value 
//     var pass = document.getElementById('spass').value 
//     localStorage.setItem('Email',email)
//     localStorage.setItem('password',pass)
//     location.href ='./signin.html'
// }

// function signin(){
//     var email = document.getElementById('lemail').value
//     var pass = document.getElementById('lpass').value
//     if(localStorage.getItem('Email') == email &&  localStorage.getItem('password') == pass){
//         location.href = './welcom.html'
//     }
//     else{
//         alert('chal nikal sign up kar k aaaoo...')
//         location.href = './signup.html'
//     }
// }



function foo(){
    var a = document.getElementById('inp') 
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = ' '
    var deletebtn =  document.createElement('button')
    var deletebtntext = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick','del(this)')
    var editbtn =  document.createElement('button')
    var editbtntext = document.createTextNode('Edit')
    editbtn.appendChild(editbtntext)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','editfun(this)')
    deletebtn.setAttribute('class','btn btn-danger aaa')
    editbtn.setAttribute('class','btn btn-info aaa')

}

var getul = document.getElementById('ul')

function deleteall(){
    getul.innerHTML= " "
} 
function del(e){
         e.parentNode.remove()
    }

    function editfun(e){
       var a =  prompt('Entet edit message',e.parentNode.firstChild.nodeValue)
         e.parentNode.firstChild.nodeValue = a
    }