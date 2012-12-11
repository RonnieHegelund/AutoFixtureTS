/// <reference path="StringGenerator.ts" />
/// <reference path="RangedNumberGenerator.ts" />
/// <reference path="NumericSequenceGenerator.ts" />
/// <reference path="NumericSequenceGenerator.ts" />
/// <reference path="BooleanSwitch.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
// Module
var AutofixtureTS;
(function (AutofixtureTS) {
    // Class
    var DefaultPrimitiveBuilders = (function () {
        function DefaultPrimitiveBuilders() {
            this._list = new Array();
            this._list.push(new AutofixtureTS.NumericSequenceGenerator());
            this._list.push(new AutofixtureTS.BooleanSwitch());
            this._list.push(new AutofixtureTS.RangedNumberGenerator());
            this._list.push(new AutofixtureTS.StringGenerator());
        }
        DefaultPrimitiveBuilders.prototype.GetSpecimens = function () {
            return this._list;
        }///Kernel.ISpecimenBuilder
        ;
        DefaultPrimitiveBuilders.prototype.AddSpecimen = function (item) {
            this._list.push(item);
        };
        DefaultPrimitiveBuilders.prototype.SpecimenOfType = function (type) {
            var t = null;
            this._list.forEach(function (item) {
                if(item instanceof type) {
                    t = item;
                }
            });
            return t;
        };
        return DefaultPrimitiveBuilders;
    })();
    AutofixtureTS.DefaultPrimitiveBuilders = DefaultPrimitiveBuilders;    
})(AutofixtureTS || (AutofixtureTS = {}));
