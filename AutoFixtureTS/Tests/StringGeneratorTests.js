/// <reference path="../StringGenerator.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutoFixtureTSUnitTest;
(function (AutoFixtureTSUnitTest) {
    describe("AutoFixtureTS.StringGenerator", function () {
        it("can create Anonymous string ", function () {
            var sut = new AutoFixtureTS.StringGenerator();
            var expected = sut.CreateAnonymous("");
            var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
            expect(expected).toMatch(regex);
        });
        it("can create Anonymous string with key ", function () {
            var sut = new AutoFixtureTS.StringGenerator();
            var expected = sut.CreateAnonymous("tester");
            var regex = "^(tester)(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
            expect(expected).toMatch(regex);
        });
    });
})(AutoFixtureTSUnitTest || (AutoFixtureTSUnitTest = {}));
