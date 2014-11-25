// Write your tests here!
// Here is an example.
Tinytest.add('verify forge is defined on the client', function (test) {
  test.isTrue(Meteor.isClient, "not on client");
  test.isTrue(frg != undefined, "forge is undefined");
});
