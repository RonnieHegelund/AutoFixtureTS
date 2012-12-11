/// <reference path="Vehicle.ts" />
/// <reference path="CompositeSpecimenBuilderTests.ts" />
/// <reference path="../DefaultPrimitiveBuilders.ts" />
/// <reference path="../SpecimenFactory.ts" />
/// <reference path="LoopTest.ts" />
/// <reference path="../NumericSequenceGenerator.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutofixtureTSUnitTest;
(function (AutofixtureTSUnitTest) {
    describe("AutofixtureTS.SpecimenFactoryTests", function () {
        it("Create Will Return 1 On first Call ", function () {
            var specimens = new AutofixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutofixtureTS.SpecimenFactory(engine);
            var expected = sut.CreateAnonymous(Number);
            expect(expected).toBe(1);
        });
        it("Create Will Return 2 On second Call ", function () {
            var specimens = new AutofixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutofixtureTS.SpecimenFactory(engine);
            sut.CreateAnonymous(Number);
            var expected = sut.CreateAnonymous(Number);
            expect(expected).toBe(2);
        });
        it("can create defaultstring ", function () {
            var specimens = new AutofixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutofixtureTS.SpecimenFactory(engine);
            var expected = sut.CreateAnonymous("");
            var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
            expect(expected.match(regex).length).not.toBeNull();
        });
        it("can create boolean ", function () {
            var specimens = new AutofixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutofixtureTS.SpecimenFactory(engine);
            var expected = sut.CreateAnonymous(false);
            expect(typeof (expected)).toBe("boolean");
        });
        it("can create many numbers", function () {
            var specimens = new AutofixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutofixtureTS.SpecimenFactory(engine);
            var expected = sut.CreateMany(0);
            expect(expected.length).toBe(10);
            expected.forEach(function (p) {
                return expect(p).toBeDefined();
            });
        });
        it("can create CreateAnonymous new Vehicle() ", function () {
            var specimens = new AutofixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutofixtureTS.SpecimenFactory(engine);
            var expected = sut.CreateAnonymous(new AutoFixtureDocumentationTest.Simple.Vehicle());
            expect(expected.GetWheels()).toBe(1);
        });
        it("can create CreateAnonymous Vehicle ", function () {
            var specimens = new AutofixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutofixtureTS.SpecimenFactory(engine);
            var expected = sut.CreateAnonymous(AutoFixtureDocumentationTest.Simple.Vehicle);
            expect(expected.GetWheels()).toBe(1);
        });
        it("can create CreateAnonymous Vehicle ", function () {
            var specimens = new AutofixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutofixtureTS.SpecimenFactory(engine);
            var expected = sut.CreateAnonymous(AutoFixtureDocumentationTest.Simple.Vehicle);
            expected.SetWheels(4);
            expect(expected.GetWheels()).toBe(4);
        });
    });
})(AutofixtureTSUnitTest || (AutofixtureTSUnitTest = {}));
