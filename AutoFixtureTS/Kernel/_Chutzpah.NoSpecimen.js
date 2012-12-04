var AutofixtureTS;
(function (AutofixtureTS) {
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
    })(AutofixtureTS.Kernel || (AutofixtureTS.Kernel = {}));
    var Kernel = AutofixtureTS.Kernel;

})(AutofixtureTS || (AutofixtureTS = {}));

