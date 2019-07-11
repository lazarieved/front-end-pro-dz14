var arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
var positive = [];
var negative = [];
var sum = 0;
var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);
var sumPositiveEven = 0;
var quantityPositiveEven = 0;
var sumPositiveOdd = 0;
var quantityPositiveOdd = 0;
var onlyFour = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positive.push(arr[i]);
        sum += arr[i];        
    }  
    if (arr[i] < 0) {
        negative.push(arr[i]);     
    } 
    
}
for (j = 0; j < positive.length; j++){
    if (positive[j] % 2 === 0) {
        quantityPositiveEven++;
        sumPositiveEven += positive[j];
    }
    if (positive[j] % 2 === 1) {
        quantityPositiveOdd++;
        sumPositiveOdd += positive[j];
    }
    if (positive[j] === 4) {
        onlyFour++;
    }
}

alert ('Кол-во положительных элементов: ' + positive.length + ', Сумма положительных элементов: ' + sum);
alert ('Максимальное значение: ' + max + ', Минимальное значение: ' + min);
alert ('Кол-во отрицательных элементов: ' + negative.length);
alert ('Кол-во четных положительных элементов: ' + quantityPositiveEven + ', Сумма четных положительных элементов: ' + sumPositiveEven );
alert ('Кол-во нечетных положительных элементов: ' + quantityPositiveOdd + ', Сумма нечетных положительных элементов: ' + sumPositiveOdd );
alert ('Кол-во четвёрок в массиве: ' + onlyFour)