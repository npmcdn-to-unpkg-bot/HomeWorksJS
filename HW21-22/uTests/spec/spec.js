var app = require('../js/app.js');

describe("pow", function() {
  it("check results functon pow", function() {

  	var result = app.pow(2,3);

    expect(result).toEqual(8);
  });
});

describe("existenceArr", function() {
  it("check exist string in arr", function() {

  	var arr = ["Pavel", "Igor", "Ivan"],
  		serchName = "Pavel";

  	var result = app.existenceArr(arr, serchName);

    expect(result).toBeTruthy();
  });

  it("check not exist string in arr", function() {

  	var arr = ["Pavel", "Igor", "Ivan"],
  		serchName = "Sergey";

  	var result = app.existenceArr(arr, serchName);

    expect(result).toBeFalsy();
  });
});