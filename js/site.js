// get button, add event listener onclick
// ------------------generate values functions----------------
const btn = document.getElementById("btnSubmit");
btn.addEventListener("click", runShit);
function runShit() {
  function getLoan() {
    let loan = document.getElementById("loanAmount").value;
    loan = parseFloat(loan);
    return loan;
  }
  function getTerm() {
    let term = document.getElementById("term").value;
    term = parseFloat(term);
    return term;
  }
  function getRate() {
    let rate = document.getElementById("rate").value;
    rate = parseFloat(rate);
    return rate;
  }
  function getPbTemplate() {
    let pbTemplate = document.getElementById("pbTemplate");
    return pbTemplate;
  }

  function totalMonthlyPayment(loan, term, rate) {
    let totalMonthlyPayment =
      (loan * (rate / 1200)) / (1 - (1 + rate / 1200) ** -term);
    return totalMonthlyPayment.toFixed(2);
  }

  function totalCost(loan, totalInterest) {
    totalInterest = parseFloat(totalInterest);
    loan = parseFloat(loan);
    loan += totalInterest;
    return loan.toFixed(2);
  }

  function months(term) {
    const months = [];
    for (let i = 1; i <= term; i++) {
      months.push(i);
    }
    return months;
  }

  function paymentsArray(totalMonthlyPayment, term) {
    const paymentsArray = [];
    for (let i = 0; i <= term; i++) {
      paymentsArray.push(
        "$" +
          totalMonthlyPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    }
    return paymentsArray;
  }

  function remainingBalanceArray(loan, rate, term, totalMonthlyPament) {
    const remainingBalanceArray = [];
    let remainingBalance = loan;
    for (let i = 0; i < term; i++) {
      let monthlyInterest = remainingBalance * (rate / 100);
      monthlyInterest /= 12;
      let principalAmount = totalMonthlyPament - monthlyInterest;
      remainingBalance -= principalAmount;
      remainingBalanceArray.push(
        "$" +
          remainingBalance
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    }
    return remainingBalanceArray;
  }

  function interestArray(loan, totalMonthlyPayment, term, rate) {
    const interestArray = [];
    let remainingBalance = loan;
    console.log(term);
    for (let i = 0; i <= term; i++) {
      let monthlyInterest = remainingBalance * (rate / 100);
      monthlyInterest /= 12;
      let principalAmount = totalMonthlyPayment - monthlyInterest;
      remainingBalance -= principalAmount;
      interestArray.push(
        "$" +
          monthlyInterest
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    }
    return interestArray;
  }

  function totalInterest(loan, totalMonthlyPayment, term, rate) {
    const interestArray = [];
    let remainingBalance = loan;
    console.log(term);
    for (let i = 0; i <= term; i++) {
      let monthlyInterest = remainingBalance * (rate / 100);
      monthlyInterest /= 12;
      let principalAmount = totalMonthlyPayment - monthlyInterest;
      remainingBalance -= principalAmount;
      interestArray.push(monthlyInterest);
    }
    let sumOfInterest = interestArray.reduce((a, b) => a + b);
    console.log(sumOfInterest);
    return sumOfInterest.toFixed(2);
  }

  function principalArray(loan, rate, term, totalMonthlyPament) {
    const principalArray = [];
    let remainingBalance = loan;
    for (let i = 0; i <= term; i++) {
      let monthlyInterest = remainingBalance * (rate / 100);
      monthlyInterest /= 12;
      let principalAmount = totalMonthlyPament - monthlyInterest;
      remainingBalance -= principalAmount;
      principalAmount = principalAmount.toFixed(2);
      principalArray.push(
        "$" + principalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    }
    console.log(principalArray);
    return principalArray;
  }

  function totalMonthlyInterest(loan, rate, term, totalMonthlyPayment) {
    const interestArray = [];
    const monthlyInterestArray = [];
    let monthlyTotal = 0;
    let remainingBalance = loan;
    console.log(term);
    for (let i = 0; i <= term; i++) {
      let monthlyInterest = remainingBalance * (rate / 100);
      monthlyInterest /= 12;
      let principalAmount = totalMonthlyPayment - monthlyInterest;
      remainingBalance -= principalAmount;
      interestArray.push(monthlyInterest);
    }
    interestArray.forEach((el) => {
      monthlyTotal += el;
      monthlyTotal = monthlyTotal;
      monthlyInterestArray.push(
        "$" +
          monthlyTotal
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    });
    return monthlyInterestArray;
  }

  //------------------------dipslay functions------------------------
  // ----display totals section
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

  // ------display table section
  function displayTable(
    term,
    months,
    paymentsArray,
    remainingBalanceArray,
    interestArray,
    principalArray,
    monthlyInterestTotal
  ) {
    let tableBody = document.getElementById("tableResults");
    let templateRow = document.getElementById("pbTemplate");
    tableBody.innerHTML = "";

    for (let index = 0; index < term; index += 1) {
    

      let tableRow = document.importNode(templateRow.content, true);

      let rowCols = tableRow.querySelectorAll("td");

      rowCols[0].textContent = months[index];

      rowCols[1].textContent = paymentsArray[index];

      rowCols[2].textContent = principalArray[index];

      rowCols[3].textContent = interestArray[index];

      rowCols[4].textContent = monthlyInterestTotal[index];

      rowCols[5].textContent = remainingBalanceArray[index];

      // add all the rows to the table
      tableBody.appendChild(tableRow);
    }
  }

  //---------------- function invokations----------------
  const loan1 = getLoan();
  const term1 = getTerm();
  const rate1 = getRate();
  const pbTemplate1 = getPbTemplate();
  const totalMonthlyPayment1 = totalMonthlyPayment(loan1, term1, rate1);
  // const totalInterest1 = totalInterest(loan1, rate1, term1);
  const monthlyInterest1 = interestArray(
    loan1,
    totalMonthlyPayment1,
    term1,
    rate1
  );
  console.log(typeof monthlyInterest1.reduce((a, b) => a + b));

  const totalInterest1 = totalInterest(
    loan1,
    totalMonthlyPayment1,
    term1,
    rate1
  );
  console.log(totalInterest1);
  const totalCost1 = totalCost(loan1, totalInterest1);
  const months1 = months(term1);
  const payments1 = paymentsArray(totalMonthlyPayment1, term1);
  const remainingBalanceArray1 = remainingBalanceArray(
    loan1,
    rate1,
    term1,
    totalMonthlyPayment1
  );
  const principalArray1 = principalArray(
    loan1,
    rate1,
    term1,
    totalMonthlyPayment1
  );
  const monthlyInterestTotal1 = totalMonthlyInterest(
    loan1,
    rate1,
    term1,
    totalMonthlyPayment1
  );
  const displayTable1 = displayTable(
    term1,
    months1,
    payments1,
    remainingBalanceArray1,
    monthlyInterest1,
    principalArray1,
    monthlyInterestTotal1
  );
  const displayTotals1 = displayTotals(
    totalMonthlyPayment1,
    totalInterest1,
    totalCost1,
    loan1
  );
}
