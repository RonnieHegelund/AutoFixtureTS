/// <reference path="Kernel/RangedNumberRequest.ts" />
/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutoFixtureTS
{
    // Class
    export class RangedNumberGenerator implements AutoFixtureTS.Kernel.ISpecimenBuilder  {
            
        private _range: AutoFixtureTS.Kernel.RangedNumberRequest;
                
        private CreateAnonymous(): number {                        
            return Math.floor(Math.random() * (this._range.Max() - this._range.Min())) + this._range.Min();
        }

        public Create(request: Object): Object
        {             
            if (request instanceof AutoFixtureTS.Kernel.RangedNumberRequest)
            {               
                this._range = <AutoFixtureTS.Kernel.RangedNumberRequest>request;
                return this.CreateAnonymous(); 
            }
            return new AutoFixtureTS.Kernel.NoSpecimen(request);
        }
    }
}

