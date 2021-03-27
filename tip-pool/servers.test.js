describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      allPayments = {}
      paymentId = 0;
      serverNameInput.value = 'Alice';
      
    },0);

    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('should reset the input field', function(){
      submitServerInfo();
      expect(serverNameInput.value).toBe('')
    })
    

    it('should not submit server if the input is blank', function () {
      serverNameInput.value = '';
      submitServerInfo()
      expect(Object.keys(allServers).length).toEqual(0);
    })

    it('should add name and earnings amount to server table data', function () {
      submitServerInfo();
      expect(serverTbody.innerHTML).toContain("<td>Alice</td>")
      expect(serverTbody.innerHTML).toContain("<td>$0.00</td>")
      //expect(serverTbody).toContain(Number(tableData[1].innerHTML) / Object.keys(allServers).length)

    })

    afterEach(function() {
      // teardown logic
      serverNameInput.value ='';
      allServers = {};
      serverId = 0;
      serverTbody.innerHTML = '';
      summaryTds.innerHTML = ''
    },0);
  });

//-------------------------------------------------------------

