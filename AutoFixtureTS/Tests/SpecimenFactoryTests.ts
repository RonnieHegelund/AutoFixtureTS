/// <reference path="Vehicle.ts" />
/// <reference path="CompositeSpecimenBuilderTests.ts" />
/// <reference path="../DefaultPrimitiveBuilders.ts" />
/// <reference path="../SpecimenFactory.ts" />
/// <reference path="LoopTest.ts" />
/// <reference path="../NumericSequenceGenerator.ts" />
/// <reference path="../Kernel/ISpecimenBuilder.ts" />
/// <reference path="jasmine-1.2.d.ts" />

module AutoFixtureTSUnitTest {
    
    describe("AutoFixtureTS.SpecimenFactoryTests", ()=> {

        it("Create Will Return 1 On first Call ", () =>{

            var specimens = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutoFixtureTS.SpecimenFactory(engine);            
            var expected = sut.CreateAnonymous(Number);
            expect(expected).toBe(1);
            
        });

        it("Create Will Return 2 On second Call ", () => {
            var specimens = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutoFixtureTS.SpecimenFactory(engine);
            sut.CreateAnonymous(Number);
            var expected = sut.CreateAnonymous(Number);
            expect(expected).toBe(2);
        });

        it("can create defaultstring ", () =>{
            var specimens = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutoFixtureTS.SpecimenFactory(engine);        
            var expected = sut.CreateAnonymous("");

            var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
    
            expect(expected.match(regex).length).not.toBeNull();
        });
        
        it("can create boolean ", () =>{
            var specimens = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutoFixtureTS.SpecimenFactory(engine);        
            var expected = sut.CreateAnonymous(false);                  
            expect(typeof(expected)).toBe("boolean");
        });

        it("can create many numbers", () => {
            var specimens = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutoFixtureTS.SpecimenFactory(engine);      
            var expected = <number[]> sut.CreateMany(0);        
            expect(expected.length).toBe(10);
            expected.forEach(p => expect(p).toBeDefined());        
        });
        
        it("can create CreateAnonymous new Vehicle() ", () =>{
            var specimens = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutoFixtureTS.SpecimenFactory(engine);     

            var expected = <AutoFixtureDocumentationTest.Simple.Vehicle>sut.CreateAnonymous(new AutoFixtureDocumentationTest.Simple.Vehicle());
            expect(expected.GetWheels()).toBe(1);
        });

        it("can create CreateAnonymous Vehicle ", () =>{
            var specimens = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutoFixtureTS.SpecimenFactory(engine);     

            var expected = <AutoFixtureDocumentationTest.Simple.Vehicle>sut.CreateAnonymous(AutoFixtureDocumentationTest.Simple.Vehicle);
            expect(expected.GetWheels()).toBe(1);
        });
        
        it("can create CreateAnonymous Vehicle ", () =>{
            var specimens = new AutoFixtureTS.DefaultPrimitiveBuilders().GetSpecimens();
            var engine = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(specimens);
            var sut = new AutoFixtureTS.SpecimenFactory(engine);     

            var expected = <AutoFixtureDocumentationTest.Simple.Vehicle>sut.CreateAnonymous(AutoFixtureDocumentationTest.Simple.Vehicle);
            expected.SetWheels(4);
            expect(expected.GetWheels()).toBe(4);
        });
    });
}

