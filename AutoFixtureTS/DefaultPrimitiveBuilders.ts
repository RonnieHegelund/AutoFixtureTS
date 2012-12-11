/// <reference path="BooleanSwitch.ts" />
/// <reference path="StringGenerator.ts" />
/// <reference path="RangedNumberGenerator.ts" />
/// <reference path="NumericSequenceGenerator.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
// Module
module AutofixtureTS 
{
    // Class
    export class DefaultPrimitiveBuilders {
        
        private _list : AutofixtureTS.Kernel.ISpecimenBuilder[];

        constructor () {
            this._list = new any[];
            this._list.push(new AutofixtureTS.NumericSequenceGenerator());
            this._list.push(new AutofixtureTS.RangedNumberGenerator());
            this._list.push(new AutofixtureTS.StringGenerator());
            this._list.push(new AutofixtureTS.BooleanSwitch());
        } 

        public GetSpecimens(): AutofixtureTS.Kernel.ISpecimenBuilder[] {
            return this._list;
        }
    }

}

