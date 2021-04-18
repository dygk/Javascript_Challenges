'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


 function minimumBribes(q,n) {
         var count = 0;
            var isChoatic = false;

            for (var i = n-1; i >=0; i--)
            {

                if (q[i] - i - 1 > 2)
                {
                    isChoatic = true; break;
                }

                for (var j = Math.max(0,q[i]-2); j < i; j++)
                    if (q[j] > q[i])
                        count++;
            }

            console.log(isChoatic ? "Too chaotic" : count);

}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q,n);
    }
}
