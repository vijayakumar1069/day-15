const form=document.getElementById("survey-form")

form.addEventListener("submit",function(event)
{
    event.preventDefault();
    const name = document.getElementById("first-name").value;
    const last = document.getElementById("last-name").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    var gender = document.getElementsByName("gender");
    var value;
  
    for (var i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        value = gender[i].value;
      }
    }
  
    const favfoods = document.getElementsByName("fav");
    const f=document.getElementById("rr")
    var foods = [];
  
    for (var i = 0; i < favfoods.length; i++) {
      if (favfoods[i].checked) {
        foods.push(favfoods[i].value);
      }
    }
    if (foods.length < 2) {
      
      alert("please enter Atleast 2foods")
      return;
    
      
  
    }
  
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
  
    const table = document.getElementById("my-table");
  
    const row = table.insertRow();
    var c1 = row.insertCell();
    var c2 = row.insertCell();
    var c3 = row.insertCell();
    var c4 = row.insertCell();
  
    var c5 = row.insertCell();
  
    
    var c6 = row.insertCell();
    var c7 = row.insertCell();
    var c8 = row.insertCell();
  
    c1.innerText = name;
    c2.innerText = last;
    c3.innerText = address;
    c4.innerText = pincode;
    c5.innerText = value;
    
  
    c6.innerText = foods.join(",");
    
    c7.innerText = state;
    c8.innerText = country;
    form.reset();

})

  

 

