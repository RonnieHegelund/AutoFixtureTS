/// <reference path="../DefaultPrimitiveBuilders.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutoFixtureTSUnitTest;
(function (AutoFixtureTSUnitTest) {
    describe("AutoFixtureTS.DefaultPrimitiveBuildersTests", function () {
        it("Create DefaultPrimitiveBuilders not null", function () {
            var sut = new AutoFixtureTS.DefaultPrimitiveBuilders();
            expect(sut).not.toBeNull();
        });
        it("Create DefaultPrimitiveBuilders length correct ", function () {
            var sut = new AutoFixtureTS.DefaultPrimitiveBuilders();
            expect(sut.GetSpecimens().length).toBeGreaterThan(0);
        });
    });
})(AutoFixtureTSUnitTest || (AutoFixtureTSUnitTest = {}));
