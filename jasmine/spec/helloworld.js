describe("Testing hello world program", function () {
    it("should return 'hello '+ name when proper input is passed", function () {
       expect(printHellow("pradeep")).toEqual("Hello pradeep");
    });
    it("should return 'hello world' when proper input is not passed", function () {
       expect(printHellow()).toEqual("Hello world");
    });
    it("should return 'hello world' when null is passed as parameter", function () {
       expect(printHellow(null)).toEqual("Hello world");
    });
});