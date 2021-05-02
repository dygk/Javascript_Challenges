'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    var n= arr.length;
    var positiveCount = arr.filter(number => number > 0).length/n;
    var negativeCount = arr.filter(number => number < 0).length/n;
    var zeroCount = arr.filter(number => number == 0).length/n;
    
    console.log(positiveCount.toFixed(6));
    console.log(negativeCount.toFixed(6));
    console.log(zeroCount.toFixed(6));
}

// function plusMinus(arr) {
//     let ratios = {
//         positives: 0,
//         negatives: 0,
//         zeros: 0
//    }
  
//   arr.forEach(n => {
//       if (n > 0) {
//           ratios.positives++;
//       } else if (n === 0) {
//           ratios.zeros++;
//       } else {
//           ratios.negatives++;
//       }
//   });
  
//   // Printing the ratios.
//   Object.keys(ratios).forEach(e => {
//       console.log((ratios[e]/arr.length).toFixed(6));
//   });

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
