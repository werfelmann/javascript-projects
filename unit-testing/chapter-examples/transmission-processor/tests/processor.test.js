const processor = require('../processor.js');

describe("transmission processor", function() {
  test("takes a string and returns an object", function() {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  test("should return -1 if the transmission does not contain '::'", function() {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

  test("id property should be of type Number", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
  })

  test("returns rawData in object", function() {
    let result = processor("9701::<489584872710>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 for rawData if missing < at position 0", function() {
    let result = processor("9701::489584872710>");
    expect(result.rawData).toBe(-1);
  });

  test("should return -1 if the > is not at the last position of rawData", function() {
    let result = processor("9701::8729740349572>0912");
    expect(result.rawData).toBe(-1);
  });

  test("should return -1 if the < is found inside the rawData", function() {
    let result = processor("9701::4872<97403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("should return -1 if both < and > are missing from rawData", function () {
    let result = processor("9701::487297403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("should return -1 if additional < is found within the rawData", function () {
    let result = processor("9701::<487297403495<720912>");
    expect(result.rawData).toBe(-1);
  });


 
 });