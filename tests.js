// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function sayHello() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


//unit test for sayHello
describe('sayHello', function () {
    it('should be a difined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function helloWorld () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Pat" when executed', function () {
        expect(sayHello()).toBe("Hello, Pat");
    });
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    });
});

//unit test for HelloSay
// describe('helloSay', function () {
//     it('should be a difined function', function () {
//         expect(typeof helloSay(Alex)).toBe('function');
//     });
//     it('should return a string when called', function helloSay () {
//         expect(typeof helloSay(Alex)).toBe("string");
//     });
//     it('should return the string "Hello, " when executed', function () {
//         expect(helloSay(Alex)).toBe("Hello, Alex");
//     });
//     it("should never return 'undefined' when called", function () {
//         expect(helloSay(Alex)).not.toBe(undefined);
//     });
// });