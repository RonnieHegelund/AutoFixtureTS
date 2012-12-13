/// <reference path="../CurrentDateGenerator.ts" />
/// <reference path="../StringGenerator.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutoFixtureTSUnitTest {
    describe("AutoFixtureTS.CurrentDateGeneratorTests", () => {
        
        it("can create Anonymous date ", () =>{
            // Fixture setup
            var sut = new AutoFixtureTS.CurrentDateGenerator();
            var date = <Date>sut.Create(new Date());                        
            var d = new Date();                         
            // Verify outcome
            expect(date.getTime()).toBeLessThan(d.getTime());
            // Teardown            
        });
    });
}