describe("calculate payments",function(){
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 200
        tipAmtInput.value  = 36

    });

    it("should provide the total of the entered payments",function(){
        submitPaymentInfo();
        // accepts 'tipAmt', 'billAmt', 'tipPercent'
        expect(sumPaymentTotal("tipAmt")).toEqual(36);
        expect(allPayments['payment1'].tipAmt).toEqual('36');

        expect(sumPaymentTotal("billAmt")).toEqual(200);
        expect(allPayments['payment1'].billAmt).toEqual('200');

        expect(sumPaymentTotal("tipPercent")).toEqual(18);
        expect(allPayments['payment1'].tipPercent).toEqual(18);
    })

    it("should calculate the percentage of entered payments", function(){

    })

    it("should create a new table data entry and append to a provided table",function(){

    })

    afterEach(function () {
        /// teardown logic
        
    });

})