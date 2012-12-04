var AutofixtureTSUnitTest;
(function (AutofixtureTSUnitTest) {
    describe("NumberGenerator", function () {
        it("can create Anonymous number ", function () {
            var sut = new AutofixtureTS.NumberGenerator();
            var expected = sut.CreateAnonymous();
            expect(typeof (expected)).toBe("number");
        });
        it("can create Anonymous negative numbers from range", function () {
            var sut = new AutofixtureTS.NumberGenerator(0, -100);
            var expected = sut.CreateAnonymous();
            expect(expected).toBeLessThan(0);
            expect(expected).toBeGreaterThan(-100);
        });
        it("can create Anonymous positive numbers from range", function () {
            var sut = new AutofixtureTS.NumberGenerator(0, 100);
            var expected = sut.CreateAnonymous();
            expect(expected).toBeLessThan(100);
            expect(expected).toBeGreaterThan(0);
        });
        it("can create number ", function () {
            var sut = new AutofixtureTS.NumberGenerator();
            var numRequest = 10;
            var expected = sut.Create(numRequest);
            expect(typeof (expected)).toBe("number");
        });
        it("can create negative numbers from range", function () {
            var sut = new AutofixtureTS.NumberGenerator(0, -100);
            var numRequest = 10;
            var expected = sut.Create(numRequest);
            expect(expected).toBeLessThan(0);
            expect(expected).toBeGreaterThan(-100);
        });
        it("can create positive numbers from range", function () {
            var sut = new AutofixtureTS.NumberGenerator(0, 100);
            var numRequest = 10;
            var expected = sut.Create(numRequest);
            expect(expected).toBeLessThan(100);
            expect(expected).toBeGreaterThan(0);
        });
    });
})(AutofixtureTSUnitTest || (AutofixtureTSUnitTest = {}));
