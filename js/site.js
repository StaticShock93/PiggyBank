// get values from the page and store as letant variables to global memory
// get loan amount, term(months), and interest rate
// get btn from page to run select
const btn = document.getElementById("btnSubmit");
btn.addEventListener("click", runShit);
function runShit() {
  const loan1 = getLoan();
  const term1 = getTerm();
  const rate1 = getRate();
  const pbTemplate1 = getPbTemplate();
  const totalMonthlyPayment1 = totalMonthlyPayment(loan1, term1, rate1);
  // const totalInterest1 = totalInterest(totalMonthlyPayment1, term1, loan1);
  const totalInterest1 = generateInterest(loan1, term1, rate1);
  const totalCost1 = totalCost(loan1, totalInterest1);
  const displayTotals1 = displayTotals(
    totalMonthlyPayment1,
    totalInterest1,
    totalCost1,
    loan1
  );
  const months1 = months(term1);
  const displayTable1 = displayTable(term1, months1);

  function getLoan() {
    let loan = document.getElementById("loanAmount").value;
    loan = parseInt(loan);
    if (Number.isInteger(loan)) return loan;
  }
  function getTerm() {
    let term = document.getElementById("term").value;
    term = parseInt(term);
    if (Number.isInteger(term)) return term;
  }
  function getRate() {
    let rate = document.getElementById("rate").value;
    rate = parseInt(rate);
    if (Number.isInteger(rate)) return rate;
  }
  function getPbTemplate() {
    let pbTemplate = document.getElementById("pbTemplate");
    return pbTemplate;
  }

  function generateInterest(loan, term, rate) {
    let interest = loan * (rate / 100) * (term / 12);
    interest = parseInt(interest);
    return interest.toFixed(2);
  }

  function totalMonthlyPayment(loan, term, rate) {
    let totalMonthlyPayment =
      (loan * (rate / 1200)) / (1 - (1 + rate / 1200) ** -term);
    return totalMonthlyPayment.toFixed(2);
  }

  // function totalInterest(totalMonthlyPayment, term, loan) {
  //   let totalInterest = totalMonthlyPayment * term - loan;
  //   return totalInterest.toFixed(2);
  // }

  function totalCost(loan, totalInterest) {
    totalInterest = parseFloat(totalInterest);
    loan = parseInt(loan);
    console.log(typeof loan);
    console.log(typeof totalInterest);
    loan += totalInterest;
    console.log(typeof loan);
    return loan.toFixed(2);
  }

  function months(term) {
    const months = [];
    for (let i = 1; i <= term; i++) {
      months.push(i);
    }
    return months;
  }

  // display numbers section
  function displayTotals(totalMonthlyPayment, totalInterest, totalCost, loan) {
    document.getElementById("totalMonthlyPayments").innerHTML =
      "$" +
      totalMonthlyPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("totalPrincipal").innerHTML =
      "$" + loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("totalInterest").innerHTML =
      "$" + totalInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("totalCost").innerHTML =
      "$" + totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // display table section
  function displayTable(term, months) {
    let tableBody = document.getElementById("tableResults");
    let templateRow = document.getElementById("pbTemplate");
    tableBody.innerHTML = "";

    for (let index = 0; index <= term; index += 1) {
      // let monthArr = [];
      // for (let i = 0; i < term; i++) {
      //   monthArr.push(monthArr[i]);
      // }
      // let month = monthArr;

      let tableRow = document.importNode(templateRow.content, true);

      let rows = tableRow.querySelectorAll("tr");
      let rowCols = tableRow.querySelectorAll("td");

      // rowCols[0].classList.add(months[index]);
      rowCols[0].textContent = months[index];

      // rowCols[1].classList.add(months[index]);
      rowCols[1].textContent = months[index];

      // rowCols[2].classList.add(months[index]);
      rowCols[2].textContent = months[index];

      // rowCols[3].classList.add(months[index]);
      rowCols[3].textContent = months[index];

      // rowCols[4].classList.add(months[index]);
      rowCols[4].textContent = months[index];

      // rowCols[5].classList.add(months[index]);
      rowCols[5].textContent = months[index];

      // add all the rows to the table
      tableBody.appendChild(tableRow);
    }
  }
}

// add event listener and run functionality

// btn.addEventListener("click", loan1);
// btn.addEventListener("click", term1);
// btn.addEventListener("click", rate1);
// btn.addEventListener("click", pbTemplate1);
// btn.addEventListener("click", totalMonthlyPayment1);
// btn.addEventListener("click", totalInterest1);
// btn.addEventListener("click", totalCost1);
// btn.addEventListener("click", displayTotals1)
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
