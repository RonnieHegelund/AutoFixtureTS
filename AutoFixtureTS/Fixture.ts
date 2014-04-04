/// <reference path="IFixture.ts" />
/// <reference path="DefaultPrimitiveBuilders.ts" />
/// <reference path="Kernel/CompositeSpecimenBuilder.ts" />
/// <reference path="SpecimenFactory.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutoFixtureTS 
{
    export class Fixture implements AutoFixtureTS.IFixture {
        private _specimenFactory: AutoFixtureTS.SpecimenFactory;
        private _customizer : AutoFixtureTS.Kernel.CompositeSpecimenBuilder;
        private _repeatCount = 10;
        private _engine: AutoFixtureTS.Kernel.ISpecimenBuilder;
                                        
        constructor (engine? : AutoFixtureTS.Kernel.ISpecimenBuilder) 
        { 
            var defaultPrimitiveBuilders = new AutoFixtureTS.DefaultPrimitiveBuilders();
            this._customizer = new AutoFixtureTS.Kernel.CompositeSpecimenBuilder(defaultPrimitiveBuilders.getSpecimens());
            if (engine != null) {
                this._engine = engine;
                this._customizer.Builders().push(engine);
            }

            this._specimenFactory = new AutoFixtureTS.SpecimenFactory(this._customizer);
        }

        public RepeatCount(value : number) : void {
            this._repeatCount = value;
            this._specimenFactory.RepeatCount(value);
        }
        
        public Engine(): AutoFixtureTS.Kernel.ISpecimenBuilder { return this._engine; }
                
        public Customizations() : AutoFixtureTS.Kernel.ISpecimenBuilder[] {
            return this._customizer.Builders();
        }
                                       
        public CreateAnonymous(type: any): any {
            return this._specimenFactory.CreateAnonymous(type);
        }

        public CreateMany(type: any) : Array<any> {
            return this._specimenFactory.CreateMany(type);
        }
    }
}

