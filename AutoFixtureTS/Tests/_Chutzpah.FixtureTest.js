var Person = (function () {
    function Person() {
        this.firstname = "";
        this.lastName = "";
        this.Age = 0;
        this.Male = true;
    }
    Person.prototype.GetFullName = function () {
        return this.firstname + " " + this.lastName;
    };
    Person.prototype.SetFirstname = function (val) {
        this.firstname = val;
    };
    Person.prototype.SetLastname = function (val) {
        this.lastName = val;
    };
    return Person;
})();
describe("Fixture", function () {
    it("can create CreateAnonymous Person ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous(Person);
        expected.SetFirstname("Ronnie");
        expected.SetLastname("Hegelund");
        expect(expected.GetFullName()).toBe("Ronnie Hegelund");
    });
    it("can create many Anonymous Persons ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateMany(Person);
        expect(expected.length).toBe(10);
        expected.forEach(function (p) {
            p.SetFirstname("Ronnie");
            p.SetLastname("Hegelund");
        });
        expected.forEach(function (p) {
            return expect(p.GetFullName()).toBe("Ronnie Hegelund");
        });
    });
    it("can create many strings", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateMany("");
        expect(expected.length).toBe(10);
        expected.forEach(function (p) {
            return expect(p).toBeDefined();
        });
    });
    it("can create many numbers", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateMany(0);
        expect(expected.length).toBe(10);
        expected.forEach(function (p) {
            return expect(p).toBeDefined();
        });
    });
    it("can create many booleans", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateMany(true);
        expect(expected.length).toBe(10);
        expected.forEach(function (p) {
            return expect(p).toBeDefined();
        });
    });
    it("can create many Dates", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateMany(Date);
        expect(expected.length).toBe(10);
        expected.forEach(function (p) {
            return expect(p).toBeDefined();
        });
    });
    it("can create defaultstring ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateString();
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected.match(regex).length).not.toBeNull();
    });
    it("can create string with identifier ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateString("tester");
        var regex = "^(tester_)(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected.match(regex).length).not.toBeNull();
    });
    it("can create Anonymous string ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous(String);
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected.match(regex).length).not.toBeNull();
    });
    it("can create Anonymous string by empty string", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous("");
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected.match(regex).length).not.toBeNull();
    });
    it("can create boolean ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateBoolean();
        expect(typeof (expected)).toBe("boolean");
    });
    it("can create Anonymous boolean by true value ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous(true);
        expect(typeof (expected)).toBe("boolean");
    });
    it("can create number ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateNumber();
        expect(typeof (expected)).toBe("number");
    });
    it("can create Anonymous number by number value ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous(100);
        expect(typeof (expected)).toBe("number");
    });
    it("can create negative numbers from range", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateNumberRange(0, -100);
        expect(expected).toBeLessThan(0);
        expect(expected).toBeGreaterThan(-100);
    });
    it("can create positive numbers from range", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateNumberRange(0, 100);
        expect(expected).toBeLessThan(100);
        expect(expected).toBeGreaterThan(0);
    });
    it("can create number Anonymous", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous(Number);
        expect(typeof (expected)).toBe("number");
    });
    it("can create negative Anonymous numbers from range", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous(Number, 0, -100);
        expect(expected).toBeLessThan(0);
        expect(expected).toBeGreaterThan(-100);
    });
    it("can create positive Anonymous numbers from range", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous(Number, 0, 100);
        expect(expected).toBeLessThan(100);
        expect(expected).toBeGreaterThan(0);
    });
});
