'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n,m, queries) {
    // Write your code here
    var resultArray=Array(n).fill(0);
    for (var i = 0; i < m; i++)
    {
       for (var j = queries[i][0]-1; j <= queries[i][1]-1; j++)
     {
       resultArray[j] =resultArray[j] + queries[i][2];
      }
    }
 //return Math.max(...resultArray);
 
resultArray.sort(function(a, b) {
  return b-a;
});
 return resultArray[0];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n =parseInt(firstMultipleInput[0], 10);

    const m =  parseInt(firstMultipleInput[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = arrayManipulation(n,m, queries);

    ws.write(result + '\n');

    ws.end();
}
