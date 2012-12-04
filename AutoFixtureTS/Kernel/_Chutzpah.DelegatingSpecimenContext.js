var Autofixture;
(function (Autofixture) {
    (function (Kernel) {
        var DelegatingSpecimenContext = (function () {
            function DelegatingSpecimenContext() { }
            DelegatingSpecimenContext.prototype.DelegatingSpecimenContext = function () {
                this.OnResolve = function (r) {
                    return null;
                };
            };
            DelegatingSpecimenContext.prototype.Resolve = function (request) {
                return this.OnResolve(request);
            };
            DelegatingSpecimenContext.prototype.OnResolve = function (request) {
                return request;
            };
            return DelegatingSpecimenContext;
        })();
        Kernel.DelegatingSpecimenContext = DelegatingSpecimenContext;        
    })(Autofixture.Kernel || (Autofixture.Kernel = {}));
    var Kernel = Autofixture.Kernel;

})(Autofixture || (Autofixture = {}));

