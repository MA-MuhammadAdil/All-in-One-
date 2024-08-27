
var background; 
function addPost(){
    var title = document.getElementById('title')
    var description = document.getElementById('description')
console.log('back',background)
    if(title.value.trim()&& description.value.trim()){

      var posts = document.getElementById('posts')

    posts.innerHTML += `<div class="card">
    <div class="card-header">
      Quote
      </div>
      <div style= "background-image:url(${background})" class="card-body">
      <blockquote class="blockquote mb-0">
      <p>${title.value}</p>
      <footer class="blockquote-footer">${description.value}</cite></footer>
      </blockquote>
      </div>
      </div>`
      
      title.value = ' '
      description.value = ' '

    }else{ 
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter Title & description ",
      });
    }
}





function selectImg(src){
  background = src
  // console.log(src)
  var bgImages =  document.getElementsByClassName('bg-img')
  for(var i = 0; i < bgImages.length; i++){
    bgImages[i].className = 'bg-img'
  }
    event.target.className += ' images-list-slected'







}
 