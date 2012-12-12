/// <reference path="LoopTest.ts" />
/// <reference path="../NumericSequenceGenerator.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutoFixtureTSUnitTest {
    
    describe("AutoFixtureTS.NumericSequenceGenerator", ()=> {

        it("Create Will Return One On First Call ", () =>{
            var sut = new AutoFixtureTS.NumericSequenceGenerator();
            var numRequest = 10;
            var expected = sut.Create(numRequest);            
            expect(expected).toBe(1);
        });
        

        it("Create Will Return two On second Call ", () =>{
            var sut = new AutoFixtureTS.NumericSequenceGenerator();
            var numRequest = 10;            
            var expected = new AutoFixtureTSUnitTest.LoopTest(() => sut.Create(numRequest)).Execute(2);            
            expect(expected).toBe(2);
        });

        it("can create number ", () =>{
            var sut = new AutoFixtureTS.NumericSequenceGenerator();
            var numRequest = 10;
            var expected = sut.Create(numRequest);           
            expect(typeof(expected)).toBe("number");
        });

        it("Create With Null Container Does Not Throw", () =>{
            var sut = new AutoFixtureTS.NumericSequenceGenerator();
            var numRequest = null;
            sut.Create(numRequest);
            // Verify outcome (no exception indicates success)
            // Teardown
        });

        it("can create Anonymous number ", () =>{
            var sut = new AutoFixtureTS.NumericSequenceGenerator();
            var expected = sut.CreateAnonymous();            
            expect(typeof(expected)).toBe("number");
        });

        it("Create Will Return One On First Call ", () =>{
            var sut = new AutoFixtureTS.NumericSequenceGenerator();            
            var expected = sut.CreateAnonymous();
            expect(expected).toBe(1);
        });
        

        it("Create Will Return two On second Call ", () =>{
            var sut = new AutoFixtureTS.NumericSequenceGenerator();            
            var expected = new AutoFixtureTSUnitTest.LoopTest(() => sut.CreateAnonymous() ).Execute(2);
            expect(expected).toBe(2);
            
        });

        it("Create Will Return 10 On tenth Call ", () =>{
            var sut = new AutoFixtureTS.NumericSequenceGenerator();            
            var expected = new AutoFixtureTSUnitTest.LoopTest(() => sut.CreateAnonymous() ).Execute(10);
            expect(expected).toBe(10);
            
        });

    });
}

