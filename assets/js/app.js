const resetState = (StateResseting) => {
  while (StateResseting.firstChild) {
    StateResseting.removeChild(StateResseting.firstChild);
  }
};

var submitEl = document.querySelector(".sub");
const getQuote = (event) => {
  event.preventDefault();
  // var descriptionEl = document.getElementById("description1").value;
  var formEl = document.getElementById("form1");
  var fuelCost = document.getElementById("fuelCost").value;
  var addressEl = document.getElementById("address").value;
  var distance = document.getElementById("distance1").value;
  var quote = document.getElementById("quote");
  var weight = document.getElementById("Weight").value;
  var chassis = document.getElementById("chassis").value;
  let quoteList = document.createElement("ul");
  // ==============================================================
  var finalizedQuote = function (costBase, fuelCost, tollPrice, layOverCost) {
    resetState(quote);
    quoteList.classList.add("qList");
    if (distance < 300) {
      quoteList.innerHTML =
        "<li><strong>Base Rate: </strong>$" +
        costBase +
        "</li><li><strong>Fuel: </strong> " +
        fuelCost +
        "%</li><li><strong>Tolls: </strong>$" +
        tollPrice +
        "</li><li><strong>Chassis: </strong>$" +
        chassisPrice +
        " Per Day (2 Day Minimum)</li>";
    } else {
      quoteList.innerHTML =
        "<li><strong>Base Rate: </strong>$" +
        costBase +
        "</li><li><strong>Fuel: </strong> " +
        fuelCost +
        "%</li><li><strong>Tolls: </strong>$" +
        tollPrice +
        "</li><li><strong>Chassis: </strong>$" +
        chassisPrice +
        " Per Day (3 Day Minimum)</li> <li><strong>Layover: $</strong>" +
        layOverCost +
        "</li>";
    }

    quote.appendChild(quoteList);
  };
  // =================================================================
  function round(x) {
    return Math.ceil(x / 5) * 5;
  }
  let tollsFromSite = 10; // get toll from else where if i need to
  let tolls = 25;
  let layOverCost = 350;
  let weightCost = 150;
  let legal = 40;
  let ChasOverWeight = 85;
  if (distance < 300 && distance > 0) {
    cost = Math.round(distance * 2 * 2.6);
    var costBase = cost;
    if (chassis === "20" && weight === "yes") {
      cost += ChasOverWeight + weightCost;
      chassisPrice = ChasOverWeight;
    } else {
      cost += 40 + weightCost;
      chassisPrice = legal;
    }
    // tolls will go in here when i have access
    if (tolls >= tollsFromSite) {
      tollPrice = tolls;
      cost += tollPrice;
    }
    if (fuelCost < 101 && fuelCost > 0) {
      cost += (cost * fuelCost) / 100;
    }
    cost = round(cost);
    console.log(cost);
    finalizedQuote(costBase, fuelCost, tollPrice);
    return;
    // =================================================================
  }
  // =================================================================
  else if (distance >= 300) {
    cost = Math.round(distance * 2 * 3.1);
    var costBase = cost;
    if (chassis === "20" && weight === "yes") {
      cost += ChasOverWeight + weightCost;
      chassisPrice = ChasOverWeight;
    } else {
      cost += 40 + weightCost;
      chassisPrice = legal;
    }
    // tolls will go in here when i have access
    if (tolls >= tollsFromSite) {
      tollPrice = tolls;
      cost += tollPrice;
    }
    if (fuelCost < 101 && fuelCost > 0) {
      cost += (cost * fuelCost) / 100;
    }
    cost = round(cost);
    console.log(cost);
    finalizedQuote(costBase, fuelCost, tollPrice, layOverCost);
    return;
  } else {
    alert("please enter a number greater than 0");
  }
};

submitEl.addEventListener("click", getQuote);
