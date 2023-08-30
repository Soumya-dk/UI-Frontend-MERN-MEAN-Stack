const formcheck=()=>{
    let formstatus=true;

    let fullname=document.getElementById("fname");
    if (fullname.value==""){
        formstatus=false;
        fullname.style.borderColor="red";
        document.getElementById("nameerror").innerText="Invalid Name !";
    }else{
        fullname.style.borderColor="";
        document.getElementById("nameerror").innerText="";
    }

    let dob=document.getElementById("dob");
    if(dob.value==""){
        formstatus=false;
        dob.style.borderColor="red";
        document.getElementById("doberror").innerText="Invalid Date of birth !";
    }else{
        dob.style.borderColor="";
        document.getElementById("doberror").innerText="";
    }

    let male=document.getElementById("male");
    let female=document.getElementById("female");
    if(male.checked==false && female.checked==false){
        formstatus=false;
        document.getElementById("gendererror").innerText="Invalid Gender !";
    }else{
        document.getElementById("gendererror").innerText="";
    }

    var mpattern = /^[0]?[6789]\d{9}$/;
    let mobile=document.getElementById("mobile");
    if(! mpattern.test(mobile.value)){
        formstatus=false;
        mobile.style.borderColor="red";
        document.getElementById("mobileerror").innerText="Invalid Mobile no !";
    }else{
        mobile.style.borderColor="";
        document.getElementById("mobileerror").innerText="";
    }

    let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let email=document.getElementById("email");
    if(! epattern.test(email.value)){
        formstatus=false;
        email.style.borderColor="red";
        document.getElementById("emailerror").innerText="Invalid Email Id !";
    }else{
        email.style.borderColor="";
        document.getElementById("emailerror").innerText="";
    }

    let edu=document.getElementById("edu");
    if(edu.value==""){
        formstatus=false;
        edu.style.borderColor="red";
        document.getElementById("eduerror").innerText="Invalid Education !";
    }else{
        edu.style.borderColor="";
        document.getElementById("eduerror").innerText="";
    }

    let city=document.getElementById("city");
    if(city.value==""){
        formstatus=false;
        city.style.borderColor="red";
        document.getElementById("cityerror").innerText="Invalid City !";
    }else{
        city.style.borderColor="";
        document.getElementById("cityerror").innerText="";
    }

    let pincode=document.getElementById("pincode");
    if(pincode.value.length !=6 || isNaN(pincode.value)){
        formstatus=false;
        pincode.style.borderColor="red";
        document.getElementById("pinerror").innerText="Invalid Pincode !";
    }else{
        pincode.style.borderColor="";
        document.getElementById("pinerror").innerText="";
    }

    let address=document.getElementById("address");
    if(address.value.length <30){
        formstatus=false;
        address.style.borderColor="red";
        document.getElementById("addresserror").innerText="Invalid Address !";
    }else{
        address.style.borderColor="";
        document.getElementById("addresserror").innerText="";
    }

    //write above to this line
    alert(formstatus);
    return formstatus;
}

const clearall=()=>{
    document.getElementById("fname").style.borderColor="";
    document.getElementById("nameerror").innerText="";

    document.getElementById("dob").style.borderColor="";
    document.getElementById("doberror").innerText="";

    document.getElementById("gendererror").innerText="";

    document.getElementById("mobile").style.borderColor="";
    document.getElementById("mobileerror").innerText="";

    document.getElementById("email").style.borderColor="";
    document.getElementById("emailerror").innerText="";

    document.getElementById("edu").style.borderColor="";
    document.getElementById("eduerror").innerText="";
    
    document.getElementById("city").style.borderColor="";
    document.getElementById("cityerror").innerText="";

    document.getElementById("pincode").style.borderColor="";
    document.getElementById("pinerror").innerText="";

    document.getElementById("address").style.borderColor="";
    document.getElementById("addresserror").innerText="";

}