/// <reference path="../StringGenerator.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutoFixtureTSUnitTest {
    describe("AutoFixtureTS.StringGenerator", () => {
        
        it("can create Anonymous string ", () =>{
            var sut = new AutoFixtureTS.StringGenerator();

            var expected = sut.CreateAnonymous("");
            var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
            
            expect(expected).toMatch(regex);
        });
        
        it("can create Anonymous string with key ", () =>{
            var sut = new AutoFixtureTS.StringGenerator();

            var expected = sut.CreateAnonymous("tester");
            var regex = "^(tester)(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";

            expect(expected).toMatch(regex);
        });
    });
}