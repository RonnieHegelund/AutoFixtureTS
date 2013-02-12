var AutoFixtureTS;
(function (AutoFixtureTS) {
    var RangedNumberGenerator = (function () {
        function RangedNumberGenerator() { }
        RangedNumberGenerator.prototype.CreateAnonymous = function () {
            return Math.floor(Math.random() * (this._range.Max() - this._range.Min())) + this._range.Min();
        };
        RangedNumberGenerator.prototype.Create = function (request) {
            if(request instanceof AutoFixtureTS.Kernel.RangedNumberRequest) {
                this._range = request;
                return this.CreateAnonymous();
            }
            return new AutoFixtureTS.Kernel.NoSpecimen(request);
        };
        return RangedNumberGenerator;
    })();
    AutoFixtureTS.RangedNumberGenerator = RangedNumberGenerator;    
})(AutoFixtureTS || (AutoFixtureTS = {}));
