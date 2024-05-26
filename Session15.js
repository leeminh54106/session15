//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

// let arr = prompt('MỜi bạn nhâp');

// let result = arr.split(',');

// let count = 0;

// for (let i = 0; i < result.length; i++) {
//     if (result[i] >= 10) {
//         count++;
//     }
// }

// console.log(`Có ${count} số nguyên lớn hơn hoặc bằng 10`);

// for (let element of numbers) {
//     arr.push(element);
// }


// for(let i = 0; i <= arr.length-1; i++)  {
//     arr.push(+numbers[i]);
// }




//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.
//Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
//và giá trị trung bình của các phần tử trong mảng.
// let intArr = [1, 3, 6, 7, 8, 9, 10, 11, 12, 13];

// console.log(intArr);

// let max = Math.max(...intArr);

// console.log(`Phần tử lớn nhất trong mảng là ${max} và vị trí của phần tử đó là ${intArr.indexOf(max)}`);

// let sum = 0;

// for (let i = 0; i < intArr.length; i++) {
//     sum += intArr[i];
//     console.log(sum)
// }

// let avg = sum / intArr.length;

// console.log(`Giá trị trung bình của các phần tử trong mảng là ${avg}`);


//Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.

// let int = prompt('Mời nhập vào:');

// let arr = int.split(',');

// let result = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
// }

// console.log(result);


//Viết chương trình đếm số nguyên âm trong một chuỗi.
// let negative = prompt("mời nhập dãy số nguyên âm");

// let result = negative.split(',');

// let arr = [];
// let count = 0;

// for (let i = 0; i < result.length; i++) {
//     if (result[i] < 0) {
//         arr.push(+result[i]);
//         count++;
//     }
// }

// console.log(`Có ${count} số nguyên âm là ${arr.join(',')}`);


//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array"
//còn lại in ra "Number X is not in the array".

// let intNumber = prompt('Mời nhập số ');

// let result = intNumber.split(',');

// let arr = [];

// for (let i = 0; i < result.length; i++) {
//     arr.push(+result[i]);
// }

// let int = prompt('Mời nhập vào số cần tìm');

// if (arr.includes(+int)) {
//     console.log(`Number ${int} is in the array`);
// } else {
//     console.log(`Number ${int} is not in the array`);
// }

//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không?
//Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.
//Việc xoá ở đây tức là dịch phần tử ở bên phải số đã nhập sang vị trí của số đó, và gán 0 cho phần tử cuối cùng của mảng.

// let numberInt = prompt('Mời nhập dãy số');

// let result = numberInt.split(',');

// let arr = [];

// for (let i = 0; i < result.length; i++) {
//     arr.push(+result[i]);
// }

// let int = prompt('Mời nhập vào số cần tìm');

// if (arr.includes(+int)) {
//     arr.splice(arr.indexOf(+int), 1);
// }

// console.log(arr);

//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.


// debugger;
// let numberInt = prompt('Mời nhập dãy số');

// let result = numberInt.split(',');

// let arr = [];

// for (let i = 0; i < result.length; i++) {
//     arr.push(+result[i]);
// }
// arr.sort((a, b) => b - a);



// console.log(arr);

//Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
//Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
//Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.

// let arrA = prompt('Mời nhập 10 số nguyên a');
// let arrB = prompt('Mời nhập 10 số nguyên b');

// let resultA = arrA.split(',');

// let resultB = arrB.split(',');

// let arr = [];

// for (let i = 0; i < resultA.length; i++) {
//     arr.push(+resultA[i]);
// }

// for (let i = 0; i < resultB.length; i++) {
//     arr.push(+resultB[i]);
// }

// let arrC = arr.join(',');

// console.log(arrC);

// let numbers = +prompt('Mời bạn nhập số');

// let flag = true;

// if (numbers < 2) {
//     flag = false;
// } else {
//     for (let i = 0; i < numbers - 1; i++) {
//         if (numbers % i === 0) {
//             flag = false;
//             break;
//         }
//     }
// }

// if (flag) {
//     console.log(`${numbers} là số nguyên tố`);
// }
// else {
//     console.log(`${numbers} ko phải là số nguyên tố`);
// }


// let numberStr = +prompt('Mời bạn nhập chuỗi số');
// let str = numberStr.toString();
// let sum = 0;
// for (let i = 0; i <= str.length - 1; i++) {
//     let convertNumber = Number(str[i]);
//     sum = sum + Math.pow(convertNumber, str.length);
//     console.log(sum);
// }

// if (sum === numberStr) {
//     alert(`${numberStr} là số armstrong`);
// } else {
//     alert(`${numberStr} ko phải là số armstrong`);
// }


