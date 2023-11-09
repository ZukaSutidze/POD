
Button.addEventListener("click", function checkEmailValidity() {
    const emailInput = document.getElementById("Input");
    const errorMessage = document.getElementById("Error");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const Button = document.getElementById("Button")
    
    if (!emailPattern.test(emailInput.value)) {
        errorMessage.innerHTML = "Oops! Please check your email";
        errorMessage.style.color = 'red'
    } else
    {
        errorMessage.innerHTML = "Email Request Accepted";
        errorMessage.style.color = 'green'
    }
}
)
