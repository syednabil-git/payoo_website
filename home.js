const validPin = 1234

document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    console.log("add money btn")
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("bank-account").value
    const amountAdd = parseInt(document.getElementById("amount").value)
    const pinAdd = parseInt(document.getElementById("pin").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    if(accountNumber.length < 6){
        alert("please provide a valid account number")
        return;
    }
    if(pinAdd != validPin){
        alert("please provide valid pin number")
        return;
    }
    const totalNewAvailableBalance = amountAdd+availableBalance
    document.getElementById ("available-balance").innerText = totalNewAvailableBalance
})

// cashout money feature 
document.getElementById("withdraw-btn").addEventListener("click", function(e){
e.preventDefault()
const agentNumber = document.getElementById("agent-number").value
const pinAdd = parseInt(document.getElementById("withdrew-pin").value)
const amount = parseInt(document.getElementById("withdrew-amount").value)
const availableBalance = parseInt(document.getElementById("available-balance").innerText)
if(agentNumber.length < 6){
        alert("please provide a valid account number")
        return;
    }
    if(pinAdd != validPin){
        alert("please provide valid pin number")
        return;
    }
const totalNewAvailableBalance = availableBalance - amount
document.getElementById("available-balance").innerText = totalNewAvailableBalance
})


// toggle feature
document.getElementById("add-button").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cashout-button").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})