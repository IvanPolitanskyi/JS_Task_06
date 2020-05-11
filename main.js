'use strict'
let circle = new Circle(10);

function Circle(radius) {
    this.radius = radius;
    this.calculateSquare = function () {
        return Math.PI * Math.pow(this.radius, 2);
    }

    this.calculeteLength = function () {
        return this.radius * 2 * Math.PI;
    }
}

console.log('Радиус окружности ', circle.calculateSquare());
console.log('Длина окружности ', circle.calculeteLength());

let twoNumbers = new AvarageOfTwo(100, 14);

function AvarageOfTwo(a, b) {
    this.a = a;
    this.b = b;
    this.calculateAvarage = function () {

        return (this.a + this.b) / 2;
    }
}

console.log('Среднее арифметическое 2х чисел ', twoNumbers.calculateAvarage());

let array = new AvarageOfArray([100, 14, 1222, 13, 44, -6, 72, -100]);

function AvarageOfArray(array) {
    this.array = array;
    this.calculateAvarage = function () {
        let result = 0;
        for (let i = 0; i < this.array.length; i++) {
            result += this.array[i];
        }

        return result / this.array.length;
    }
}

console.log('Среднее арифметическое массива чисел ', array.calculateAvarage());

console.log('Еще примеры:')

let circle2 = new Circle(34);
console.log('Радиус окружности ', circle2.calculateSquare());
console.log('Длина окружности ', circle2.calculeteLength());

let twoNumbers2 = new AvarageOfTwo(37, -115);
console.log('Среднее арифметическое 2х чисел ', twoNumbers2.calculateAvarage());

let array2 = new AvarageOfArray([4100, -2034, 604]);
console.log('Среднее арифметическое массива чисел ', array2.calculateAvarage());