/// <reference path="../Kernel/NoSpecimen.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutofixtureTSUnitTest {
    
    describe("AutoFixtureTS.Kernel.NoSpecimen", ()=> {
        it("Can be constructed",  ()=> {
            var sut = new AutofixtureTS.Kernel.NoSpecimen(null);
            
            expect(sut).toBeDefined();
            // Teardown
        });
    
        it('has correct request', ()=> {
            // Fixture setup
            var expectedRequest = {};
            var sut = new AutofixtureTS.Kernel.NoSpecimen(expectedRequest);
            // Exercise system
            var result = sut.Request();
            // Verify outcome
            expect(result).toEqual(expectedRequest);
            // Teardown
        });
    });        
}