

/**
 * 1) Condition task: modulo 0.
 *
 * @param {number} num divident.
 * @return {boolean} boolean if modulo 0.
 */


 function isDivision(num) {
    return num % 5 === 0 || num % 3 === 0 || num % 2 === 0; 
    
}


 /**
 * 2.1) Switch task: 4 seasons.
 *
 * @param {number} num part of year.
 * @return {string} time of year.
 */

let num = 3;
let result;
switch (num) {
    case 1:
        result = "Зима";
        break;

    case 2:
        result = "Весна";
        break;

    case 3:
        result = "Лето";
        break;

    case 4:
        result = "Осень"; 
        break ;   
}

/**
 * 2.2) Switch task: season of month.
 *
 * @param {number} month.
 * @return {string} time of year.
 */

let month = 7;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Осень"); 
        break ;   
};


/**
 * 2.3) Switch task: day of week.
 *
 * @param {number} number of day.
 * @return {string} day of week.
 */


let number = prompt("Введите номер дня недели:");
number = Number(number);

switch (number) {
    case 1:
        alert("Понедельник");
        break;
    case 2:
        alert("Вторник");
        break;
    case 3:
        alert("Среда");
        break;
    case 4:
        alert("Четверг");   
        break;
    case 5:
        alert("Пятница");       
        break;
    case 6:
        alert("Суббота");       
        break; 
    case 7:
        alert("Воскресенье");        
        break; 

    default:
        alert("Ввод некорректен!!!");
        break;
};


/**
 * 2.4) Switch task: decade of month.
 *
 * @param {number} day number of day.
 * @return {string} day of week.
 */

let day = 17;
switch (true) {
    case day <= 10:
        console.log("Первая");
        break;
    case day <= 21:
        console.log("Вторая");
        break;
    case day <= 31:
        console.log("Третья");
        break;
};


/**
 * 3.1) Condition task: factorial.
 *
 * @param {number} n .
 * @return {string} n!.
 */

function getFactorial(num) {
    num = Number(num);
    let factorial = 1;
    for (i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}
alert(`Факториал: ${getFactorial(prompt("Факториал, ведите число:"))}`);


/**
 * 3.2) Condition task: Sequence sum.
 *
 * @param {number} prompt from user.
 * @return {string} sum .
 */

function getSequenceSum (num) {
    num = Number(num);
    let sum = 0;
    for (i = 1; i <= num; i++){
        sum += 1/i;
    }
    return sum;
}
alert(`Сумма чисел: ${getSequenceSum(prompt("Сумма чисел, введите число:"))}`);



/**
 * 3.3) Condition task: Multiplicity.
 *
 * @param {number} lim1 prompt from user.
 * @param {number} lim2 prompt from user.
 * @return {string} product.
 */

function getMultiplicity (lim1, lim2) {
    lim1 = Number(lim1);
    lim2 = Number(lim2);
    let mult = 1;
    for (i = lim1; i <= lim2; i++){
        mult *= i;
    } 
    return mult;
}
alert(`Произведение чисел: ${getMultiplicity(prompt("Произведение чисел, введите начальное число:"), prompt("Произведение чисел, введите конечное число:"))}`);


/**
 * 4.1) Function task: is Prime Number.
 *
 * @param {number} prompt number.
 * @return {boolean} boolean if Prime Number.
 */


function isPrimeNumber (num) {

    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
            break;
        };
    };
    return num > 1 && num % num === 0;
};

alert(`Число простое ?: ${isPrimeNumber(prompt("Простые числа, введите число:"))}`);


/**
 * 4.2) Function task: check Multiplicity.
 *
 * @param {number} num1 prompt dividend.
 * @param {number} num2 prompt divisor.
 * @return {boolean} boolean if % === 0.
 */


function checkMultiplicity (num1, num2) {

    return num1 % num2 === 0;
    
};

alert(`Кратность чисел: ${checkMultiplicity(prompt("Кратность чисел, введите делимое:"), prompt("Кратность чисел, введите делитель:"))}`);


/**
 * 4.3) Function task: check Triangle.
 *
 * @param {array} arr add all lenght of parties as array.
 * @return {boolean} triangle is true or false.
 */


function checkTriangle (arr) {

    return arr[0] > 0 && arr[0] < arr[1] + arr[2] && arr[1] > 0 && arr[1] < arr[0] + arr[2] && arr[2] > 0 && arr[2] < arr[0] + arr[1];

};

function setTriangle() {
    let triangleArr = [];
    for (let i = 0; i < 3; i++) {
            triangleArr[i] = prompt(`Введите длину ${i+1} стороны:`);
            triangleArr[i] = Number(triangleArr[i]);
        };
    return triangleArr;
};


alert(`Возможность построения треугольника: ${checkTriangle(setTriangle())}`);



/**
 * 4.4) Function task: Triangle and rectangle square.
 *
 * @param {array} arr add all lenght of parties as array.
 * @return {boolean} triangle is true or false.
 */



function getTriangleSquare (arr) {

        let p = (arr[0] + arr[1] + arr[2]) / 2;
        return Math.sqrt(p * (p - arr[0]) * (p - arr[1]) * (p - arr[2]), 2);

};

alert(`площадь треугольника: ${getTriangleSquare(setTriangle())}`);


function getRectangleSquare (arr) {

    return arr[0] * arr[1];

};


function setRectangle () {
    
    let rectangleArr = [];
    for (let i = 0; i < 2; i++) {
            if (i===0){
                rectangleArr[i] = prompt(`Введите ширину прямоугольника:`);
            } else {
                rectangleArr[i] = prompt(`Введите высоту прямоугольника:`); 
            }
                rectangleArr[i] = Number(rectangleArr[i]);
        };
    return rectangleArr;

}; 

alert(`площадь прямоугольника: ${getRectangleSquare(setRectangle())}`);




/**
 * 5.1) Object task. Student
 */
  
let Student = {
    firstName: "John",
    lastName: "Doe",
    gender: "Не определился",
    contacts: "Far far avay",
};

/**
 * 5.2) Object task. School
 */

let school = {
    faculty: "Law enforcement",
    cathedra: "New world order",
};

/**
 * 6.1) Create array .
 * 
 */


let numArr = [1, 2, 0, 4, 0, 6, 7, 8, 9, 0,];

console.log(`Размер массива: ${numArr.length}`);

for (let i = 0; i < numArr.length; i++) {
    if (i % 2 === 0) {
        console.log(`Элементы с четными индексами: ${numArr[i]}`);
    };
};

for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
        console.log(`Только четные элементы: ${numArr[i]}`);
    };
};

let zeroElements = 0;
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === 0) {
        console.log(`Zero elements indexes: ${i}`);
        zeroElements++;
    };

};
console.log(`Количество нулевых элементов: ${zeroElements}`);


/**
 * 7) Create function-constructor.
 *
 * @param {string} books info.
 * @return {object} books.
 * 
*/
  
function Book (author, title, year, publisher,) {

    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;

}
function Ebook(eFormat, eNumber) {

    this.eFormat = eFormat;
    this.eNumber = eNumber;

}

const book1 = new Book("Doe, John", "Gimli", "1989", "SovokIzdat",);
Ebook.prototype = book1;
const eBook1 = new Ebook("ePub", "0923.4",);


/**
 * 8) Array constructor.
 *
 */



function MyArray() {

    this.length = 0;

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
        
    };

    this.push = function () {
        
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length ++;
        }
        return this.length
    };

    this.pop = function () {

        
        if (this.length > 0) {
            let delValue = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return `Delete "${delValue}"`;
        } else {
            return "Empty Array";
        }

    };


    this.forEach = function (ethFunc) {
        
        for (let i = 0; i < this.length; i++) {
            ethFunc(this[i]);
            
        }
        return this.length;
    };
    
    
};


const myArr1 = new MyArray ("a","s","d","f","g");
const myArr2 = new MyArray ("a2","s2","d2","f2","g2");