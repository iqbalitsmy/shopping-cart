
document.getElementById("btn-case-plus").addEventListener("click", function () {
    const quantity = updateProductQuantity(true, "case-number-field");
    updateTotalPrice(quantity, "case-price", 59);
    subTotal();
});
document.getElementById("btn-case-minus").addEventListener("click", function () {
    const quantity = updateProductQuantity(false, "case-number-field");
    updateTotalPrice(quantity, "case-price", 59);
    subTotal();
});
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const quantity = updateProductQuantity(true, "phone-number-field");
    updateTotalPrice(quantity, "phone-price", 1219);
    subTotal();
});
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const quantity = updateProductQuantity(false, "phone-number-field");
    updateTotalPrice(quantity, "phone-price", 1219);
    subTotal();
});
