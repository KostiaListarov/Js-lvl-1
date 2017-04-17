
// Задание №1 С помощью цикла while вывести все простые числа в промежутке от 0 до 100


var i = 1;


while (i >= 0 && i<=100 ){
    console.log(i++);
}

// Задание № 2 С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:

var num=10,
    i=0;
do{
    if(i===0){
        console.log(i+' - это ноль');
        i++;
    } else {
        if(i%2==0){
            console.log(i+' - четное число');
            i++;
        } else {
            console.log(i+' - нечетное число');
            i++;
        }
    }
} while(i<=num);

// Задание 3


for(i = 0;i <= 10 ; i++)

console.log(i);

// Задание 4
var result ='';


for (i = 0; i < 20; i++){

    console.log (result += 'x')
}

