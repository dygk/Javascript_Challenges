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
// In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It’s a technical limitation caused by their internal representation.

// For most purposes that’s quite enough, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.

// BigInt type was recently added to the language to represent integers of arbitrary length.

// A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
//const bigInt = 1234567890123456789012345678901234567890n;


function main() {
    var t = parseInt(readLine());
    
    for (var a0 = 0; a0 < t; a0++){
        var n = BigInt(parseInt(readLine()));
        let result = 0
        n = n-1n
        let a = n/3n
        let b = n/5n
        let c = n/15n
        result = (( a*(a + 1n) ) /2n)*3n
        result += (( b*(b + 1n) ) /2n)*5n
        result -= (( c*(c + 1n) ) /2n)*15n
        console.log(String(result).slice(0, result.length))
    }
      

}