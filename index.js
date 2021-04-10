
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Tabs grid
var Personalinfo = document.getElementById("Personalinfo");
var Billinginfo = document.getElementById("Billinginfo");
var Confirmpayment= document.getElementById("Confirmpayment");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function openPersonalinfo(){
  Personalinfo.style.transform= "translateX(0)";
  Billinginfo.style.transform= "translateX(100%)";
  Personalinfo.style.transform= "translateX(100%)";
  btn1.style.color ="#ff7846";
  btn2.style.color ="#000";
  btn3.style.color ="#000";
}
function openBillinginfo(){
  Personalinfo.style.transform= "translateX(100%)";
  Billinginfo.style.transform= "translateX(0)";
  Confirmpayment.style.transform= "translateX(100%)";
  btn1.style.color ="#000";
  btn2.style.color ="#ff7846";
  btn3.style.color ="#000";
}function openPersonalinfo(){
  Personalinfo.style.transform= "translateX(100%)";
  Billinginfo.style.transform= "translateX(100%)";
  Confirmpayment.style.transform= "translateX(0)";
  btn1.style.color ="#000";
  btn2.style.color ="#000";
  btn3.style.color ="#ff7846";
}
