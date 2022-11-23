const addition=require("./number.js");
test("Numbers Operation",()=>{
    expect(addition(500,600,4,5)).toBeGreaterThan(1000)
    expect(addition(500,500)).toBeGreaterThanOrEqual(1000)
    expect(addition(900)).toBeLessThan(1000)
    expect(addition(800,200)).toBeLessThanOrEqual(1000)
})