var myBtn=document.getElementById("myBtn");

window.onscroll = function(){
    myFunc()
}



function myFunc(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        mybtn.style.display="block"
    }
else{
    mybtn.style.display="none"
}
}


function ToTop(){
    document.body.scrollTop=0;
    document.documentElement.scroll
    }
