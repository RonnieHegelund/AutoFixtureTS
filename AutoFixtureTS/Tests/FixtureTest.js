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
        var sut = new Autofixture.Fixture();
        var expected = sut.CreateAnonymous(Person);
        expected.SetFirstname("Ronnie");
        expected.SetLastname("Hegelund");
        expect(expected.GetFullName()).toBe("Ronnie Hegelund");
    });
    it("can create many Anonymous Persons ", function () {
        var sut = new Autofixture.Fixture();
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
    it("can create defaultstring ", function () {
        var sut = new Autofixture.Fixture();
        var expected = sut.CreateString();
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected.match(regex).length).not.toBeNull();
    });
    it("can create string with identifier ", function () {
        var sut = new Autofixture.Fixture();
        var expected = sut.CreateString("tester");
        var regex = "^(tester_)(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected.match(regex).length).not.toBeNull();
    });
    it("can create boolean ", function () {
        var sut = new Autofixture.Fixture();
        var expected = sut.CreateBoolean();
        expect(typeof (expected)).toBe("boolean");
    });
    it("can Create Anonymous boolean ", function () {
        var sut = new Autofixture.Fixture();
        var expected = sut.CreateAnonymous(Boolean);
        expect(typeof (expected)).toBe("boolean");
    });
    it("can create number ", function () {
        var sut = new Autofixture.Fixture();
        var expected = sut.CreateNumber();
        expect(typeof (expected)).toBe("number");
    });
    it("can create negative numbers from range", function () {
        var sut = new Autofixture.Fixture();
        var expected = sut.CreateNumberRange(0, -100);
        expect(expected).toBeLessThan(0);
        expect(expected).toBeGreaterThan(-100);
    });
    it("can create positive numbers from range", function () {
        var sut = new Autofixture.Fixture();
        var expected = sut.CreateNumberRange(0, 100);
        expect(expected).toBeLessThan(100);
        expect(expected).toBeGreaterThan(0);
    });
});
