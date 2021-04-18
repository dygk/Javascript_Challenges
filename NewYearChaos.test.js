const minimumBribes= require("./NewYearChaos.js");
test("test", ()=>{
  expect(minimumBribes([1,2,5,3,7,8,6,4],8)).toBe(7);
});
