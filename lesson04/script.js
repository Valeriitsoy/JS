function numbers() {
    let number = prompt("введите число от 0 до 999");
    if (number > 999) {
        console.log(" Вы ввели число больше 999");
    } else {
        let obj = {
            units: number[2],
            decades: number[1],
            hundreds: number[0]
        }
        console.log(obj);
    }
}
numbers()