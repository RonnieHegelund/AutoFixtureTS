/// <reference path="../TypeScript.Base.ts" />
var AutoFixtureTS;
(function (AutoFixtureTS) {
    (function (Kernel) {
        // Class
        var RangedNumberRequest = (function () {
            function RangedNumberRequest(minimum, maximum) {
                this._min = minimum;
                this._max = maximum;
            }
            RangedNumberRequest.prototype.Max = // Constructor
            function () {
                return this._max;
            };
            RangedNumberRequest.prototype.Min = function () {
                return this._min;
            };
            RangedNumberRequest.prototype.Equals = function (other) {
                if(other == null) {
                    return false;
                }
                if(other instanceof RangedNumberRequest == false) {
                    return false;
                }
                var o = other;
                if(this._max != o.Max()) {
                    return false;
                }
                if(this._min != o.Min()) {
                    return false;
                }
                return true;
            };
            return RangedNumberRequest;
        })();
        Kernel.RangedNumberRequest = RangedNumberRequest;        
    })(AutoFixtureTS.Kernel || (AutoFixtureTS.Kernel = {}));
    var Kernel = AutoFixtureTS.Kernel;
})(AutoFixtureTS || (AutoFixtureTS = {}));
