describe("stringcalculator", function () {
    it("Given an empty string should return zero", function () {
        var item = new RoyKata.StringCalcualtor();
        var expected = 0;
        expect(item.Add("")).toBe(expected);
    });
    it("Given a single number returns number", function () {
        var item = new RoyKata.StringCalcualtor();
        var expected = 2;
        expect(item.Add("2")).toBe(expected);
    });
    it("Given 2 numbers returns the sum of both numbers", function () {
        var item = new RoyKata.StringCalcualtor();
        var expected = 3;
        expect(item.Add("1,2")).toBe(expected);
    });
    it("Given multiple numbers returns the sum of all numbers", function () {
        var item = new RoyKata.StringCalcualtor();
        var expected = 6;
        expect(item.Add("1,2,3")).toBe(expected);
    });
    it("Given multiple numbers from multiple splits returns the sum of all numbers and", function () {
        var item = new RoyKata.StringCalcualtor();
        var expected = 6;
        expect(item.Add("1,2\n3")).toBe(expected);
    });
    it("TEST refelction", function () {
        Reflector(RoyKata.StringCalcualtor);
    });
});
var Reflector = function (obj) {
    this.getProperties = function () {
        var properties = [];
        for(var prop in obj) {
            if(typeof obj[prop] != 'function') {
                properties.push(prop);
                console.log(typeof obj[prop]);
            }
        }
        return properties;
    };
};
