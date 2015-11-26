describe('Homepage', function() {

  browser.get('index.html#/view1');

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('My AngularJS App');
  });
});
