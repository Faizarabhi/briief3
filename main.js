// Variables
var basePrice = 0,
  fuel = 0,
  transPrice,
  totalPrice;
var days = document.getElementById("days");

// Calculate Total Price
var boit = document.getElementsByName("boit");

// Get Fuel Value
boit.forEach((e) =>
  e.addEventListener("click", (f) => {
    fuel = e.value;
  })
);

// get total days

// Calculate Total
function calcPrice() {
  console.log(days);
  if (basePrice == 0) {
    alert("Select Type !");
  } else if (fuel == 0) {
    alert("Please Select Fuel Type !");
  } else if (days.value == "") {
    alert("Please Choose Days !");
  } else {
    totalPrice =
      (basePrice + basePrice * fuel + basePrice * transPrice) * days.value;
    console.log(totalPrice);
    document.getElementById("totalPrice").innerHTML = totalPrice;
  }
}

// Process Selections (Type,Enable/Disbale Buttons)
function getType() {
  var type = document.getElementById("type").value;
  switch (type) {
    case "Moto":
      document.getElementById("manual").disabled = true;
      document.getElementById("auto").disabled = true;

      document.getElementById("hybride").disabled = true;
      document.getElementById("diesel").disabled = true;

      basePrice = 10;
      transPrice = 0;

      break;
    case "Citadine":
      document.getElementById("manual").checked = true;
      document.getElementById("auto").disabled = true;

      basePrice = 12;
      transPrice = 0;

      break;
    case "Compact":
      document.getElementById("manual").checked = true;
      document.getElementById("auto").disabled = true;

      document.getElementById("elect").disabled = true;

      basePrice = 14;
      transPrice = 0;

      break;
    case "Berline":
      document.getElementById("auto").checked = true;
      document.getElementById("manual").disabled = true;

      document.getElementById("elect").disabled = true;

      basePrice = 20;
      transPrice = 0.19;

      break;
    case "Utilitaire":
      document.getElementById("manual").checked = true;
      document.getElementById("auto").disabled = true;

      document.getElementById("elect").disabled = true;
      document.getElementById("hybride").disabled = true;
      document.getElementById("essence").disabled = true;

      document.getElementById("diesel").checked = true;

      basePrice = 16;
      transPrice = 0;
      fuel = 0.21;

      break;
    case "Engin de Chantier":
      document.getElementById("manual").checked = true;
      document.getElementById("auto").disabled = true;

      document.getElementById("elect").disabled = true;
      document.getElementById("hybride").disabled = true;

      basePrice = 900;
      transPrice = 0;

      break;
    case "Camion":
      document.getElementById("auto").checked = true;
      document.getElementById("manual").disabled = true;

      document.getElementById("elect").disabled = true;
      document.getElementById("hybride").disabled = true;
      document.getElementById("essence").disabled = true;

      document.getElementById("diesel").checked = true;

      basePrice = 250;
      transPrice = 0.19;
      fuel = 0.21;

      break;
  }
}

// Reset Buttons
function clearList() {
  var reset_boit = document.getElementsByName("boit");
  for (var i = 0; i < reset_boit.length; i++) {
    reset_boit[i].checked = false;
    reset_boit[i].disabled = false;
  }
  basePrice = 0;
  fuel = 0;
  document.getElementById("manual").checked = false;
  document.getElementById("auto").checked = false;
  document.getElementById("manual").disabled = false;
  document.getElementById("auto").disabled = false;
}

// Hamburger Menu
//
var navbar = document.querySelector(".ham_menu");
var ham = document.querySelector(".ham");

// ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}



// Start Contact 
        var send= document.querySelector(".send");
        var pop = document.querySelector(".pop");
        var close = document.querySelector(".popclose");

  send.addEventListener("click",function (e){
    e.preventDefault();

    var nom = document.querySelector("#nom").value;
    var email = document.querySelector("#mailg").value;
    var message = document.querySelector("#msg").value;

        
        
      if(nom == "" || email == "" || message == ""){
        alert("3mer kolchi ");
      }
      else{
        pop.style.visibility = "visible";
      }
      document.querySelector("#name").innerHTML = nom;
      document.querySelector("#mail").innerHTML = email;
      document.querySelector("#message").innerHTML = message;

      close.addEventListener("click",function(e){
        e.preventDefault();
        pop.style.visibility="hidden";
      })
    })







