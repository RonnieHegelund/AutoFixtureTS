/// <reference path="../Kernel/RangedNumberRequest.ts" />
/// <reference path="Vehicle.ts" />
/// <reference path="../Kernel/NoSpecimen.ts" />
/// <reference path="../DefaultPrimitiveBuilders.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="../Kernel/CompositeSpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutoFixtureTSUnitTest;
(function (AutoFixtureTSUnitTest) {
    describe("AutoFixtureTS.CompositeSpecimenBuilder", function () {
        it("Can create Builders Will Not Be Null When Sut Is Created ", function () {
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            expect(sut).not.toBeNull();
        });
        it("Builders length will be the same as passed to the constructor", function () {
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            var result = sut.Builders().length;
            expect(result).toBeGreaterThan(0);
        });
        it("Create null returns correct result ( nospeciment ) object ", function () {
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            var result = sut.Create(new AutoFixtureDocumentationTest.Simple.Vehicle());
            expect(result instanceof AutoFixtureTS.Kernel.NoSpecimen).toBeTruthy();
        });
        it("CompositeSpecimenBuilder create expect number and value 1", function () {
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            var result = sut.Create(1);
            expect(result).toBe(1);
        });
        it("CompositeSpecimenBuilder create expect number and value Number", function () {
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            var result = sut.Create(Number());
            expect(result).toBe(1);
        });
        it("CompositeSpecimenBuilder create expect boolean and value true", function () {
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            var result = sut.Create(false);
            expect(result).toBeTruthy();
        });
        it("CompositeSpecimenBuilder create expect Boolean() and value true", function () {
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            var result = sut.Create(Boolean());
            expect(result).toBeTruthy();
        });
        it("CompositeSpecimenBuilder create expect String() and value string guid", function () {
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            var result = sut.Create(String());
            var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
            expect(result).toMatch(regex);
        });
        it('CompositeSpecimenBuilder create expect "" and value string guid', function () {
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            var result = sut.Create("");
            var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
            expect(result).toMatch(regex);
        });
        it("Create with negative numbers gives Correct Result", function () {
            var range = new AutoFixtureTS.Kernel.RangedNumberRequest(1, 10);
            var builders = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var sut = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(builders);
            var expected = sut.Create(range);
            expect(expected).toBeGreaterThan(0);
            expect(expected).toBeLessThan(11);
        });
    });
})(AutoFixtureTSUnitTest || (AutoFixtureTSUnitTest = {}));
