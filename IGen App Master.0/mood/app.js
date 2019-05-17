var pkg = {
    page: 1,
    feeling: "",
    meals: "",
    mealsText: "";
}

//Proxy

var handler = {
    set(){
        if (props == "page"){
            ChangePageUI(value);
        }
    }
}

function ChangePage(num){
    prox.page = num;
}

function ChangePageUI(val){

  if(val == 2){
      app1.style.display="none";
      app2.style.display="block";
    }

  if(val == 3){
      app1.style.display="none";
      app2.style.display="none";
      app3.style.display="block";
    }

  if(val == 4){
      app1.style.display="none";
      app2.style.display="none";
      app3.style.display="none";
      app4.style.display="block";
    }

  if(val == 5){
      app1.style.display="none";
      app2.style.display="none";
      app3.style.display="none";
      app4.style.display="none";
      app5.style.display="block";
    }

  if(val == 6){
      app1.style.display="none";
      app2.style.display="none";
      app3.style.display="none";
      app4.style.display="none";
      app5.style.display="none";
      app6.style.display="block";
    }

  if(val == 7){
      app1.style.display="none";
      app2.style.display="none";
      app3.style.display="none";
      app4.style.display="none";
      app5.style.display="none";
      app6.style.display="none";
      app7.style.display="block";
    }

  if(val == 8){
      app1.style.display="none";
      app2.style.display="none";
      app3.style.display="none";
      app4.style.display="none";
      app5.style.display="none";
      app6.style.display="none";
      app7.style.display="none";
      app8.style.display="block";
    }

  if(val == 9){
      app1.style.display="none";
      app2.style.display="none";
      app3.style.display="none";
      app4.style.display="none";
      app5.style.display="none";
      app6.style.display="none";
      app7.style.display="none";
      app8.style.display="none";
      app9.style.display="block";
    }

  if(val == 10){
      app1.style.display="none";
      app2.style.display="none";
      app3.style.display="none";
      app4.style.display="none";
      app5.style.display="none";
      app6.style.display="none";
      app7.style.display="none";
      app8.style.display="none";
      app9.style.display="none";
      app10.style.display="block";
    }

  if(val == 11){
      app1.style.display="none";
      app2.style.display="none";
      app3.style.display="none";
      app4.style.display="none";
      app5.style.display="none";
      app6.style.display="none";
      app7.style.display="none";
      app8.style.display="none";
      app9.style.display="none";
      app10.style.display="none";
      app11.style.display="block";
    }
}
