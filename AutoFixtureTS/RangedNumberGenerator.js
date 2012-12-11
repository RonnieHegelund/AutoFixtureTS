/// <reference path="Kernel/RangedNumberRequest.ts" />
/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
var AutofixtureTS;
(function (AutofixtureTS) {
    // Class
    var RangedNumberGenerator = (function () {
        function RangedNumberGenerator() { }
        RangedNumberGenerator.prototype.CreateAnonymous = function () {
            return Math.floor(Math.random() * (this._range.Max() - this._range.Min())) + this._range.Min();
        };
        RangedNumberGenerator.prototype.Create = function (request) {
            if(request instanceof AutofixtureTS.Kernel.RangedNumberRequest) {
                this._range = request;
                return this.CreateAnonymous();
            }
            return new AutofixtureTS.Kernel.NoSpecimen(request);
        };
        return RangedNumberGenerator;
    })();
    AutofixtureTS.RangedNumberGenerator = RangedNumberGenerator;    
})(AutofixtureTS || (AutofixtureTS = {}));
