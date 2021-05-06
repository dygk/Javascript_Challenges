process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// 8 = 2*4 + 0
// 34 = 8*4 + 2
// 144 = 34*4 + 8
// 610 = 144*4 + 34
// GENERAL FORM

// beginning = 2
// previous = 0
// IN LOOP:
// (next_even) = beginning * 4 + previous
// //calcuate sum
// previous = beginning
// beginning = next_even

function main() {
    const BigNumber = require('bignumber.js');
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n =  BigNumber(parseInt(readLine()));
        
        let factor=  BigNumber(2);
        
        while(factor <= Math.sqrt(n) )
        {
            if(n%factor == BigNumber(0))
            n /= factor;
            else
            factor++;
            
        }
         if(n> factor)
         console.log(n.toString());
         else
          console.log(factor.toString());
        //console.log(String(factor).slice(0, factor.length))
      
        
        
    }

}

