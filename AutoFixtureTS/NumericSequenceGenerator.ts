/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutoFixtureTS
{

    // Class
    export class NumericSequenceGenerator implements AutoFixtureTS.Kernel.ISpecimenBuilder {
            
        private _num = 0;
                
        public CreateAnonymous(): number {
            this._num += 1;
            return this._num;
        }

        public Create(request: Object): Object
        { 
            if (typeof request != "number")
                return new AutoFixtureTS.Kernel.NoSpecimen(request);
            
            return this.CreateAnonymous();
        }
    }

}

