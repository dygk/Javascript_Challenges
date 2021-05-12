//Find the largest palindrome made from the product of two 3-digit numbers which is less than .
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Solution
// First observation is that the number must be between 100^2100 
// 2
//   and 999^2999 
// 2
//   or in the range of [10000, 998001][10000,998001]. As the majority of numbers has 6 digits and we're looking for the largest, we ignore 5 digits numbers. Based on this, we can construct a palindromic number as:

// \begin{array}{rl} 'abccba' &= 100000a + 10000b + 1000c + 100c + 10b + a\\ &= 100001a + 10010b + 1100c\\ &= 11 (9091a + 910b + 100c) \end{array}
// ′
//  abccba 
// ′
 
// ​	
  
// =100000a+10000b+1000c+100c+10b+a
// =100001a+10010b+1100c
// =11(9091a+910b+100c)
// ​	
 
// As such, we're looking for two largest numbers p, q\in\{x | 100 \leq x \leq 999\}\subset\mathbb{N}p,q∈{x∣100≤x≤999}⊂N with:

// p\cdot q =11 (9091a + 910b + 100c) \leq 999^2
// p⋅q=11(9091a+910b+100c)≤999 
// 2
 
// This equation shows us, that either pp or qq, but not both must have a factor of 11. In order to maximize the two unknown, we start searching with p=999p=999 and for each decreasing pp, we search a maximum qq to construct a palindrome. We can make an optmization based on the observation before: If pp is not divisible by 11, qq must be, and as such we can start searching with 990 as the largest multiple of 11 and search only for multiples of 11. Another optimization is, that we don't need to let qq go below pp since we can interchange the numbers. An implementation can then look as follows:

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

function isItPalindrome(n) {
    let num = n.toString();
    let reverse = num.split("").reverse().join("");
    return reverse === num;
}

function findLargestPalindrome(x) {

    var r = 0;

    for (var p = 990; p > 99; p -= 11) {

        for (var q = 999; q > 99; q--) {

            var t = p * q;

            if (t < x) {
                if (r < t && isItPalindrome(t)) {
                    r = t;
                    break;
                } else if (t < r) {
                    break;
                }

            }
        }
    }
    return r;


}
/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());

    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());


        console.log(findLargestPalindrome(n - 1));
    }

}

