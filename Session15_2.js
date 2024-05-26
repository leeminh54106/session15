//Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn, in ra các phần tử trong mảng.

// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];

// for (let i = 0; i < a.length; i++) {
//     console.log("row " + i);
//     for (let j = 0; j < a[i].length; j++) {
//         console.log(a[i][j]);
//     }


// }

//Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
//Ví dụ, nếu một mảng chứa các ký tự [ 'c', 's', 'c', '2', '6', '1' ]sau khi thực hiện đảo ngược sẽ là "162csc".

// let arr = ['c', 's', 'c', '2', '6', '1'];

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

//Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.

// let arrString = prompt('mời nhập chuỗi ký tự');

// let result = 0;

// for (let i = 0; i < arrString.length; i++) {
//     if (arrString[i] >= '0' && arrString[i] <= '9') {

//         result++;
//         console.log(arrString[i]);
//     }

// }

// console.log(result);


//Viết một chương trình nhập vào 2 chuỗi,
//sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

// let str1 = prompt('mời nhập chuỗi 1');

// let str2 = prompt('mời nhập chuỗi 2');

// if (str1 === str2) {
//     console.log('hai chuỗi giống nhau');
// } else {
//     console.log('hai chuỗi khác nhau');
// }



// Viết chương trình nhập vào một mảng ký tự,
//tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )

// let arrString = prompt('mời nhập chuỗi ký tự');

// for (let i = 0; i < arrString.length; i++) {
//     if (arrString[i] === '-') {
//         arrString = arrString.replace(arrString[i], '_');
//     }
// }
// console.log(arrString);
