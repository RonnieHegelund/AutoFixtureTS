/// <reference path="../DefaultPrimitiveBuilders.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutofixtureTSUnitTest {
    
    describe("AutofixtureTS.DefaultPrimitiveBuildersTests", ()=> {
        
        it("Create DefaultPrimitiveBuilders not null",  ()=> {
            var sut = new AutofixtureTS.DefaultPrimitiveBuilders();
                        
            expect(sut).not.toBeNull();
        });
        
        it("Create DefaultPrimitiveBuilders length correct ",  ()=> {
            var sut = new AutofixtureTS.DefaultPrimitiveBuilders();
                        
            expect(sut.GetSpecimens().length).toBe(4);
        });
                   
    });
}