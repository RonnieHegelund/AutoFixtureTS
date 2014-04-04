/// <reference path="Vehicle.ts" />
/// <reference path="../Kernel/RangedNumberRequest.ts" />
/// <reference path="../SpecimenFactory.ts" />
/// <reference path="../Fixture.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutoFixtureDocumentationTest.Simple {
    
    describe("AutoFixtureTS.Fixture", () => {
        it("can create CreateAnonymous Vehicle ", () => {
            
            var sut = new AutoFixtureTS.Fixture();
            var expected = sut.CreateAnonymous<AutoFixtureDocumentationTest.Simple.Vehicle>(AutoFixtureDocumentationTest.Simple.Vehicle);
            expect(expected.getWheels()).toBe(1);
        });

        it("can create CreateAnonymous Vehicle set wheels to 4 give correct result ", () =>{
            var sut = new AutoFixtureTS.Fixture();
            var expected = sut.CreateAnonymous<AutoFixtureDocumentationTest.Simple.Vehicle>(AutoFixtureDocumentationTest.Simple.Vehicle);            
            expected.setWheels(4);
            expect(expected.getWheels()).toBe(4);
        });

        it("can create many Vehicles ", () =>{
            var sut = new AutoFixtureTS.Fixture();
            var expected = <AutoFixtureDocumentationTest.Simple.Vehicle[]> sut.CreateMany(AutoFixtureDocumentationTest.Simple.Vehicle);
            expect(expected.length).toBe(10);                                   
        });


        
    });
}