
let  gcd = (x, y) => {
    let _gcd = (a, b) => (b === 0 ? a : _gcd(b, a % b)),
        abs = Math.abs;
    return _gcd(abs(x), abs(y));
  }
  
 let lcm = (x, y) =>
  x === 0 || y === 0 ? 0 : Math.abs(Math.floor(x / gcd(x, y)) * y);
  

