describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should reset the input field', function(){
    submitServerInfo();
    expect(serverNameInput.value).toBe('')
  })

  it('should add name to table data', function(){
    submitServerInfo();
    expect(serverTbody.innerHTML).toContain("<td>Alice</td>")
  })

  afterEach(function() {
    // teardown logic
    serverNameInput.value ='';
    allServers = {};
    serverId = 0;
  });
});
