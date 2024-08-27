

// function submitFrom() {
//     var name = document.getElementById("name")
//     var email = document.getElementById("email")
//     if(name.value && email.value.trim()){
//         console.log(name.value)    
//         console.log(email.value)
//     name.value = ' '
//     email.value = ""
        
//     }else{
//     console.log('pleas enter  value')
//     }

// }


// var day = ' mon'
// switch(day){
//     case ' mon':
//         alert('hellow')
//         break
//         case 'tue':
//             alert('2')
//             break
//             default:
//                 alert('default')
// }

var str = '5+5-'
var newInput ="+"
var last = str[str.length -1]
var arr = ["+",'-','/','*']
if(arr.indexOf(last) !== -1 && arr.indexOf(newInput) === -1){
    str = str.slice(-1) + newInput
}
console.log(str)