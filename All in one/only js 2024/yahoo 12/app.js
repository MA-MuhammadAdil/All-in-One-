
// var arr = [10, 'adil','ali', true, null]
// // //var sum = 0

// document.write('<ul>')
// for(var a = 0; a <= 4 ; a++){
//     document.write('<li>'+arr[a],"</li> ")
//  // //  sum = sum + arr[a]   
// }
// document.write('</ul>')
// // document.write('total sum'+sum)




// document.write(arr[3])


// var arr =new Array(3)
// //// arr[0]  = 100
// //// arr[1]  = 200
// // //arr[4]  = 300


// for(var g = 0 ; g <3 ; g++ ){
//     arr[g] = prompt('enter the value')
// }
 

// document.write('<ul>')
// for(var a = 0; a < 3 ; a++){
//     document.write('<li>'+arr[a],"</li> ")

// }  
// document.write('</ul>')



// Multidimensional Array


// var arr = [
//     ['Ail', 20, 'Male', 10],
//     ['zahid', 20, 'Male', 9],
//     ['ahmed', 20, 'Male', 21],
//     ['faizan', 20, 'Male', 11],
//     ['hasan', 20, 'Male', 11],
//     ['hammad', 20, 'Male', 11]
// ];

// document.write(arr.length)
// document.write("<table border='1px' cellspacing='0px'>");
// for (var a = 0; a < arr.length; a++) {
//     document.write("<tr>");
//     for (var b = 0; b < arr[a].length; b++) {
//         document.write("<td>" + arr[a][b]+ "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");
 
 

// Modify & delete Array Element


// var a = ['Ail', 20, 'Male', 10]
 
// document.write(a+"<br>")

// a[0] = 'hassan'
// document.write(a+"<br>")

// a[1] = 22
// document.write(a+"<br>")


// delete a[2] 
// document.write(a+"<br>")



// // Sort and revers method

// var a  = ['Adil','Faizan','Zahid','Bilal','sufyan','Ahmed']

// document.write(a+ "<br>"+"<br>")

// a.sort() 
// document.write(a+ "<br>"+"<br>")

// a.reverse()

// document.write(a+ "<br>"+"<br>")



// var a  = ['Adil','Faizan','sufyan','Ahmed']

// document.write(a + "<br><br>")
// a.pop()
// document.write(a + "<br><br>")

// a.push('raza')
// document.write(a + "<br><br>")



// var a  = ['Adil','Faizan','sufyan','Ahmed']

// document.write(a + "<br><br>")

// a.unshift('hassan')

// document.write(a + "<br><br>")


// a.shift()
// document.write(a + "<br><br>")


// var a = ['adil','ali','imran']

// var b = a.concat('fizan','akram')
// var d = ['ahmed']

// var c = a.concat(b,d)


// document.write(c)


// var a = ['adil','ali','imran']

// var b = a.concat('fizan')

// var c = a.concat( + "<br>")
// document.write(c+ "<br><br>")

// var d = c.join(" / ")

// document.write(d)


// var a = ['adil','ali','imran',
//     "Akram",'muhammad']

// document.write(a + "<br><br>")

// var b = a.slice(0,3)

// document.write(b + "<br><br>")

  
// a.splice(3,0,"muhammad",'saad')


// document.write(a + "<br><br>")



// var a = 20;

// document.write(a +"<br>")
// if(Array.isArray(a)){
//     document.write('This is an array')
// }else{
//     document.write('This is not an Array')
// }




// var a = ['Adil','Ali','Imran','hassan','Adil','Imran','Ali']

// document.write(a +"<br><br>" +'IndexOf👇'+"<br><br>")

//                 // value  , start
// var b =  a.indexOf('Ali', 3)


// document.write(b +"<br><br>")


// document.write('LastindexOf👇')


// var c = ['Adil','Ali','Imran','hassan','Adil','Imran','Ali']

// var d = c.lastIndexOf('Adil',2)
// document.write("<br><br>")

// document.write(d +"<br><br>")



// some mean ek bhi vlue 18 se bari ho to true hoga
// var ages = [10, 13 ,18,20]

// document.write(ages+'<br><br>')
 
// var b = ages.some(CheckAdult);


// document.write(b+'<br><br>')
   
// function CheckAdult(age){
//     return age >= 10
// }



// every mean sari value 100 se bari ho to true hoga 
// var ages = [10, 13 ,18,20]

// document.write(ages+'<br><br>')
 
// var b = ages.every(CheckAdult);


// document.write(b+'<br><br>')
   
// function CheckAdult(age){
//     return age >= 100
// }


// find 

// var age = [10,17,15,20]

// document.write(age+'<br></br>')

// var b = age.find(checkAge)
// document.write(b+'<br></br>')

// function checkAge(e){
// return e >= 15
// }

// var age = [10,17,15,20]

// document.write(age+'<br></br>')

// var b = age.findIndex(checkAge)
// document.write(b+'<br></br>')

// function checkAge(e){
// return e >= 15
// }


//  Filter

// var ages = [10,30,20,40]

// document.write(ages+"<br><br>")
// var b =  ages.filter(check)
// document.write(b+"<br><br>")

// function check(a){
//     return a >20
// }


// toString

// var a = ["Adil","Ali","Imran"]

// a.toString()
// document.write(a+"<br><br>")

// // fill
// var b = ["Adil","Ali","Imran"]

// b.fill('Hassan')

// document.write(b+"<br><br>")


// Importanat hy  

// for each loop 


var a = ['Adil','Ali','Faizan','Zahid']

// document.write(a+"<br><br>")

a.forEach(function(value,index){
    document.write(index+" : "+value+"<br><br>")
})









A