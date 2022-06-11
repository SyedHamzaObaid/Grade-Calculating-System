function calculate(){
    var a=parseInt(document.getElementById("BookOne").value);
    var b=parseInt(document.getElementById("BookTwo").value);
    var c=parseInt(document.getElementById("BookThree").value);
    var d=parseInt(document.getElementById("BookFour").value);
    var e=parseInt(document.getElementById("BookFive").value);
    
    if (a>100 || b>100 || c>100 || d>100 || e>100) {
        alert ("Please enter correct value");
    }

    else {
        var obtain=a+b+c+d+e;
        document.getElementById("Obtain").innerHTML=obtain;
        var per=obtain/500*100;
        document.getElementById("per").innerHTML=per;
        if(aplus>80 && a>70 && b>60 && c>50 && d>40 && e>30){
            document.getElementById("remarks").innerHTML="pass";
        }
        else{ 
            document.getElementById("remarks").innerHTML="fail";
    
        }
    }

  
    return false;

}