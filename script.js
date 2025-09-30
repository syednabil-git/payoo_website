// login button 
document.getElementById("loginButton")
.addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber = 1234567890
    const pinNumber = 7770
    const mobilNumberValue = document.getElementById("mobile-number").value 
    const mobilNumberValueConverted = parseInt(mobilNumberValue)
    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    console.log(mobilNumberValueConverted,pinNumberValueConverted)

    if(mobilNumberValueConverted === mobileNumber && pinNumberValueConverted ===pinNumber){
       window.location.href = "./home.html"}
       else{
        alert("Invlaid")
       } 
    
})