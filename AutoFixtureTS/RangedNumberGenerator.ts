/// <reference path="Kernel/RangedNumberRequest.ts" />
/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutofixtureTS
{
    // Class
    export class RangedNumberGenerator implements AutofixtureTS.Kernel.ISpecimenBuilder  {
            
        private _range: AutofixtureTS.Kernel.RangedNumberRequest;
                
        private CreateAnonymous(): number {                        
            return Math.floor(Math.random() * (this._range.Max() - this._range.Min())) + this._range.Min();
        }

        public Create(request: Object): Object
        {             
            if (request instanceof AutofixtureTS.Kernel.RangedNumberRequest)
            {               
                this._range = <AutofixtureTS.Kernel.RangedNumberRequest>request;
                return this.CreateAnonymous(); 
            }
            return new AutofixtureTS.Kernel.NoSpecimen(request);
        }
    }

}

