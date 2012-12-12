/// <reference path="BooleanSwitch.ts" />
/// <reference path="StringGenerator.ts" />
/// <reference path="RangedNumberGenerator.ts" />
/// <reference path="NumericSequenceGenerator.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
// Module
module AutoFixtureTS 
{
    // Class
    export class DefaultPrimitiveBuilders {
        
        private _list : AutoFixtureTS.Kernel.ISpecimenBuilder[];

        constructor () {
            this._list = new any[];
            this._list.push(new AutoFixtureTS.NumericSequenceGenerator());
            this._list.push(new AutoFixtureTS.RangedNumberGenerator());
            this._list.push(new AutoFixtureTS.StringGenerator());
            this._list.push(new AutoFixtureTS.BooleanSwitch());
        } 

        public GetSpecimens(): AutoFixtureTS.Kernel.ISpecimenBuilder[] {
            return this._list;
        }
    }

}

