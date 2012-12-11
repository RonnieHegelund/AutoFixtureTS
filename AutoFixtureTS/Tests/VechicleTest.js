/// <reference path="Vehicle.ts" />
/// <reference path="../Kernel/RangedNumberRequest.ts" />
/// <reference path="../SpecimenFactory.ts" />
/// <reference path="../Fixture.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutoFixtureDocumentationTest;
(function (AutoFixtureDocumentationTest) {
    (function (Simple) {
        describe("AutofixtureTS.Fixture", function () {
            it("can create CreateAnonymous Vehicle ", function () {
                var sut = new AutofixtureTS.Fixture();
                var expected = sut.CreateAnonymous(AutoFixtureDocumentationTest.Simple.Vehicle);
                expect(expected.GetWheels()).toBe(1);
            });
            it("can create CreateAnonymous Vehicle set wheels to 4 give correct result ", function () {
                var sut = new AutofixtureTS.Fixture();
                var expected = sut.CreateAnonymous(AutoFixtureDocumentationTest.Simple.Vehicle);
                expected.SetWheels(4);
                expect(expected.GetWheels()).toBe(4);
            });
            it("can create many Vehicles ", function () {
                var sut = new AutofixtureTS.Fixture();
                var expected = sut.CreateMany(AutoFixtureDocumentationTest.Simple.Vehicle);
                expect(expected.length).toBe(10);
            });
        });
    })(AutoFixtureDocumentationTest.Simple || (AutoFixtureDocumentationTest.Simple = {}));
    var Simple = AutoFixtureDocumentationTest.Simple;
})(AutoFixtureDocumentationTest || (AutoFixtureDocumentationTest = {}));
