describe("calculate payments",function(){
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {}
        paymentId = 0;
        billAmtInput.value = 200
        tipAmtInput.value  = 36

    },0);

    it("should provide the total of the entered payments, tips and tip percentages",function(){
        submitPaymentInfo();
        // accepts 'tipAmt', 'billAmt', 'tipPercent'
        expect(sumPaymentTotal("tipAmt")).toEqual(36);
        expect(allPayments['payment1'].tipAmt).toEqual('36');

        expect(sumPaymentTotal("billAmt")).toEqual(200);
        expect(allPayments['payment1'].billAmt).toEqual('200');

        expect(sumPaymentTotal("tipPercent")).toEqual(18);
        expect(allPayments['payment1'].tipPercent).toEqual(18);

        billAmtInput.value = 300
        tipAmtInput.value = 50
        submitPaymentInfo();
        expect(sumPaymentTotal("tipAmt")).toEqual(86);
        expect(allPayments['payment2'].tipAmt).toEqual('50');

        expect(sumPaymentTotal("billAmt")).toEqual(500);
        expect(allPayments['payment2'].billAmt).toEqual('300');

        expect(sumPaymentTotal("tipPercent")).toEqual(Math.round((50/300)*100 + (36/200)*100));
        expect(allPayments['payment2'].tipPercent).toEqual(Math.round(50/300 *100));
        console.log(sumPaymentTotal)

    })


    it("should create a new table data entry and append to a provided table",function(){
        let tempTableRow = document.createElement("tr");
        appendTd(tempTableRow,"test value")

        expect(tempTableRow.innerHTML).toContain("<td>test value</td>"); 
    })

    afterEach(function () {
        /// teardown logic
        billAmtInput.value = ''
        tipAmtInput.value = ''
        paymentTbody.innerHTML = ''
        summaryTds.innerHTML =''
        
    }, 0);

})