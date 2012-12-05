var AutofixtureTS;
(function (AutofixtureTS) {
    (function (Kernel) {
        // Class
        var NoSpecimen = (function () {
            // Constructor
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
