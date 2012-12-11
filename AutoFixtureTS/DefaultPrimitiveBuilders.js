/// <reference path="BooleanSwitch.ts" />
/// <reference path="StringGenerator.ts" />
/// <reference path="RangedNumberGenerator.ts" />
/// <reference path="NumericSequenceGenerator.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
// Module
var AutofixtureTS;
(function (AutofixtureTS) {
    // Class
    var DefaultPrimitiveBuilders = (function () {
        function DefaultPrimitiveBuilders() {
            this._list = new Array();
            this._list.push(new AutofixtureTS.NumericSequenceGenerator());
            this._list.push(new AutofixtureTS.RangedNumberGenerator());
            this._list.push(new AutofixtureTS.StringGenerator());
            this._list.push(new AutofixtureTS.BooleanSwitch());
        }
        DefaultPrimitiveBuilders.prototype.GetSpecimens = function () {
            return this._list;
        };
        return DefaultPrimitiveBuilders;
    })();
    AutofixtureTS.DefaultPrimitiveBuilders = DefaultPrimitiveBuilders;    
})(AutofixtureTS || (AutofixtureTS = {}));
