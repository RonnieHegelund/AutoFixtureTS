/// <reference path="../CurrentDateGenerator.ts" />
/// <reference path="../StringGenerator.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutoFixtureTSUnitTest;
(function (AutoFixtureTSUnitTest) {
    describe("AutoFixtureTS.CurrentDateGeneratorTests", function () {
        it("can create Anonymous date ", function () {
            // Fixture setup
            var sut = new AutoFixtureTS.CurrentDateGenerator();
            var date = sut.Create(new Date());
            var d = new Date();
            // Verify outcome
            expect(date.getTime()).toBeLessThan(d.getTime());
            // Teardown
                    });
    });
})(AutoFixtureTSUnitTest || (AutoFixtureTSUnitTest = {}));
