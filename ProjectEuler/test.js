const Helpers = require('../helpers.js');
function SolutionByLCM(n) {
    var a = 1;
    for (var i = 1; i <= n; i++) {
      a = Helpers.lcm(a, i);
    }
    return a;
  }

  console.log(SolutionByLCM(10));