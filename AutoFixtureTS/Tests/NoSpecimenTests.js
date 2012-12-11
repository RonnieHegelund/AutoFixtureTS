/// <reference path="../Kernel/NoSpecimen.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />
var AutofixtureTSUnitTest;
(function (AutofixtureTSUnitTest) {
    describe("AutoFixtureTS.Kernel.NoSpecimen", function () {
        it("Can be constructed", function () {
            var sut = new AutofixtureTS.Kernel.NoSpecimen(null);
            expect(sut).toBeDefined();
            // Teardown
                    });
        it('has correct request', function () {
            // Fixture setup
            var expectedRequest = {
            };
            var sut = new AutofixtureTS.Kernel.NoSpecimen(expectedRequest);
            // Exercise system
            var result = sut.Request();
            // Verify outcome
            expect(result).toEqual(expectedRequest);
            // Teardown
                    });
    });
})(AutofixtureTSUnitTest || (AutofixtureTSUnitTest = {}));
