describe('Payments tests (with setup and teardown)', () => {
    beforeEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {}
        paymentId = 0;
        billAmtInput.value = 200
        tipAmtInput.value = 36
    },0)
    
    it('should add a payment object to allPayments',function(){
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toBeGreaterThan(0)
        
    })

    it('should update html and reset input values', function(){
        submitPaymentInfo();
        expect(billAmtInput.value).toBe('')
        expect(tipAmtInput.value).toBe('')
        expect(summaryTds[0].innerHTML).toContain("200")
        expect(summaryTds[1].innerHTML).toContain("36")
        expect(summaryTds[2].innerHTML).toContain(Math.round((36/200)*100))
    })


    // createCurPayment() will return undefined with negative or empty inputs
    // positive billAmt is required but tip can be 0
    it('should return early (do nothing) if tip or bill is left blank',function(){
        billAmtInput.value = ''
        tipAmtInput.value = ''
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0)

        billAmtInput.value = ''
        tipAmtInput.value = 1
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0)
        
        billAmtInput.value = 1
        tipAmtInput.value = ''
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0)
    })
    it('should not process if bill amount is not greater than 1',function(){
        billAmtInput.value = -1;
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0)
        billAmtInput.value = 0;
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0)
    })


    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments={}
        paymentId = 0;
        paymentTbody.innerHTML=''
        document.querySelector('#summaryTable').innerHTML = ''
    }, 0)
});
