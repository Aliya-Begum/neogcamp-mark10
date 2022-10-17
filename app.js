var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var btnCheck = document.querySelector("#check-button");
var errMessage = document.querySelector("#error-message");
var numberOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];


function checkClickHandler(){
    errMessage.style.display = "none";
    var billAmt = Number(billAmount.value);
    var cash = Number(cashGiven.value);
    if(billAmt && cash){
        if(billAmt> 0 && cash>0){
            if(billAmt <= cash){
                var amountToBeReturned = cash - billAmt;
                calculateNoOfNotes(amountToBeReturned);
            }
            else{
                showErrorMessage("cash given should be greater than or eqaul to bil amount");
             }
        }
        else{
            showErrorMessage("bill amount or cash given can not be less than or equal to 0.")
        }
    }
    else{
        showErrorMessage("Please fill out both the fields");
    }
}

function showErrorMessage (message){
    errMessage.style.display = "block";
        errMessage.innerText = message;
}

function calculateNoOfNotes(amountToBeReturned){
    for(let i= 0; i<availableNotes.length; i++){
        var noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes; 
    }
}

btnCheck.addEventListener('click', checkClickHandler);