/// <reference path="IFixture.ts" />
/// <reference path="DefaultPrimitiveBuilders.ts" />
/// <reference path="Kernel/CompositeSpecimenBuilder.ts" />
/// <reference path="SpecimenFactory.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutofixtureTS 
{
    export class Fixture implements AutofixtureTS.IFixture {
        private _specimenFactory: AutofixtureTS.SpecimenFactory;
        private _customizer : AutofixtureTS.Kernel.CompositeSpecimenBuilder;
        private _repeatCount = 10;
        private _engine: AutofixtureTS.Kernel.ISpecimenBuilder;
                                        
        constructor (engine? : AutofixtureTS.Kernel.ISpecimenBuilder) 
        { 
            var defaultPrimitiveBuilders = new AutofixtureTS.DefaultPrimitiveBuilders();
            this._customizer = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(defaultPrimitiveBuilders.GetSpecimens());
            if (engine != null) {
                this._engine = engine;
                this._customizer.Builders().push(engine);
            }
        
            this._specimenFactory = new AutofixtureTS.SpecimenFactory(this._customizer);
        };

        public RepeatCount(value : number) : void {
            this._repeatCount = value;
            this._specimenFactory.RepeatCount(value);
        }
        
        public Engine(): AutofixtureTS.Kernel.ISpecimenBuilder { return this._engine; }
                
        public Customizations() : AutofixtureTS.Kernel.ISpecimenBuilder[] {
            return this._customizer.Builders();
        }
                                       
        public CreateAnonymous(type: any): any {
            return this._specimenFactory.CreateAnonymous(type);
        }

        public CreateMany(type: any) : any[] {
            return this._specimenFactory.CreateMany(type);
        }
    }
}

