/// <reference path="BooleanSwitch.ts" />
/// <reference path="StringGenerator.ts" />
/// <reference path="RangedNumberGenerator.ts" />
/// <reference path="NumericSequenceGenerator.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
// Module
var AutoFixtureTS;
(function (AutoFixtureTS) {
    // Class
    var DefaultPrimitiveBuilders = (function () {
        function DefaultPrimitiveBuilders() {
            this._list = new Array();
            this._list.push(new AutoFixtureTS.NumericSequenceGenerator());
            this._list.push(new AutoFixtureTS.RangedNumberGenerator());
            this._list.push(new AutoFixtureTS.StringGenerator());
            this._list.push(new AutoFixtureTS.BooleanSwitch());
        }
        DefaultPrimitiveBuilders.prototype.GetSpecimens = function () {
            return this._list;
        };
        return DefaultPrimitiveBuilders;
    })();
    AutoFixtureTS.DefaultPrimitiveBuilders = DefaultPrimitiveBuilders;    
})(AutoFixtureTS || (AutoFixtureTS = {}));
