// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("check that the value of organization is 'nonprofit'", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("the value of executiveDirector is 'Jeff'", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("check that percentageCoolEmployees is 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("check that the array contains the three strings: 'Web Development', 'Data Analysis', and 'Liftoff'", function() {
    let result = ['Web Development', 'Data Analysis', 'Liftoff'];
    expect(result).toEqual(launchcode.programsOffered);
  });

  test("When passed a number that is ONLY divisible by 2, return 'Launch!'", function() {
    let result = launchcode.launchOutput(2);
    expect(result).toBe('Launch!');
  });

  test("When passed a number that is ONLY divisible by 3, return 'Code!'", function() {
    let result = launchcode.launchOutput(3);
    expect(result).toBe('Code!');
  });

  test("When passed a number that is ONLY divisible by 5, return 'Rocks!'", function() {
    let result = launchcode.launchOutput(5);
    expect(result).toBe('Rocks!');
  });

  test("When passed a number that is divisible by 2 and 3, return 'LaunchCode!'", function() {
    let result = launchcode.launchOutput(6);
    expect(result).toBe('LaunchCode!');
  });

  test("When passed a number that is divisible by 3 and 5, return 'Code Rocks!'", function() {
    let result = launchcode.launchOutput(15);
    expect(result).toBe('Code Rocks!');
  });

  test("When passed a number that is divisible by 2 and 5, return 'Launch Rocks! (CRASH!!!!)'", function() {
    let result = launchcode.launchOutput(10);
    expect(result).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("When passed a number that is N?OT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.", function() {
    let result = launchcode.launchOutput(11);
    expect(result).toBe("Rutabagas! That doesn't work.");
  })

  // Write your unit tests here!
  
});