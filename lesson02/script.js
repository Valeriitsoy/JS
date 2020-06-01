//var a = 1,
//    b = 1,
//    c, d;
//c = ++a; 
//alert(c); // 2  с = 1 + 1, возвращает новое значение
//
//d = b++;
//alert(d); // 1 возвращает значение до увелечения
//
//c = (2 + ++a); 
//alert(c); // 5  с = (2 + 1+ 2)  , ++a = 3
//
//d = (2 + b++); // d = 2 + b++(возвращет старое значение 2) , b++ = 3, d = 4
//alert(d); // 4
//
//alert(a); // 3   a = 3 
//
//alert(b); // 3   b = 3 
 




//var a = 2;
//var x = 1 + (a *= 2); // x = 1 + (a = a * 2) , x = 5





let a = 7;
let b = -2;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a >= 0 && b < 0) {
    console.log(a + b)
} else if (a < 0 && b >= 0) {
    console.log(a + b)
} else {
    console.log(a * b);
}


