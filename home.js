const validPin = 1234
const transactionData = []

// function to get input value
function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}
// function to get innertext
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}
// function to set innertext
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}
//function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display ="none"
    }
    document.getElementById(id).style.display="block"
}
// function to toggle buttons
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn")

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
      document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

// add money section
document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    console.log("add money btn")
    const bank = getInputValue ("bank")
    const accountNumber = getInputValue("bank-account")
    const amountAdd = getInputValueNumber("amount")
    if(amountAdd<=0){
      alert("invalid amount")
      return;
    }
    const pinAdd = getInputValueNumber("pin")
    const availableBalance = getInnerText("available-balance")
    if(accountNumber.length < 6){
        alert("please provide a valid account number")
        return;
    }
    if(pinAdd != validPin){
        alert("please provide valid pin number")
        return;
    }
    const totalNewAvailableBalance = amountAdd+availableBalance
    setInnerText(totalNewAvailableBalance)

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
})

// cashout money feature 
document.getElementById("withdraw-btn").addEventListener("click", function(e){
e.preventDefault()
const agentNumber = getInputValue("agent-number")
const pinAdd = getInputValueNumber("withdrew-pin")
const amount = getInputValueNumber("withdrew-amount")
const availableBalance = getInnerText("available-balance")
if(amount<=0 || amount>availableBalance){
  alert("invalid amount")
  return
}
if(agentNumber.length < 6){
        alert("please provide a valid account number")
        return;
    }
    if(pinAdd != validPin){
        alert("please provide valid pin number")
        return;
    }
const totalNewAvailableBalance = availableBalance - amount
setInnerText(totalNewAvailableBalance)

 const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
})

document.getElementById("transaction-button").addEventListener("click",function(){
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
         <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
            <div class="flex items-center">
              <div class=" p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" class="mx-auto"/>
              </div>
              <div>
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>

            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        `
        transactionContainer.appendChild(div)    
    }
})


// toggle feature
document.getElementById("add-button").addEventListener("click", function(){
  const forms = document.getElementsByClassName("form") 
  handleToggle("add-money-parent")
  handleButtonToggle("add-button")
})
document.getElementById("cashout-button").addEventListener("click", function(){
  handleToggle("cash-out-parent")
  handleButtonToggle("cashout-button")  
})
document.getElementById("transfermoney-button").addEventListener("click", function(){
  handleToggle("transfer-money-parent")
  handleButtonToggle("transfermoney-button") 
})
document.getElementById("bonus-button").addEventListener("click", function(){
  handleToggle("get-bonus-parent")
  handleButtonToggle("bonus-button") 
})
document.getElementById("paybill-button").addEventListener("click", function(){
  handleToggle("pay-bill-parent")
  handleButtonToggle("paybill-button") 
})
document.getElementById("transaction-button").addEventListener("click", function(){
  handleToggle("transaction-parent")
  handleButtonToggle("transaction-button") 
})