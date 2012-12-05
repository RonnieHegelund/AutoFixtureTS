/// <reference path="../NumberGenerator.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutofixtureTSUnitTest {
    
    describe("AutofixtureTS.NumberGenerator", ()=> {

        it("can create Anonymous number ", () =>{
            var sut = new AutofixtureTS.NumberGenerator();
            var expected = sut.CreateAnonymous();            
            expect(typeof(expected)).toBe("number");
        });

        it("can create Anonymous negative numbers from range", () =>{
            var sut = new AutofixtureTS.NumberGenerator(0,-100);        
            var expected = sut.CreateAnonymous();
            expect(expected).toBeLessThan(0);
            expect(expected).toBeGreaterThan(-100);
        });

        it("can create Anonymous positive numbers from range", () =>{
            var sut = new AutofixtureTS.NumberGenerator(0,100);        
            var expected = sut.CreateAnonymous();
            expect(expected).toBeLessThan(100);
            expect(expected).toBeGreaterThan(0);
        });

        it("can create number ", () =>{
            var sut = new AutofixtureTS.NumberGenerator();
            var numRequest = 10;
            var expected = sut.Create(numRequest);           
            expect(typeof(expected)).toBe("number");
        });

        it("can create negative numbers from range", () =>{
            var sut = new AutofixtureTS.NumberGenerator(0,-100);        
            var numRequest = 10;
            var expected = sut.Create(numRequest);
            expect(expected).toBeLessThan(0);
            expect(expected).toBeGreaterThan(-100);
        });

        it("can create positive numbers from range", () =>{
            var sut = new AutofixtureTS.NumberGenerator(0,100);        
            var numRequest = 10;
            var expected = sut.Create(numRequest);
            expect(expected).toBeLessThan(100);
            expect(expected).toBeGreaterThan(0);
        });
    });
}