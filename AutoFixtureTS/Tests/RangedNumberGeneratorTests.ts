/// <reference path="../Kernel/RangedNumberRequest.ts" />
/// <reference path="../RangedNumberGenerator.ts" />
/// <reference path="LoopTest.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutofixtureTSUnitTest {
    
    describe("AutofixtureTS.RangedNumberGeneratorTests", ()=> {
       
        it("CreateAnonymous with positive numbers gives Correct Result", () =>{
            var range = new AutofixtureTS.Kernel.RangedNumberRequest(1, 100);
            var sut = new AutofixtureTS.RangedNumberGenerator();            
            var expected = sut.Create(range);
            expect(expected).toBeGreaterThan(0);
            expect(expected).toBeLessThan(101);
        });
       
        it("CreateAnonymous with negative numbers gives Correct Result", () =>{
            var range = new AutofixtureTS.Kernel.RangedNumberRequest(-1, -10);
            var sut = new AutofixtureTS.RangedNumberGenerator();            
            var expected = sut.Create(range);
            expect(expected).toBeGreaterThan(-11);
            expect(expected).toBeLessThan(0);
        });
    });
}

