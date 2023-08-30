const gethome=()=>{
    var xmlhttp = new XMLHttpRequest(); //create object of class to interact with servers
    xmlhttp.open("GET","home.html"); // generate url using get method
    xmlhttp.send(); // send request to above generated url
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajaxdata").innerHTML = this.responseText;
      }
    };
}

const getabout=()=>{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajaxdata").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","about.html");
    xmlhttp.send();
}

const getgallery=()=>{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajaxdata").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET","gallery.html");
  xmlhttp.send();
}

const getjson1=()=>{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      let itemArray =JSON.parse(this.responseText); //json to array
      let data="<h2>  Product List  </h2> <div class='row mt-4'>";

      itemArray.map((name,index)=>{
        data=data + "<p class='col-lg-4 p-3 text-danger'>" +name+ "</p>";
      })
      data=data + "</div>";
      document.getElementById("ajaxdata").innerHTML = data;
    }
  };

  xmlhttp.open("GET","product.json");
  xmlhttp.send();
}

const getjson2=()=>{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      let itemArray =JSON.parse(this.responseText); //json to array
      let data="<h2> Item List </h2> <div class='row text-primary mt-4'> <h5 class='col-lg-4'>Item Name</h5> <h5 class='col-lg-4'>Item Price</h5> <h5 class='col-lg-4'>Item Qty</h5> </div>";

      itemArray.map((item,index)=>{
        data=data + "<div class='row m-3 text-danger'><div class='col-lg-4'>"
        + item.name + "</div>  <div class='col-lg-4'>"
        + item.price + "</div> <div class='col-lg-4'>"
        + item.qty + "</div> </div>";                
      })
      
      document.getElementById("ajaxdata").innerHTML = data;
    }
  };
  xmlhttp.open("GET","item.json");
  xmlhttp.send();
}

const getdata=(filename)=>{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("modaldata").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET",filename);
  xmlhttp.send();
}

const getproduct=()=>{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      let itemArray =JSON.parse(this.responseText); //json to array
      let data="";

      itemArray.forEach((item,index)=>{
        data=data + "<p>" +item.name+ "," +item.price+ "," +item.qty+ "</p>";              
      })
      document.getElementById("modaldata").innerHTML = data;
    }
  };
  xmlhttp.open("GET","item.json");
  xmlhttp.send();
}