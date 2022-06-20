// //1. Отфильтруйте отрицательные элементы массива

// //1.1
// let arr1=[10,-5,20,-6,30,-7,40,-8,50];
// let res1_1=arr1.filter(el => el > 0);
// //console.log(res1_1)

// //1.2
// let res1_2=[]
// arr1.forEach(el => {if(el>0) res1_2.push(el)});
// //console.log(res1_2);

// //2. Найдите сумму элементов массива значение которых меньше 100;

// //2.1
// let arr2 = [50, 120, 5, 101, 10, 12];
// let res2_1=arr2.filter(el => el<100).reduce((previousValue,currentValue) => previousValue + currentValue);
// //console.log(res2_1);

// //2.2

// function sumOfElem(array,lim=100) {
//     let sumArr=0;
//     array.forEach(el => {if(el<lim) sumArr+=el});
//     console.log(sumArr);
//     return sumArr;
// }

// //sumOfElem(arr2);

// //3. Уменьшите каждый элемент массива на 3%

// let arr3=[100, 200, 300, 400, 500, 600];
// function decreaseEl(array,coef=0.03){
//     let res3 = array.map(el => el-=(el*=0.03));
//     console.log(arr3);
//     console.log(res3);
// }

// //decreaseEl(arr3);

// //4. Если все елементы массива меньше 100, увеличить их на 5%

// let arr4=[100, 200, 300, 400, 500, 600]

// let res4 = arr4.every(el => el>=100);
// console.log(res4);
// if(res4 == true){
//     let newArr
//     newArr =arr4.map(el => el+=(el*=0.05));
//     console.log(newArr)
// }


//5 Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное")

// let word1='madam', word2='array';
// function palindrome(word) {
//     word === word.split('').reverse().join('')
//     ? console.log('Да')
//     : console.log('Нет')
// }
// palindrome(word1);
// palindrome(word2);

//!6 Соедините две строки в одну и переверните наоборот

// let str1='Lorem ipsum dolor sit amet consectetur adipisicing elit.';
// let str2='Dolorem enim fuga sit aliquid voluptatem';
// let strNew = str1.split(' ').concat(str2.split(' ')).reverse().join(' ');
// console.log(strNew);

