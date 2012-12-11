/// <reference path="NoSpecimen.ts" />
/// <reference path="ISpecimenBuilder.ts" />
var AutofixtureTS;
(function (AutofixtureTS) {
    (function (Kernel) {
        var CompositeSpecimenBuilder = (function () {
            function CompositeSpecimenBuilder(builders) {
                if(builders != null) {
                    this._builders = builders;
                }
            }
            CompositeSpecimenBuilder.prototype.Builders = function () {
                return this._builders;
            };
            CompositeSpecimenBuilder.prototype.Create = function (request) {
                var result = null;
                if(typeof request == "function") {
                    throw new Error("requet param is a function, this is not allowed");
                }
                this._builders.forEach(function (item) {
                    var tmp = item.Create(request);
                    if(tmp instanceof AutofixtureTS.Kernel.NoSpecimen == false) {
                        result = tmp;
                        return tmp;
                    }
                });
                if(result == null) {
                    return new AutofixtureTS.Kernel.NoSpecimen();
                }
                return result;
            };
            return CompositeSpecimenBuilder;
        })();
        Kernel.CompositeSpecimenBuilder = CompositeSpecimenBuilder;        
    })(AutofixtureTS.Kernel || (AutofixtureTS.Kernel = {}));
    var Kernel = AutofixtureTS.Kernel;
})(AutofixtureTS || (AutofixtureTS = {}));
