/// <reference path="LoopTest.ts" />
/// <reference path="../NumericSequenceGenerator.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutofixtureTSUnitTest {
    
    describe("AutofixtureTS.NumericSequenceGenerator", ()=> {

        it("Create Will Return One On First Call ", () =>{
            var sut = new AutofixtureTS.NumericSequenceGenerator();
            var numRequest = 10;
            var expected = sut.Create(numRequest);            
            expect(expected).toBe(1);
        });
        

        it("Create Will Return two On second Call ", () =>{
            var sut = new AutofixtureTS.NumericSequenceGenerator();
            var numRequest = 10;            
            var expected = new AutofixtureTSUnitTest.LoopTest(() => sut.Create(numRequest)).Execute(2);            
            expect(expected).toBe(2);
        });

        it("can create number ", () =>{
            var sut = new AutofixtureTS.NumericSequenceGenerator();
            var numRequest = 10;
            var expected = sut.Create(numRequest);           
            expect(typeof(expected)).toBe("number");
        });

        it("Create With Null Container Does Not Throw", () =>{
            var sut = new AutofixtureTS.NumericSequenceGenerator();
            var numRequest = null;
            sut.Create(numRequest);
            // Verify outcome (no exception indicates success)
            // Teardown
        });

        it("can create Anonymous number ", () =>{
            var sut = new AutofixtureTS.NumericSequenceGenerator();
            var expected = sut.CreateAnonymous();            
            expect(typeof(expected)).toBe("number");
        });

        it("Create Will Return One On First Call ", () =>{
            var sut = new AutofixtureTS.NumericSequenceGenerator();            
            var expected = sut.CreateAnonymous();
            expect(expected).toBe(1);
        });
        

        it("Create Will Return two On second Call ", () =>{
            var sut = new AutofixtureTS.NumericSequenceGenerator();            
            var expected = new AutofixtureTSUnitTest.LoopTest(() => sut.CreateAnonymous() ).Execute(2);
            expect(expected).toBe(2);
            
        });

        it("Create Will Return 10 On tenth Call ", () =>{
            var sut = new AutofixtureTS.NumericSequenceGenerator();            
            var expected = new AutofixtureTSUnitTest.LoopTest(() => sut.CreateAnonymous() ).Execute(10);
            expect(expected).toBe(10);
            
        });

    });
}

