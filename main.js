function calculateTip() {
    // Get bill amount and tip percentage from input fields
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercent = parseFloat(document.getElementById("tipPercent").value);

    //Validate if any input is empty
    if (isNaN(billAmount) || isNaN(tipPercent)) {
        alert("Please enter a valid bill amount and tip percentage.");
        return;
    }

    //Calculate tip amount (tip percentage as a decimal)
    const tipAmount = billAmount * (tipPercent / 100);

    //Calculate total amount (bill amount + tip)
    const totalAmount = billAmount + tipAmount;

    //Display the calculated tip and total amount in GBP
    document.getElementById("tipAmount").textContent = `Tip Amount: £${tipAmount.toFixed(2)}`;
    document.getElementById("totalAmount").textContent = `Total Amount: £${totalAmount.toFixed(2)}`;
}
  