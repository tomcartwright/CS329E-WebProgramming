/**
 * Created by tcartwright on 10/10/2016.
 */
var authPrinciple = function () {
  var re = new RegExp("[0-9]*(\.[0-9]+)?");
  var principle = document.getElementById("principle").value;
  if (re.exec(principle).length > 1) {
    return parseFloat(principle);
  }
  else {
    window.alert("Input is not a valid Principal!");
    return false
  }
};
var authAPR = function () {
  var re = new RegExp("[0-9]*(\.[0-9]+)?");
  var apr = document.getElementById("apr").value;
  if (re.exec(apr).length > 1) {
    return parseFloat(apr);
  }
  else {
    window.alert("Input is not a valid APR!");
    return false
  }
};
var authLoanTerm = function () {
  var re = new RegExp("[0-9]*");
  var loan_term = document.getElementById("loan-term").value;
  if (re.exec(loan_term).length === 1) {
    loan_term = parseFloat(loan_term);
    return Math.round(loan_term);
  }
  else {
    window.alert("Input is not a valid loan term!");
    return false
  }
};
var monthlyRate = function () {
  var apr = authAPR();
  if (apr) {
    return apr / 12.0;
  }
  return false
};
var calcMonthlyPayments = function () {
  var p = authPrinciple();
  var r = monthlyRate();
  var n = authLoanTerm();
  if (p && r && n) {
    return p * r / (1 - (1 / Math.pow(1 + r, n)));
  }
  return false
};
var sumMonthlyPayments = function () {
  var n = authLoanTerm();
  var r = calcMonthlyPayments();
  if (n && r) {
    return n * r;
  }
  return false
};
var totalInterestPaid = function () {
  var p = authPrinciple();
  var sum = sumMonthlyPayments();
  if (p && sum) {
    return sum - p;
  }
  return false
};
var showOutput = function () {
  var r = calcMonthlyPayments();
  var sum = sumMonthlyPayments();
  var totalInterest = totalInterestPaid();
  if (r && sum && totalInterest) {
    var m_pay = document.getElementById("monthly-payments");
    var p_sum = document.getElementById("p-sum");
    var t_int = document.getElementById("total-interest");
    m_pay.innerHTML = r.toFixed(2);
    p_sum.innerHTML = sum.toFixed(2);
    t_int.innerHTML = totalInterest.toFixed(2);
  }
  return null
}
var clearInputs = function () {
  var principle = document.getElementById("principle").value;
  var apr = document.getElementById("apr").value;
  var loan_term = document.getElementById("loan-term").value;
  var m_pay = document.getElementById("monthly-payments");
  var p_sum = document.getElementById("p-sum");
  var t_int = document.getElementById("total-interest");
  principle = "";
  apr = "";
  loan_term = "";
  m_pay.innerHTML = "";
  p_sum.innerHTML = "";
  t_int.innerHTML = "";
}