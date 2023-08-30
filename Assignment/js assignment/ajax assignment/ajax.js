const getuser=async()=>{
  let data="";
  await fetch("user.json")
  .then(response => response.json())
  .then(arrayObject =>{
      arrayObject.map((username,index)=>{
          data= data +"<p id='para'>" + username + "</p>";
      })
      document.getElementById("ajaxuser").innerHTML=data;
  })
}

const getbook=async()=>{
  let data="";
  await fetch("book.json")
  .then(response => response.json())
  .then(arrayObject =>{
      arrayObject.map((bookname,index)=>{
          data= data +"<p id='para'>" + bookname + "</p>";
      })
      document.getElementById("ajaxbook").innerHTML=data;
  })
}

const getcompany=async()=>{
  let data="";
  await fetch("company.json")
  .then(response => response.json())
  .then(arrayObject =>{
      arrayObject.map((companyname,index)=>{
          data= data +"<p id='para'>" + companyname + "</p>";
      })
      document.getElementById("ajaxcompany").innerHTML=data;
  })
}

const getemployee=async()=>{
  let data="";
  await fetch("emp.json")
  .then(response => response.json())
  .then(arrayObject =>{
      arrayObject.map((empname,index)=>{
          data= data +"<p id='para'>" + empname + "</p>";
      })
      document.getElementById("ajaxemployee").innerHTML=data;
  })
}