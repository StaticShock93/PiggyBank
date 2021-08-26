// Get input values from the page
// Controller function
// Has to push all values to screen, all data outputs pass through here
function getValues() {

    // get values from page
    let loanAmount = document.getElementById("loanAmount").value
    let paymentTerm = document.getElementById("paymentTerm").value
    let interestRate = document.getElementById("interestRate").value

    // parse for integers
    loanAmount = parseInt(loanAmount);
    paymentTerm = parseInt(paymentTerm);
    interestRate = parseInt(interestRate);




    // Validate integers
    if (Number.isInteger(loanAmount) && Number.isInteger(paymentTerm) && Number.isInteger(interestRate)) {
        // call generateValues()
        // let values = generateValues(loanAmount, paymentTerm, interestRate);

        let totalMonthlyPayment = (loanAmount) * (interestRate / 1200) / (1 - (1 + interestRate / 1200) ** (-paymentTerm));
        totalMonthlyPayment = totalMonthlyPayment.toFixed(2);

        // call displayData()
        displayTotalMonthlyPayment(totalMonthlyPayment);

        let totalPrincipal = loanAmount.toFixed(2);
        displayTotalPrincipal(totalPrincipal);

        let totalInterest = totalMonthlyPayment * paymentTerm - loanAmount;
        totalInterest = totalInterest.toFixed(2)
        displayTotalInterest(totalInterest);

        let totalCost = totalMonthlyPayment * paymentTerm;
        totalCost = totalCost.toFixed(2);
        displayTotalCost(totalCost);
    }



    if (interestRate <= 0) {
        let totalMonthlyPayment = loanAmount / paymentTerm;
        totalMonthlyPayment = totalMonthlyPayment.toFixed(2);
        displayTotalMonthlyPayment(totalMonthlyPayment);

        let totalPrincipal = loanAmount.toFixed(2);
        displayTotalPrincipal(totalPrincipal);

        let totalInterest = totalMonthlyPayment * paymentTerm - loanAmount;
        totalInterest = totalInterest.toFixed(2)
        displayTotalInterest(totalInterest);

        let totalCost = totalMonthlyPayment * paymentTerm;
        totalCost = totalCost.toFixed(2);
        displayTotalCost(totalCost);
    }
}


// Generate values
// Logic function
// function generateMonths(paymentTerm) {
//     let pbTermArray = [];

//     for (let index = paymentTerm; index <= paymentTerm; index++) {
//         pbTermArray.push(index);
//     }
// }

// function generaterTotalMonthlyPayment (loanAmount, paymentTerm, interestRate) {
//     let totalMonthlyPayment = (loanAmount)*(interestRate/12000)/(1-(1+interestRate/1200)**(-paymentTerm));

// }



// function generateTableValues(balance, term, rate) {

//     let pbArray = [];

//     let values = generateValues(balance) 


//     // Generate amoritization table values
//     // Generate total monthly payments
//     // Genereat total principal
//     // Genereat total interest
//     // Genereat total cost



// }






// Display functions
function displayTotalMonthlyPayment(totalMonthlyPayment) {
    document.getElementById("totalMonthlyPayments").innerHTML = "$" + totalMonthlyPayment;
}

function displayTotalPrincipal(totalPrincipal) {
    document.getElementById("totalPrincipal").innerHTML = "$" + totalPrincipal;
}

function displayTotalInterest(totalInterest) {
    document.getElementById("totalInterest").innerHTML = "$" + totalInterest;
}

function displayTotalCost(totalCost) {
    document.getElementById("totalCost").innerHTML = "$" + totalCost;
}


// create +5-incrementing loop to generate values to tableResults section
// store and then use the last index value and push total payment/principal/interest/cost section