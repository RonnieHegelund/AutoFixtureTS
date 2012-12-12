/// <reference path="../Kernel/RangedNumberRequest.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutoFixtureTSUnitTest;
(function (AutoFixtureTSUnitTest) {
    describe("AutoFixtureTS.RangedNumberRequestTest", function () {
        it("expect min and max calue to correct", function () {
            var sut = new AutoFixtureTS.Kernel.RangedNumberRequest(1, 2);
            var min = sut.Min();
            var max = sut.Max();
            expect(min).toBe(1);
            expect(max).toBe(2);
        });
        it("expect equals to correct", function () {
            var sut = new AutoFixtureTS.Kernel.RangedNumberRequest(1, 2);
            var obj = new AutoFixtureTS.Kernel.RangedNumberRequest(1, 2);
            expect(sut.Equals(obj)).toBeTruthy();
        });
        it("expect equals to incorrect", function () {
            var sut = new AutoFixtureTS.Kernel.RangedNumberRequest(1, 2);
            var obj = new Object();
            expect(sut.Equals(obj)).toBeFalsy();
        });
    });
})(AutoFixtureTSUnitTest || (AutoFixtureTSUnitTest = {}));
