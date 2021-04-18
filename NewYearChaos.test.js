const minimumBribes= require("./NewYearChaos.js");
test("test 1", ()=>{
  expect(minimumBribes([1,2,5,3,7,8,6,4],8)).toBe(7);
});

test("test 2", ()=>{
  expect(minimumBribes([2,1,5,3,4],5)).toBe(3);
});

test("test 3", ()=>{
  expect(minimumBribes([2,5,1,3,4],5)).toBe("Too chaotic");
});
