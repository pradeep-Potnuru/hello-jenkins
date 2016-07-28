describe("Testing greet on window load", function () {
    it("should return 'hello '+ name when proper input is passed", function () {
        expect(printHellow("pradeep")).toEqual("hello pradeep");
    });
    it("should return 'hello world' when proper input is not passed", function () {
        expect(printHellow()).toEqual("hello world");
    });
    it("should return 'hello world' when null is passed as parameter", function () {
        expect(printHellow(null)).toEqual("hello world");
    });
});