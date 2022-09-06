var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var btnCheck = document.querySelector("#check-button");
var errMessage = document.querySelector("#error-message");
var availableNotesWeHave = document.querySelectorAll(".available-notes");
console.log(availableNotes);

var availableNotes =[2000, 500, 100, 20, 10, 5, 1];

btnCheck.addEventListener("click", function getValidateBillAmountAndCashGiven(){
   
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const amountToBeReturned = (cashGiven.value- billAmount.value); //2060-50 = 2010
             calculateNoOfNotes(amountToBeReturned);
        }else {
             errMessage.innerText = "cash amount should be greater than bill amount";
        }
    
    }else {
        errMessage.innerText = "Invallid bill Amount";
    
    }}
)
