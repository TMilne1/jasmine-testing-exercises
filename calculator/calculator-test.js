
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount:0, years:1, rate:1})).toEqual("0.00")
  expect(calculateMonthlyPayment({ amount: 50000, years: 5, rate: 5 })).toBe('943.56')

  
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({ amount: 0, years: 1, rate: 1 })).toBe('0.00')
});

/// etc
