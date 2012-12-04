var Autofixture;
(function (Autofixture) {
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
    })(Autofixture.Kernel || (Autofixture.Kernel = {}));
    var Kernel = Autofixture.Kernel;
})(Autofixture || (Autofixture = {}));
