// launchcode.test.js code:
const launchcode = require('../index.js');

describe("LaunchCode", function(){
  test("Organization property should be 'nonprofit'", function() {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("Executive Director property should be 'Jeff'", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

  test("Percentage Cool Employees property should be 100", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("Programs Offered property should contain specific programs", function() {
    const expectedPrograms = ["Web Development", "Data Analysis", "Liftoff"];
    expect(launchcode.programsOffered).toEqual(expect.arrayContaining(expectedPrograms));
  });

  test("launchOutput() method should return a string with all properties", function() {
    const expectedOutput = `Organization: nonprofit\nExecutive Director: Jeff\nPercentage Cool Employees: 100%\nPrograms Offered: Web Development, Data Analysis, Liftoff`;
    expect(launchcode.launchOutput()).toEqual(expectedOutput);
  
  }),

  // Write your unit tests here!


  describe("launchOutput", function(){
    test("Number ONLY divisible by 2 should return 'Launch!'", function() {
      expect(launchcode.launchOutput(2)).toEqual("Launch!");
    });
  
    test("Number ONLY divisible by 3 should return 'Code!'", function() {
      expect(launchcode.launchOutput(3)).toEqual("Code!");
    });
  
    test("Number ONLY divisible by 5 should return 'Rocks!'", function() {
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    });
  
    test("Number divisible by 2 AND 3 should return 'LaunchCode!'", function() {
      expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    });
  
    test("Number divisible by 3 AND 5 should return 'Code Rocks!'", function() {
      expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
    });
  
    test("Number divisible by 2 AND 5 should return 'Launch Rocks!'", function() {
      expect(launchcode.launchOutput(10)).toEqual("Launch Rocks!");
    });
  
    test("Number divisible by 2, 3, AND 5 should return 'LaunchCode Rocks!'", function() {
      expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
    });
  
    test("Number NOT divisible by 2, 3, or 5 should return 'Rutabagas! That doesn't work.'", function() {
      expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
    });
  
});

});
