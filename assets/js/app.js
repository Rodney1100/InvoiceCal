var formEl = document.getElementById("form1");
var descriptionEl = document.getElementById("description1").value;
var distance = document.getElementById("distance1");
var submitEl = document.querySelector(".sub");
var quote = document.getElementById("quote").value;
document.querySelector('input[name="Weight"]:checked');
// var weight = document.getElementById("Weight").value;
// var chassis = document.getElementById("chassis").value;

const getQuote = (event) => {
  event.preventDefault();
  let tolls = 25;
  let layOver= 350
  let w = document.querySelector('input[name="Weight"]:checked').value;
  let l = document.querySelector('input[name="chassis"]:checked').value;
  if (distance.value < 300 && distance.value > 0) {
    cost = Math.round(distance.value * 2 * 2.6);
    console.log(cost);
    if (w === "yes" || w === "no") {
      cost +=150;
    }
    if (l === "20" && w === "yes") {
      console.log("yes + 20")
      cost += 40 + 85;
    }else{
      console.log('')
      cost+=40
    }
    if(w==='no'&& l==='40'){

    }
    console.log(cost);
    // tolls will go in here when i have access
    cost += tolls;
    console.log(cost);
  } else if (distance.value >= 300) {
    cost = Math.round(distance.value * 2 * 3.1);
    console.log(cost);
    if (w === "yes" || w === "no") {
      cost +=150;
    }
    if (l === "20" && w === "yes") {
      console.log("yes + 20")
      cost += 40 + 85;
    }else{
      console.log('')
      cost+=40
    }
    if(w==='no'&& l==='40'){

    }
    console.log(cost);
    // tolls will go in here when i have access
    cost += (tolls+ layOver);
    console.log(cost);


    console.log("more than 300");
  } else {
    alert("please enter a number greater than 0");
  }
};

submitEl.addEventListener("click", getQuote);
