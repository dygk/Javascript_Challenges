'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    
    const map = new Map();

    arr.forEach((arr_i, i) => map.set(arr_i, i));
    return arr.reduce((swaps, arr_i, i) => {
        const correctValue = i + 1;
        if(arr_i !== correctValue){
            const swapIndex = map.get(correctValue);
            arr[swapIndex] = arr_i, arr[i] = correctValue;
            map.set(arr[swapIndex], swapIndex), swaps++;
        }
        return swaps;
    }, 0);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}