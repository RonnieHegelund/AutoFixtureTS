/// <reference path="CurrentDateGenerator.ts" />
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
        
        private _list : Array<AutoFixtureTS.Kernel.ISpecimenBuilder>;

        constructor () {
            this._list = new Array<AutoFixtureTS.Kernel.ISpecimenBuilder>();
            this._list.push(new AutoFixtureTS.NumericSequenceGenerator());
            this._list.push(new AutoFixtureTS.RangedNumberGenerator());
            this._list.push(new AutoFixtureTS.StringGenerator());
            this._list.push(new AutoFixtureTS.BooleanSwitch());
            this._list.push(new AutoFixtureTS.CurrentDateGenerator());
        } 

        public getSpecimens(): Array<AutoFixtureTS.Kernel.ISpecimenBuilder> {
            return this._list;
        }
    }

}

