// Get Element value
function getElementValue(element) {
    const valueString = document.getElementById(element).value;
    return parseInt(valueString);
}

// Set Element value
function setInputElementValue(element, n) {
    document.getElementById(element).value = n;
}

// Get Element Inner Text
function getElementInnerText(element) {
    const valueString = document.getElementById(element).innerText;
    return parseInt(valueString);
}

// Set Element Inner Text
function setElementInnerText(element, n) {
    console.log(element + "=" + n)
    document.getElementById(element).innerText = n;
}

// Product Quantity
function updateProductQuantity(isIncrease, element) {
    let caseNumber = getElementValue(element);
    if (isIncrease) {
        caseNumber += 1;
    } else if (caseNumber > 0) {
        caseNumber -= 1;
    }
    setInputElementValue(element, caseNumber);
    return caseNumber;
}
function updateTotalPrice(quantity, element, phonePrice) {
    const totalPrice = quantity * phonePrice;
    document.getElementById(element).innerText = totalPrice;
}

// Subtotal
function subTotal() {
    const phonePrice = getElementInnerText("phone-price");
    const casePrice = getElementInnerText("case-price");
    const subTotal = phonePrice + casePrice;
    setElementInnerText("subtotal", subTotal);

    // tex
    const tex = Math.ceil(subTotal * 0.1);
    setElementInnerText("tax", tex);

    // Total
    const total = subTotal + tex;
    setElementInnerText("total", total);
}