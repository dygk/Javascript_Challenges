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

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        
     let firstHashmap= new Map([[2,0],[3,0],[5,0],[7,0],[11,0]
]);
var result=1;

for(var i = n; i >1; i--){
    var factor=2;
    var maxPower=0;
    var curNumber=i;
    while(curNumber>1)
    {
        if(curNumber%factor == 0)
        { maxPower++;
         curNumber /= factor;

        }
        else
        {
        factor==2? factor++: factor=factor+2;
        maxPower= 0;
        }

        
        if(!firstHashmap.has(factor))
          firstHashmap.set(factor, 0);

        if( firstHashmap.get(factor) < maxPower)
        {
          firstHashmap.set(factor, maxPower);
         
        }

    }
  }

  
  for (let k of firstHashmap.keys()) {
    if (firstHashmap.get(k)==0)
    firstHashmap.delete(k);
  }


  firstHashmap.forEach((values,keys)=>{
    result *= Math.pow(keys, values);
  });   
        
        
        
        
        
        
        
    console.log(result);    
    }

}