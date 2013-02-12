var AutoFixtureTS;
(function (AutoFixtureTS) {
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
                return new AutoFixtureTS.Kernel.NoSpecimen(request);
            }
            return this.CreateAnonymous();
        };
        return NumericSequenceGenerator;
    })();
    AutoFixtureTS.NumericSequenceGenerator = NumericSequenceGenerator;    
})(AutoFixtureTS || (AutoFixtureTS = {}));
