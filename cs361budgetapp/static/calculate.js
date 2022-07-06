var income;
var spending;
var housing;
var utilities;
var transportation;
var food;
var debt;
var other;
function calcIncome(a, b) {
  if (a < 0 || b < 0) {
    alert("Please enter a positive number!");
    return
  };    
  income = parseInt(a, 10) + parseInt(b, 10);
  document.getElementById('monIncome').innerHTML = '$' + income;
};

function calcSpending(a, b, c, d, e, f) {
  if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0 || f < 0)  {
    alert("Please enter a positive number!");
    return
  }; 
  housing = parseInt(a, 10);
  utilities = parseInt(b, 10);
  transportation = parseInt(c, 10);
  food = parseInt(d, 10);
  debt = parseInt(e, 10);
  other = parseInt(f, 10);
  spending = housing + utilities + transportation + food + debt + other;
  document.getElementById('monSpending').innerHTML = '$' + spending;

    
  var xValues = ["Housing", "Utilities", "Transportation", "Food", "Debt", "Other"];
  var yValues = [housing, utilities, transportation, food, debt, other];
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145",
    "#FF5733"
  ];

  new Chart("barChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Monthly Spending Breakdown"
      }
    }
  });
    
  new Chart("pieChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: false,
        text: "Monthly Spending Breakdown"
      }
    }
  });
}

function calcTotal() {
  if (Number.isInteger(income) == false) {
    income = 0;
  }
  if (Number.isInteger(spending) == false) {
    spending = 0;
  }
  var total = income - spending;
  document.getElementById('total').innerHTML = '$' + total;
}

// Functions for calculator
function clearScreen() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
