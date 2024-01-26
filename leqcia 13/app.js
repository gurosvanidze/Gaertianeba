// let user = {
//     name: "guro",
//     surname: "svanidze",
//     age: 27,
//     isadult: true,
//   };
//   alert(user.age)
// let age = prompt('how old are you?');
// console.log(Number(age)); // პრომპტში ჩაწერილი ნებისმიერი რამ გვიბრუნდება სტრინგად, ნამბერში გადავიყვანეთ აქ პირდაპირ რომ ნამბერად დაგვიბრუნდეს.


// let isAdult = confirm("Are you more +18?");
// console.log(isAdult);

// console.log(1 / 3);
// console.log(10/3);
// console.log(parseInt(10/3));
// console.log(5 % 2); // ნაშთი თუ გვინდა ამათი გაყოფიდან

// let counter = 2;
// counter++; // იგივეა რაც ზემოთ ჩაწერილი.
// counter--; // იგივეა რაც counter = counter - 1


// let n = 2;
//  n = n + 5; // 7

//  let n = 2;
// n += 5; // ეს ჩანაწერი იგივეა რაც ეს n = n + 5;

// n *= 5; // 2 * 5
// n /= 2; // 2/2 იგივეა გაყოფაზეც და გამრავლებაზეც.


// let a = 1;
// let b = 2;

// let c = ++a;
// let d = c++;

// alert(a); // 2
// alert(c); // 3
// alert(d++); // 2


// let a = 5;
// let b = 5;

// console.log(a <= b); // ბულეანში იქნება true
// console.log(a == b); // ტოლია true. შედარება ხდება მნიშვნელობების მიხედვით

// let a = '5';
// let b = 5;
// console.log(a == b); // ტოლია true. შედარება ხდება მნიშვნელობების მიხედვით 

let a = '5';
let b = 5;
console.log(a === b); // false, ტიპებიც და მნიშვნელობებიც უნდა უდრიდენ რადგან ა არის სტრინგი ბ ნამბერი.
// = // მინიჭება
// == // არამკარცრი შედარება, მნიშვნელობა უნდა იყოს ტოლი.
// === // მკაცრ შედარებას ტიპიც და მნიშვნელობაც ტული უნდა იყოს
console.log(a != b); // false აქ ტიპებით უდრიან ერთმანეთს
console.log(a !== b); // true. ორი ტოლობა ნიშნავს რომ არც მნიშვნელობებით არ უნდა უდრიდეს ერთმანეთს და არც ტიპებით


// alert('glow' > 'glee');
// 1) G > G // ertmanetis tolia
// 2) l > l // esec tolia
// 3) o > e 

// a.length > b.length // ეს ითვლის უკვე სიმბოლოებს რომელში უფრო მეტია.
let tanxa;
let percent;
// tanxa > 10000   15% თუ არა, მაშინ 10%
if (tanxa > 10000){
    percent = 15;
} else {
    percent = 10;
}


let num = +prompt('Please enter number');
if (isNaN(num)) {
    alert('the value is not number, please, enter valid number');
}
else if(num > 0) {
    alert('the number is positive');
} else if(num < 0){
    alert('the number is negative');
} else {
    alert('the number is zero');
}


// let accessAlowed;
let age = +prompt('How old are you');
// if (age > 18) {
//     accessAlowed = true;
// } else {
//     accessAlowed = false;
// }
// let accessAlowed = age > 18 ? true : false
let accessAlowed = age > 18; //შემოკლებული ვარიანტი ზემოთას