/// <reference path="../RangedNumberGenerator.ts" />
/// <reference path="../NumericSequenceGenerator.ts" />
/// <reference path="../BooleanSwitch.ts" />
/// <reference path="../DefaultPrimitiveBuilders.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="../BooleanSwitch.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutofixtureTSUnitTest {
    
    describe("AutofixtureTS.DefaultPrimitiveBuildersTests", ()=> {
        it("DefaultPrimitiveBuilders Create NumericSequenceGenerator will give result",  ()=> {
            var sut = new AutofixtureTS.DefaultPrimitiveBuilders();
            var result = <AutofixtureTS.NumericSequenceGenerator>sut.SpecimenOfType(AutofixtureTS.NumericSequenceGenerator);
            
            expect(result.CreateAnonymous()).toBe(1);
        });
   
        it("DefaultPrimitiveBuilders Create BooleanSwitch will give result",  ()=> {
            var sut = new AutofixtureTS.DefaultPrimitiveBuilders();
            var result = <AutofixtureTS.BooleanSwitch>sut.SpecimenOfType(AutofixtureTS.BooleanSwitch);
            
            expect(result.CreateAnonymous()).toBeTruthy();
        });
        /*
        it("DefaultPrimitiveBuilders Create BooleanSwitch will give result",  ()=> {
            var sut = new AutofixtureTS.DefaultPrimitiveBuilders();
            var result = <AutofixtureTS.RangedNumberGenerator>sut.SpecimenOfType(AutofixtureTS.RangedNumberGenerator);
            var expected = result.CreateAnonymous();
            expect(expected).toBeGreaterThan(0);
            expect(expected).toBeLessThan(101);
        });*/
    });
}