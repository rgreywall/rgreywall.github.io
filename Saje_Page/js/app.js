var Clock = document.querySelector("#Clock"),
    ClockDesc = document.querySelector("#ClockDesc"),
    Diff = document.querySelector("#Diff"),
    DiffDesc = document.querySelector("#DiffDesc"),
    Cactus = document.querySelector("#Cactus"),
    CactusDesc = document.querySelector("#CactusDesc"),
    Logo = document.querySelector("#Logo"),
    LogoDesc = document.querySelector("#LogoDesc"),
    Spray = document.querySelector("#Spray"),
    SprayDesc = document.querySelector("#SprayDesc"),
    Oil1 = document.querySelector("#Oil1"),
    Oil1Desc = document.querySelector("#Oil1Desc"),
    Oil2 = document.querySelector("#Oil2"),
    Oil2Desc = document.querySelector("#Oil2Desc"),
    Oil3 = document.querySelector("#Oil3"),
    Oil3Desc = document.querySelector("#Oil3Desc"),
    BG = document.querySelector("#BG");
    BGDesc = document.querySelector("#BGDesc");

    Clock.addEventListener("click", function(){
    ClockDesc.innerHTML= "Time for a Sale!";
})

    Diff.addEventListener("click", function(){
    DiffDesc.innerHTML= "Diffusers are healthier than burning candles!";
})

Cactus.addEventListener("click", function(){
CactusDesc.innerHTML= "Plants are essential for healthy air & quality of life.";
})

Logo.addEventListener("click", function(){
LogoDesc.innerHTML= "Saje is a proudly Canadian company.";
})

Spray.addEventListener("click", function(){
SprayDesc.innerHTML= "This Cool Mist will have you feeling fresh.";
})

Oil1.addEventListener("click", function(){
Oil1Desc.innerHTML= "Lavender Oil will transport you to Provence, France with it's fresh and floral smell.";
})

Oil2.addEventListener("click", function(){
Oil2Desc.innerHTML= "Eucalyptus Oil keeps the mind clear and the body stress free.";
})

Oil3.addEventListener("click", function(){
Oil3Desc.innerHTML= "Orange Oil has citrus tones and an exhilerating smell to get you energized.";
})


BG.addEventListener("click", function(){
    ClockDesc.innerHTML = "";
     DiffDesc.innerHTML = ('');
    CactusDesc.innerHTML = "";
        LogoDesc.innerHTML = "";
    SprayDesc.innerHTML = "";
         Oil1Desc.innerHTML = ('');
    Oil2Desc.innerHTML = "";
        Oil3Desc.innerHTML = "";

})
