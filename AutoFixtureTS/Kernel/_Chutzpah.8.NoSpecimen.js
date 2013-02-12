var AutoFixtureTS;
(function (AutoFixtureTS) {
    (function (Kernel) {
        var NoSpecimen = (function () {
            function NoSpecimen(request) {
                this._request = request;
            }
            NoSpecimen.prototype.Request = function () {
                return this._request;
            };
            return NoSpecimen;
        })();
        Kernel.NoSpecimen = NoSpecimen;        
    })(AutoFixtureTS.Kernel || (AutoFixtureTS.Kernel = {}));
    var Kernel = AutoFixtureTS.Kernel;
})(AutoFixtureTS || (AutoFixtureTS = {}));
