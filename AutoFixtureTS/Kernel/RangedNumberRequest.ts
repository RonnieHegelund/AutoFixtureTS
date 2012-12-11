/// <reference path="../TypeScript.Base.ts" />
module AutofixtureTS.Kernel {
    // Class
    export class RangedNumberRequest implements TypeScript.Base.IEquatable {
        private _min: number;
        private _max: number;
        // Constructor
        public Max(): number 
        { 
            return this._max; 
        }
        
        public Min(): number 
        { 
            return this._min; 
        }

        constructor (minimum : number, maximum : number) { 
            this._min = minimum;
            this._max = maximum;
        }
      
        public Equals(other : any): bool {
            if (other == null) 
                return false;
            if(other instanceof RangedNumberRequest == false)
                return false;
            var o = <RangedNumberRequest>other;
            if (this._max != o.Max())
                return false;
            if (this._min != o.Min())
                return false;

            return true;
        }
    }
}
