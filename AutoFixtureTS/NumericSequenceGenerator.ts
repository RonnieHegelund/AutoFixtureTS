/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutofixtureTS
{

    // Class
    export class NumericSequenceGenerator implements AutofixtureTS.Kernel.ISpecimenBuilder  {
            
        private _num = 0;
                
        public CreateAnonymous(): number {                        
            this._num += 1;
            return this._num;
        }

        public Create(request: Object): Object
        { 
            if (typeof request != "number")
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            
            return this.CreateAnonymous();
        }
    }

}

