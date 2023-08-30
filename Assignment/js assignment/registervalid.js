const register=()=>{
    let formstatus=true;

    let firstname=document.getElementById("firstname");
    if (firstname.value==""){
        formstatus=false;
        firstname.style.borderColor="red";
        document.getElementById("firsterror").innerText="Please Enter First name";
    }else{
        firstname.style.borderColor="green";
        document.getElementById("firsterror").innerText="";
    }

    let lastname=document.getElementById("lastname");
    if (lastname.value==""){
        formstatus=false;
        lastname.style.borderColor="red";
        document.getElementById("lasterror").innerText="Please Enter Last name";
    }else{
        lastname.style.borderColor="green";
        document.getElementById("lasterror").innerText="";
    }

    var mpattern = /^[0]?[6789]\d{9}$/;
    let mobile=document.getElementById("mobile");
    if(! mpattern.test(mobile.value)){
        formstatus=false;
        mobile.style.borderColor="red";
        document.getElementById("mobileerror").innerText="Invalid Mobile number!";
    }else{
        mobile.style.borderColor="green";
        document.getElementById("mobileerror").innerText="";
    }

    let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let email=document.getElementById("email");
    if(! epattern.test(email.value)){
        formstatus=false;
        email.style.borderColor="red";
        document.getElementById("emailerror").innerText="Invalid Email Id !";
    }else{
        email.style.borderColor="green";
        document.getElementById("emailerror").innerText="";
    }

    let passpattern= /^(?=(.*\d){2,})(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let password=document.getElementById("password");
    if(! passpattern.test(password.value)){
        formstatus=false;
        password.style.borderColor="red";
        document.getElementById("passworderror").innerText="Invalid Password !";
    }else{
        password.style.borderColor="green";
        document.getElementById("passworderror").innerText="";
    }

    let cnfpassword=document.getElementById("cnfpassword");
    if(cnfpassword.value.length>0){
        if(cnfpassword.value!=password.value){
            document.getElementById("cnfpasserror").innerText="Password doesn't matched";
        }else{
            cnfpassword.style.borderColor="green";
            document.getElementById("cnfpasserror").innerText="Password Matched";
            document.getElementById("cnfpasserror").style.color="green";
        }
    }
    
    let address=document.getElementById("address");
    if(address.value.length <30){
        formstatus=false;
        address.style.borderColor="red";
        document.getElementById("addresserror").innerText="Enter Your Address";
    }else{
        address.style.borderColor="green";
        document.getElementById("addresserror").innerText="";
    }

    let pincode=document.getElementById("pincode");
    if(pincode.value.length !=6 || isNaN(pincode.value)){
        formstatus=false;
        pincode.style.borderColor="red";
        document.getElementById("pinerror").innerText="Invalid Pincode !";
    }else{
        pincode.style.borderColor="green";
        document.getElementById("pinerror").innerText="";
    }

    let state=document.getElementById("state");
    if(state.value==""){
        formstatus=false;
        state.style.borderColor="red";
        document.getElementById("stateerror").innerText="Select State";
    }else{
        state.style.borderColor="green";
        document.getElementById("stateerror").innerText="";
    }

    let dist=document.getElementById("dist");
    if(dist.value==""){
        formstatus=false;
        dist.style.borderColor="red";
        document.getElementById("disterror").innerText="Select District";
    }else{
        dist.style.borderColor="green";
        document.getElementById("disterror").innerText="";
    }
    

    let datepattern= /^(0?[1-9]|[12][0-9]|3[01])$/;
    let monthpattern = /^(0[1-9]|1[0-2])$/;
    let yearpattern= /^\d{4}$/;
    let date=document.getElementById("date");
    let month=document.getElementById("month");
    let year=document.getElementById("year");
    if(! datepattern.test(date.value)){
        formstatus=false;
        date.style.borderColor="red";
        document.getElementById("dateerror").innerText="Enter date";
    }else{
        date.style.borderColor="green";
        document.getElementById("dateerror").innerText="";
    }

    if(! monthpattern.test(month.value)){
        formstatus=false;
        month.style.borderColor="red";
        document.getElementById("montherror").innerText="Enter month";
    }else{
        month.style.borderColor="green";
        document.getElementById("montherror").innerText="";
    }

    if(! yearpattern.test(year.value)){
        formstatus=false;
        year.style.borderColor="red";
        document.getElementById("yearerror").innerText="Enter year";
    }else{
        year.style.borderColor="green";
        document.getElementById("yearerror").innerText="";
    }

    let agreecon=document.getElementById("agree");
    if(agreecon.checked==""){
        formstatus=false;
        agreecon.style.borderColor="red";
    }else{
        agreecon.style.borderColor="";
    }


    //write above to this line
    alert(formstatus);
    return formstatus;
}



