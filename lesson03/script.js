//let i = 0;
//
//while (i < 100) {
//    console.log(i);
//    i++;
//}



function countBasketPrice() {

    let cart = [];
    console.log(cart)

    while (true) {

        let value = prompt("Введите цену, для подтверждения нажмите ОК");

        if (value === "" || value === null || value === '0') break;

        cart.push(+value);
    }

    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += i;
    }
    return sum;
}

alert(`Стоимость корзины ${countBasketPrice()}`);
