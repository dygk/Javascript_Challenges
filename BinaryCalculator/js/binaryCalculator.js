let res = document.getElementById("res");

function clickButton() {
    var clickedButton =document.getElementById(event.target.id);
    var buttonText=clickedButton.innerHTML;
    var expr = res.innerHTML;
    switch(buttonText)
           {            
          case '+':
          case '-':
          case '*':
          case '/':  if(expr.length!=0 && !checkOp())
          {res.innerHTML+=buttonText;} break;
          case '0':
          case '1': 
              res.innerHTML += buttonText; break;   
          break;
          case 'C': 
              res.innerHTML = ''; break; 
          case '=': 
            
            var regNums = /(\d+)/g;
            expr = expr.replace(regNums, function(match) {
                return parseInt(match, 2);
            });
            res.innerHTML = ~~eval(expr).toString(2);   
          break;
          default:break;
           }
    
  }  

function checkOp(){
    
    let regOperators = /[\+\-\*\/]+/g
    if(regOperators.test(res.innerHTML))
        return true;
    
  } 


