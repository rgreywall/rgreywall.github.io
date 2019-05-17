/*var slideSource = document.getElementById('slideSource');

document.getElementById('show').onclick = function () {
  slideSource.classList.toggle('fade');
}*/
// Get the modal
    var modal = document.querySelector('#myModal');

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

var rightAnswer = false;
var nextButton = document.querySelector("#next");
next.style.display = "none";
waffles = document.querySelector("#waffles");
toast = document.querySelector("#toast");
pancakes = document.querySelector("#pancakes");



waffles.addEventListener("click",function(){
     modal.style.display = "block";
    centerElement.style.display = "flex";
    labelText.innerText = "Please Try Again";
})
pancakes.addEventListener("click",function(){
    modal.style.display = "block";
    centerElement.style.display = "flex";
    labelText.innerText = "Good Job! You got the right one";
    document.querySelector("#ques").innerHTML = "I'm happy and eating pancake <br/>alone for breakfast";
    next.style.display = "block";
})
toast.addEventListener("click",function(){
    modal.style.display = "block";
    centerElement.style.display = "flex";
    labelText.innerText = "Please Try Again";
})

function nextToGetStarted(){
    location.href = "../3_getstarted/getstarted.html";
}

// When the user clicks on <span> (x), close the modal
    function closIt(){
      modal.style.display = "none";
      centerElement.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

//go back
    function previous(){
    window.history.back();
}
