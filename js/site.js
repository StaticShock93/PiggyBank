// get values from the page and store as letant variables to global memory
// get loan amount, term(months), and interest rate
// get btn from page to run select
function getLoan() {
  const loan = document.getElementById("loanAmount").value;
  loan = parseInt(loan);
  if (Number.isInteger(loan)) return loan;
}
function getTerm() {
  const term = document.getElementById("term").value;
  term = parseInt(term);
  if (Number.isInteger(term)) return term;
}
function getRate() {
  const rate = document.getElementById("rate").value;
  rate = parseInt(rate);
  if (Number.isInteger(rate)) return rate;
}
function getPbTemplate() {
  const pbTemplate = document.getElementById("pbTemplate");
  return pbTemplate;
}

console.log(rate);

function totalMonthlyPayment(loan, term, rate) {
  const totalMonthlyPayment =
    (loan * (rate / 1200)) / (1 - (1 + rate / 1200) ** -term);
  return totalMonthlyPayment.toFixed(2);
}

function totalInterest(totalMonthlyPayment, term, loan) {
  const totalInterest = totalMonthlyPayment * term - loan;
  return totalInterest.toFixed(2);
}

function totalCost(loan, totalInterest) {
  let totalCost = loan + totalInterest;
  return totalCost.toFixed(2);
}
// fix numbers to 2 decimal spaces
totalMonthlyPayment = totalMonthlyPayment.toFixed(2);
loan = loan.toFixed(2);
// totalInterest = totalInterest.toFixed(2)
totalCost = totalCost.toFixed(2);
totalInterest = totalInterest.toFixed(2);
console.log(totalInterest);

// display numbers section
function displayTotals(totalMonthlyPayment) {
  document.getElementById("totalMonthlyPayments").innerHTML =
    "$" + totalMonthlyPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("totalPrincipal").innerHTML =
    "$" + loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("totalInterest").innerHTML =
    "$" + totalInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("totalCost").innerHTML =
    "$" + totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// display table section
function displayTable(...params) {
  let tableBody = document.getElementById("tableResults");
  let templateRow = document.getElementById("pbTemplate");
  tableBody.innerHTML = "";

  for (let index = 0; index <= term; index += 5) {
    let monthArr = [];
    for (let i = 0; i < term; i++) {
      monthArr.push(monthArr[i]);
    }
    let month = monthArr;

    let tableRow = document.importNode(templateRow.content, true);

    let rowCols = tableRow.querySelectorAll("td");
    rowCols[0].classList.add(month[index]);
    rowCols[0].textContent = month[index];

    rowCols[1].classList.add(month[index + 1]);
    rowCols[1].textContent = month[index + 1];

    rowCols[2].classList.add(month[index + 2]);
    rowCols[2].textContent = month[index + 2];

    rowCols[3].classList.add(month[index + 3]);
    rowCols[3].textContent = month[index + 3];

    rowCols[4].classList.add(month[index + 4]);
    rowCols[4].textContent = month[index + 4];

    // add all the rows to the table
    tableBody.appendChild(tableRow);
  }
}
// add event listener and run functionality
const btn = document.getElementById("btnSubmit");
const loan = btn.addEventListener("click", getLoan);
const term = btn.addEventListener("click", getTerm);
const rate = btn.addEventListener("click", getRate);
const pbTemplate = btn.addEventListener("click", getPbTemplate);

// btn.addEventListener('click', () => {
//     let loan = document.getElementById("loanAmount").value;
//     let term = document.getElementById("term").value;
//     let rate = document.getElementById("rate").value;
//     console.log(loan)

//     let totalMonthlyPayment = (loan * (rate / 1200)) / (1 - (1 + rate / 1200) ** -term);
//     let totalPrincipal = loan;
//     let totalInterest = (loan * rate) / 1200;
//     let totalCost = totalPrincipal + totalInterest;
//     console.log(totalPrincipal)

//     document.getElementById('totalMonthlyPayments').innerHTML = "$" + totalMonthlyPayment.toFixed(2)

//     // document.getElementById('totalPrincipal').innerHTML = '$' + totalPrincipal.toFixed(2)
//     // document.getElementById('totalInterest').innerHTML = '$' + totalInterest.toFixed(2)
//     // document.getElementById('totalCost').innerHTML = '$' + totalCost.toFixed(2)
// })
// btn.addEventListener('click', () => {
//     let loan = document.getElementById("loanAmount").value;
//     document.getElementById('totalPrincipal').innerHTML = "$" + totalInterest.toFixed(2)

// })

//

// use retrieved values to create needed generated values

// display the generated values to the page in the imported template and specified locations
// // display function should display all numbers at once
