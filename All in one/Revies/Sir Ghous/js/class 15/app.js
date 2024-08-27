// function submit(){
//     // var test = document.getElementById('test')
//     // console.log(test.value)
//     // test.value = ' '

//     var radio = document.getElementsByName('gender')
//     for(var i = 0;i<radio.length; i++){
//         if(radio[i].checked){
//             console.log(radio[i].value)
//         }
//     }
// }


function validate_name(){
    var first_name = document.getElementById('first_name')
    if(!first_name.value){

        first_name.style.border = '2px solid red'
    }

    console.log(first_name)
}