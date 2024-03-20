window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
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

function setupInitialValues() {
  const defaultLoanAmount = 10000;
  const defaultLoanTerm = 12;
  const defaultLoanRate = 5;

  document.getElementById('loan-amount').value = defaultLoanAmount;
  document.getElementById('loan-years').value = defaultLoanTerm;
  document.getElementById('loan-rate').value = defaultLoanRate;
  
  update();
}

function update() {
  const values = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(`$${monthlyPayment}`);
}

function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12;
  const numberOfPayments = values.years * 12;
  
  const monthlyPayment = 
    (values.amount * monthlyRate) / 
    (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  
  return monthlyPayment.toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyPaymentElement = document.getElementById('monthly-payment');
  monthlyPaymentElement.textContent = monthly;
}
