/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="../BooleanSwitch.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutoFixtureTSUnitTest;
(function (AutoFixtureTSUnitTest) {
    describe("AutoFixtureTS.BooleanSwitch", function () {
        it("CreateAnonymous Will Return True On First Call", function () {
            var sut = new AutoFixtureTS.BooleanSwitch();
            var result = sut.CreateAnonymous();
            expect(result).toBeTruthy();
        });
        it("CreateAnonymous Will Return false On Second Call", function () {
            var sut = new AutoFixtureTS.BooleanSwitch();
            sut.CreateAnonymous();
            var result = sut.CreateAnonymous();
            expect(result).toBeFalsy();
        });
        it("CreateAnonymous Will Return true On third Call", function () {
            var sut = new AutoFixtureTS.BooleanSwitch();
            sut.CreateAnonymous();
            sut.CreateAnonymous();
            var result = sut.CreateAnonymous();
            expect(result).toBeTruthy();
        });
        it("CreateAnonymous Will Return False On Fourth Call", function () {
            var sut = new AutoFixtureTS.BooleanSwitch();
            sut.CreateAnonymous();
            sut.CreateAnonymous();
            sut.CreateAnonymous();
            var result = sut.CreateAnonymous();
            expect(result).toBeFalsy();
        });
        it("Create With NonBoolean Request Will Return Correct Result", function () {
            var nonBooleanRequest = new Object();
            var sut = new AutoFixtureTS.BooleanSwitch();
            var result = sut.Create(nonBooleanRequest);
            var expectedResult = new AutoFixtureTS.Kernel.NoSpecimen(nonBooleanRequest);
            expect(expectedResult).toEqual(result);
        });
        it("Create With Boolean Request Will Return Correct Result On First Call", function () {
            var booleanRequest = false;
            var sut = new AutoFixtureTS.BooleanSwitch();
            var result = sut.Create(booleanRequest);
            expect(result).toBeTruthy();
        });
        it("Create With Boolean Request Will Return Correct Result On Second Call", function () {
            var booleanRequest = false;
            var sut = new AutoFixtureTS.BooleanSwitch();
            sut.Create(booleanRequest);
            var result = sut.Create(booleanRequest);
            expect(result).toBeFalsy();
        });
        it("Create With Boolean Request Will Return Correct Result On third Call", function () {
            var booleanRequest = false;
            var sut = new AutoFixtureTS.BooleanSwitch();
            sut.Create(booleanRequest);
            sut.Create(booleanRequest);
            var result = sut.Create(booleanRequest);
            expect(result).toBeTruthy();
        });
        it("Create With Boolean Request Will Return Correct Result On Fourth Call", function () {
            var booleanRequest = false;
            var sut = new AutoFixtureTS.BooleanSwitch();
            sut.Create(booleanRequest);
            sut.Create(booleanRequest);
            sut.Create(booleanRequest);
            var result = sut.Create(booleanRequest);
            expect(result).toBeFalsy();
        });
    });
})(AutoFixtureTSUnitTest || (AutoFixtureTSUnitTest = {}));
