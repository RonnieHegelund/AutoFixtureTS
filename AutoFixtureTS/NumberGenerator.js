/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
var AutofixtureTS;
(function (AutofixtureTS) {
    // Class
    var NumberGenerator = (function () {
        function NumberGenerator(min, max) {
            this._min = 0;
            this._max = 100;
            this._max = max - 1;
            this._min = min + 1;
        }
        NumberGenerator.prototype.CreateAnonymous = function () {
            return Math.floor(Math.random() * (this._max - this._min)) + this._min;
        };
        NumberGenerator.prototype.Create = function (request) {
            if(typeof request != "number") {
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            }
            return this.CreateAnonymous();
        };
        return NumberGenerator;
    })();
    AutofixtureTS.NumberGenerator = NumberGenerator;    
})(AutofixtureTS || (AutofixtureTS = {}));
