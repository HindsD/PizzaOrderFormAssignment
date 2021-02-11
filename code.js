$(document).ready(function(){
    $("form").submit(placeOrder);
});

function placeOrder(event) {
    event.preventDefault();

    $("span#name1").text($("input#name").val());
    $("span#address1").text($("input#address").val());
    $("span#phone1").text($("input#phone").val());

    $("span#size").text($("input[name=size]:checked").val());

    $("span#crust").text($("input[name=crust]:checked").val());



    //////////////////////////////////////////////////////////////////////////////////////////////
    let meatBoxes = $("input[name=meats]:checked");
    let vegBoxes = $("input[name=veg]:checked");
    let sizeBoxes = $("input[name=size]:checked");

    let total = 0;
    let pizzaPrice = 0;
    sizeBoxes.each(function () {
        pizzaPrice += $(this).data("fee");
    });
    meatBoxes.each(function () {
        total += $(this).data("price");
    });
    vegBoxes.each(function () {
        total += $(this).data("price");
    });



    let pickedMeat = "";
    let pickedVeg = "";
    meatBoxes.each(function () {
        pickedMeat += $(this).val() + " ";
    });
    vegBoxes.each(function () {
        pickedVeg += $(this).val() + " ";
    });


    $("span#meats").text(pickedMeat);
    $("span#veg").text(pickedVeg);
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let subtotal = total + pizzaPrice;
    $("span#subtotal").text("$"+subtotal.toFixed(2));
    let subtax = subtotal*0.051;
    $("span#subtotalTax").text("$"+subtax.toFixed(2));
    let grandTotal =0;
    $("span#grandTotal").text("$"+(subtotal+subtax+2).toFixed(2));

}