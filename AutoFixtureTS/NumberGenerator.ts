/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutofixtureTS
{

    // Class
    export class NumberGenerator implements AutofixtureTS.Kernel.ISpecimenBuilder  {
            
        private _min = 0;
        private _max = 100;
        
        constructor (min?: number, max?: number) {
            this._max = max-1;
            this._min = min+1;
        }

        public CreateAnonymous(): number {            
            return Math.floor(Math.random() * (this._max - this._min)) + this._min;
        }

        public Create(request: Object): Object
        { 
            if (typeof request != "number")
            {
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            }

            return this.CreateAnonymous();
        }
    }

}

