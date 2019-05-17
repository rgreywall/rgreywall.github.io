var pkg = {
    feeling: "",
    meals: "",
    mealsText: "",
    company: ""
}

var store = localStorage.getItem("pkg");
    if (store){
        pkg = JSON.parse(store);
    }

var handler = {
    set: function(obj, props, value){
        
    }
}

var prox = new Proxy(pkg, handler)

var btnGetStarted = document.querySelector("#btnGetStart"),
    moodHappy = document.querySelector("#happy"),
    moodTired = document.querySelector("#tired"),
    moodExcited = document.querySelector("#excited"),
    moodSad= document.querySelector("#sad"),
    eatBreakfast = document.querySelector("#bfast"),
    eatlunch = document.querySelector("#lunch"),
    eatDinner = document.querySelector("#din"),
    labelText = document.querySelector("#labelText"),
    inpEat = document.querySelector("#inpEat"),
    validateEat = document.querySelector("#valdateEat"),
    caption = document.querySelector("#caption"),
    centerElement = document.querySelector("#centerElement"),
    copy = document.querySelector("#copy");

// Get the modal
    var modal = document.querySelector('#myModal');

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 



function CopyToClipboard(h1) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.querySelector(h1));
    range.select().createTextRange();
    document.execCommand("copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.querySelector(h1));
     window.getSelection().addRange(range);
     document.execCommand("copy");
     alert("Text Copied") 
    }
}


function eat(val) {
    modal.style.display = "block";
    centerElement.style.display = "flex";
    labelText.innerText = "What kind of " + val.name + " did you have today?";
    localStorage.setItem("food", val.name);
    pkg.meals = val.name;
    save();
    
}   

function save(){
    localStorage.setItem("pkg", JSON.stringify(pkg))
}

// When the user clicks on <span> (x), close the modal
    function closIt() {
      modal.style.display = "none";
      centerElement.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


// Actions
function getStarted(){
    console.log("clicked");
    window.location='../mood/index.html';
}

function tutorial(){
    window.location='../2_tutorial/tutorial4.html';
}

//function finTutorial(){
//    window.location='../3_getstarted/getstarted.html';
//}

function selection(val){
    localStorage.setItem("mood", val.name);
    window.location='../5_eat/index.html';
    pkg.feeling = val.name;
    save();
}

function vEat(){
    if (inpEat.value != ""){
        localStorage.setItem("Eat", inpEat.value);
        pkg.mealsText = inpEat.value;
        save();
        window.location='../company/company.html';
        close();
    }
   
}

/*if (caption){
    function generation(){
    var companyAdj = "";
    var moodAdj = "";
    if ([pkg.company] == "Solo"){
        companyAdj = "alone";
    } else if ([pkg.company] == "Friends") {
        companyAdj = "with friends";
    }
    
    if ([pkg.feeling] == "Happy"){
        moodAdj = "happily";
    } else if ([pkg.feeling] == "Tired"){
        moodAdj = "tiredly";
    } else if ([pkg.feeling] == "excited"){
        moodAdj = "excitedly";
    } else if ([pkg.feeling] == "sad"){
        moodAdj = "sadly";
    }   
    caption.innerHTML =  "<h1>I'm " + moodAdj + " eating " + localStorage.getItem("Eat")+" for " +localStorage.getItem("food") +" "+ companyAdj+"</h1>"; 
    GenText = caption.innerHTML;
    }
  generation();  
}*/

function generation(){
    //document.querySelector("")  = graphics.feeling[pkg.feeling];
    document.querySelector("#bf").src = graphics.meals[pkg.meals];
    
    //graphics.feeling[pkg.feeling][pkg.company];
    document.querySelector("#char").src = graphics.feeling[pkg.feeling][pkg.company];
    
if ([pkg.company] == "Friends" && (window.innerWidth >= 800 )){
    console.log("friends activated");
    document.querySelector("#char").style.width = "107%";
    document.querySelector("#char").style.height = "107%";
    document.querySelector("#char").style.transform = "translate(-4%,-7%)";
    document.querySelector("#bf").style.right = "255px";
    document.querySelector("#bf").style.width = "35%";
    document.querySelector("#bf").style.marginTop = "25px";
    document.querySelector("#bf").style.position = "absolute";
}
    
    if ([pkg.company] == "Friends" && (window.innerWidth >= 400 && window.innerWidth < 800 )){
    console.log("friends activated mini phone");
    document.querySelector("#char").style.width = "107%";
    document.querySelector("#char").style.height = "107%";
    document.querySelector("#char").style.transform = "translate(-4%,-7%)";
    document.querySelector("#bf").style.right = "60px";
    document.querySelector("#bf").style.width = "45%";
    document.querySelector("#bf").style.marginTop = "-5px";
    document.querySelector("#bf").style.position = "absolute";
}
    
//    else{
//        document.querySelector("#char").style.left = "80px";
//        document.querySelector("#char").style.position = "absolute";
//    }
if (([pkg.company] == "Solo") && (window.innerWidth >= 414 && window.innerWidth < 1024)){
    console.log("solo activated");
    document.querySelector("#char").style.width = "100%";
    document.querySelector("#char").style.height = "100%";
    document.querySelector("#char").style.transform = "translate(0%,0%)";
    document.querySelector("#bf").style.right = "0x";
    document.querySelector("#bf").style.marginTop = "0px";
    document.querySelector("#bf").style.marginRight = "-10px";
    document.querySelector("#bf").style.position = "absolute";
}
    
    if (([pkg.company] == "Solo") && (window.innerWidth >= 414 && window.innerWidth < 1024)){
    console.log("solo activated");
    document.querySelector("#char").style.width = "100%";
    document.querySelector("#char").style.height = "100%";
    document.querySelector("#char").style.transform = "translate(0%,0%)";
    document.querySelector("#bf").style.right = "0x";
    document.querySelector("#bf").style.marginTop = "0px";
    document.querySelector("#bf").style.marginRight = "-10px";
    document.querySelector("#bf").style.position = "absolute";
}
    
    if (caption){
    function generation(){
    var companyAdj = "";
    var moodAdj = "";
    if ([pkg.company] == "Solo"){
        companyAdj = "alone";
    } else if ([pkg.company] == "Friends") {
        companyAdj = "with friends";
    }
    
    if ([pkg.feeling] == "Happy"){
        moodAdj = "happily";
    } else if ([pkg.feeling] == "Tired"){
        moodAdj = "tiredly";
    } else if ([pkg.feeling] == "excited"){
        moodAdj = "excitedly";
    } else if ([pkg.feeling] == "sad"){
        moodAdj = "sadly";
    }   
    caption.innerHTML =  "<h1>I'm " + moodAdj + " eating " + localStorage.getItem("Eat")+" for " +localStorage.getItem("food") +" "+ companyAdj+"</h1>"; 
    GenText = caption.innerHTML;
    }
  generation();  
}
}

function soloOrFriends(val){
    localStorage.setItem("company", val.name);
    window.location='../gen/generator.html';
    pkg.company = val.name;
    save();
}

console.log(pkg);

function previous(){
    window.history.back();
};

 function goBack(){
    console.log("back");
    location.href= "../3_getstarted/getstarted.html";
}








