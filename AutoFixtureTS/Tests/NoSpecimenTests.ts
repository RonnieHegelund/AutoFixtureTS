/// <reference path="../Kernel/NoSpecimen.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutoFixtureTSUnitTest {
    
    describe("AutoFixtureTS.Kernel.NoSpecimen", ()=> {
        it("Can be constructed",  ()=> {
            var sut = new AutoFixtureTS.Kernel.NoSpecimen(null);
            
            expect(sut).toBeDefined();
            // Teardown
        });
    
        it('has correct request', ()=> {
            // Fixture setup
            var expectedRequest = {};
            var sut = new AutoFixtureTS.Kernel.NoSpecimen(expectedRequest);
            // Exercise system
            var result = sut.Request();
            // Verify outcome
            expect(result).toEqual(expectedRequest);
            // Teardown
        });
    });        
}