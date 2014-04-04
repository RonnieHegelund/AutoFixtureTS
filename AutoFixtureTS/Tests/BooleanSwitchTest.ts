/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="../BooleanSwitch.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutoFixtureTSUnitTest {
    
    describe("AutoFixtureTS.BooleanSwitch", ()=> {
        it("CreateAnonymous Will Return True On First Call",  ()=> {
            var sut = new AutoFixtureTS.BooleanSwitch();
            var result = sut.CreateAnonymous();
            expect(result).toBeTruthy();
        });
    
        it("CreateAnonymous Will Return false On Second Call",  ()=> {
            var sut = new AutoFixtureTS.BooleanSwitch();
            sut.CreateAnonymous();
            var result = sut.CreateAnonymous();
            expect(result).toBeFalsy();
        });
    
        it("CreateAnonymous Will Return true On third Call",  ()=> {
            var sut = new AutoFixtureTS.BooleanSwitch();
            sut.CreateAnonymous();
            sut.CreateAnonymous();
            var result = sut.CreateAnonymous();
            expect(result).toBeTruthy();
        });
    
        it("CreateAnonymous Will Return False On Fourth Call",  ()=> {
            var sut = new AutoFixtureTS.BooleanSwitch();
            sut.CreateAnonymous();
            sut.CreateAnonymous();
            sut.CreateAnonymous();
            var result = sut.CreateAnonymous();
            expect(result).toBeFalsy();
        });
    
        it("Create With NonBoolean Request Will Return Correct Result",  ()=> {
            var nonBooleanRequest = new Object();
            var sut = new AutoFixtureTS.BooleanSwitch();
            
            var result = sut.Create(nonBooleanRequest);
            var expectedResult = new AutoFixtureTS.Kernel.NoSpecimen(nonBooleanRequest);
            expect(expectedResult).toEqual(result);
        });
    
        it("Create With Boolean Request Will Return Correct Result On First Call",  ()=> {
            var booleanRequest = false;
            var sut = new AutoFixtureTS.BooleanSwitch();            
            var result = sut.Create(booleanRequest);            
            expect(result).toBeTruthy();
        });
    
        it("Create With Boolean Request Will Return Correct Result On Second Call",  ()=> {
            var booleanRequest = false;
            var sut = new AutoFixtureTS.BooleanSwitch();            
           
            sut.Create(booleanRequest);

            var result = sut.Create(booleanRequest);
            expect(result).toBeFalsy();
        });
    
        it("Create With Boolean Request Will Return Correct Result On third Call",  ()=> {
            var booleanRequest = false;
            var sut = new AutoFixtureTS.BooleanSwitch();   
            sut.Create(booleanRequest);
            sut.Create(booleanRequest);         
            var result = sut.Create(booleanRequest);            
            expect(result).toBeTruthy();
        });
    
        it("Create With Boolean Request Will Return Correct Result On Fourth Call",  ()=> {
            var booleanRequest = false;                                    
            var sut = new AutoFixtureTS.BooleanSwitch();            
           
            sut.Create(booleanRequest);
            sut.Create(booleanRequest);
            sut.Create(booleanRequest);

            var result = sut.Create(booleanRequest);
            expect(result).toBeFalsy();
        });
    });
}