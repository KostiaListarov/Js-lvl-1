/**
 * Created by Костя on 23.08.2016.
 */
"use strict";
var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2 /* Здесь получается 2 потому что переменная c роавна  увелечению перемееной а на 1
d = b++; alert(d); // 1 /* Возвращает старое значение, а потом увеличивает на 1

c = (2+ ++a); alert(c); // 5
//  по приоритету выполнится сначала ++(2+1=3) а потом +(2+3=5)
d = (2+ b++); alert(d);
/** 4 по приоритету выполнится сначала ++ (2+1=3) но вывоводится число до увелечения т.к это постфиксная форма а потом +
(2+2=4)*/

alert(a); // 3
alert(b); // 3

var a = 2;

var x = 1 + (a *= 2)
// x будет равен 5 (2*2)+1=5



for ( var i=1; i<=100; ++i) {
    var z=i%3, j=i%5, f="Bizz", m="Fizz", s=" ";
    if (j==0 && z==0) {
        console.log(i + s + m + f);
    } else if (j==0) {
        console.log(i + s + f);
    } else if (z==0) {
        console.log(i + s + m);
    } else {
        console.log(i);
    }
}