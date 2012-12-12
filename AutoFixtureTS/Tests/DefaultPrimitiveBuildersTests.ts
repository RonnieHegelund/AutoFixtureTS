/// <reference path="../DefaultPrimitiveBuilders.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutoFixtureTSUnitTest {
    
    describe("AutoFixtureTS.DefaultPrimitiveBuildersTests", ()=> {
        
        it("Create DefaultPrimitiveBuilders not null",  ()=> {
            var sut = new AutoFixtureTS.DefaultPrimitiveBuilders();
                        
            expect(sut).not.toBeNull();
        });
        
        it("Create DefaultPrimitiveBuilders length correct ",  ()=> {
            var sut = new AutoFixtureTS.DefaultPrimitiveBuilders();
                        
            expect(sut.GetSpecimens().length).toBe(4);
        });
                   
    });
}