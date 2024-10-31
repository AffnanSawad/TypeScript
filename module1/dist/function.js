"use strict";
//  Function => 1. Normal ; 2. Arrow
function addnum(num1, num2) {
    return num1 + num2;
}
addnum(2, 4);
// arrow function
const add = (num1, num2) => { return num1 + num2; };
//  object => funcyion => METHOD
const total = {
    myName: 'Affnan',
    balance: 0,
    addBalance(balance) {
        return ` MY TOTAL BALANCE IS ${this.balance + balance}`;
    }
};
// ARRAY
const arr = [1, 2, 3];
const newarr = arr.map((item) => item * item);
