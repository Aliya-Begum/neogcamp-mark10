var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var btnCheck = document.querySelector("#check-button");
var errMessage = document.querySelector("#error-message");
var numberOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

btnCheck.addEventListener("click", function checkClickHandler() {
    errMessage.style.display = "none";
    if (billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value){
           var amountToBeReturned = cashGiven.value - billAmount.value;
           calculateNoOfNotes(amountToBeReturned);
        }
        else{
            showErrorMessage("cash given should atleast be greater than or equal to bill amount");
        }
    }
    else {
       showErrorMessage("bill amount should be greater than zero");
    }
})

function showErrorMessage (message){
    errMessage.style.display = "block";
        errMessage.innerText = message;
}

function calculateNoOfNotes(amountToBeReturned){
    for(let i= 0; availableNotes.length; i++){
        var noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes; 
    }
}