var firstRamazan = new Date("11 March 2024")
var today = new Date()

var diff = firstRamazan.getTime() - today.getTime()

var day = diff / (1000*60*60*24)
var month = diff/(1000*60*60*24*30)

console.log(Math.round(day) +' Day')
console.log(Math.round(month) +' month')