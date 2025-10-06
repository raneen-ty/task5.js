//1
function findSmallest(arr) {
    return Math.min(...arr);
}
console.log("1:",findSmallest([30, 45, 60, 7])); 

//2
function AlphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log("2:",AlphabeticalOrder('hello')); 

//3
function oddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("3:",oddOrEven(9)); 

//4
function evenNum(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("4:",evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9])); 

//5
function getAbsSum(arr) {
    return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}
console.log("5:",getAbsSum([-1, -3, -5, -4, -10, 0])); 

//6
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("6:",factorial(8)); 

//7
function numbersOnly(arr) {
    return arr.filter(item => typeof item === 'number');
}
console.log("7:",numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 

//8
function addUp(num) {
    return (num * (num + 1)) / 2;
}
console.log("8:",addUp(8)); 

//9
function minMaxLengthAverage(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    const average = arr.reduce((sum, num) => sum + num, 0) / length;
    return [min, max, length, average];
}
console.log("9:",minMaxLengthAverage([7, 13, 3, 77, 100])); 

//10
function romanNumbers(num) {
    const roman = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];
    let result = '';
    for (const [letter, value] of roman) {
        while (num >= value) {
            result += letter;
            num -= value;
        }
    }
    return result;
}
console.log("10:",romanNumbers(1989)); 

//11
function countWords(str) {
    return str.split(' ').length;
}
console.log("11",countWords('hello from CodingAcademy!')); 

//12
function MultiplyByLength(arr) {
    const length = arr.length;
    return arr.map(num => num * length);
}
console.log("12:",MultiplyByLength([4, 2, 5])); 

//13
function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}
console.log("13:",checkEnding("CodingSchool", "Ac"));

//14
function doubleChar(str) {
    return str.split('').map(char => char + char).join('');
}
console.log("14:",doubleChar('Coding')); 

//15
function findIndex(arr, element) {
    return arr.indexOf(element);
}
console.log("15:",findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 