/// <reference path="../DefaultPrimitiveBuilders.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutofixtureTSUnitTest;
(function (AutofixtureTSUnitTest) {
    describe("AutofixtureTS.DefaultPrimitiveBuildersTests", function () {
        it("Create DefaultPrimitiveBuilders not null", function () {
            var sut = new AutofixtureTS.DefaultPrimitiveBuilders();
            expect(sut).not.toBeNull();
        });
        it("Create DefaultPrimitiveBuilders length correct ", function () {
            var sut = new AutofixtureTS.DefaultPrimitiveBuilders();
            expect(sut.GetSpecimens().length).toBe(4);
        });
    });
})(AutofixtureTSUnitTest || (AutofixtureTSUnitTest = {}));
