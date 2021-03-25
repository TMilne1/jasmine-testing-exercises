window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
let loanAmountInputField = document.getElementById("loan-amount");
let termInYearsInputField = document.getElementById("loan-years");
let yearlyRateInputField = document.getElementById("loan-rate");
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
 
  let p = loanAmountInputField.value = 50000; //Amount of principle
  let y = termInYearsInputField.value = 5;
  let r = yearlyRateInputField.value = 5;
  calculateMonthlyPayment({ amount: p, years: y, rate: r })
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let monthlyPaymentField = document.getElementById("monthly-payment")
  monthlyPaymentField.innerText = `$${calculateMonthlyPayment(getCurrentUIValues())}`
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPayment;
  let p = values.amount //Amount of principle
  
  if(values.years <= 0){
    termInYearsInputField.value = 0.083
    values.years = 0.083
    alert("Term cannot be 0")
  }
  let n = values.years * 12; //total number of payments (years × 12)

  if (values.rate <= 0) {
    yearlyRateInputField.value = 0.01
    values.rate = 0.01
    alert("Rate cannot be 0")
  }
  let i = (values.rate / 100) / 12; //periodic interest rate (in our case yearly rate ÷ 12)
  

  monthlyPayment = (p * i) / (1 - Math.pow((1 + i), -n))
  monthlyPayment = ((Math.round(monthlyPayment * 100)) / 100).toFixed(2)

  return monthlyPayment.toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
