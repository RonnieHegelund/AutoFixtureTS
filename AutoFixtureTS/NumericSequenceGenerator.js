/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
var AutofixtureTS;
(function (AutofixtureTS) {
    // Class
    var NumericSequenceGenerator = (function () {
        function NumericSequenceGenerator() {
            this._num = 0;
        }
        NumericSequenceGenerator.prototype.CreateAnonymous = function () {
            this._num += 1;
            return this._num;
        };
        NumericSequenceGenerator.prototype.Create = function (request) {
            if(typeof request != "number") {
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            }
            return this.CreateAnonymous();
        };
        return NumericSequenceGenerator;
    })();
    AutofixtureTS.NumericSequenceGenerator = NumericSequenceGenerator;    
})(AutofixtureTS || (AutofixtureTS = {}));
