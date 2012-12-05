/// <reference path="BaseTypes/Guid.ts" />
/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
var AutofixtureTS;
(function (AutofixtureTS) {
    // Class
    var StringGenerator = (function () {
        function StringGenerator() {
        }
        StringGenerator.prototype.CreateAnonymous = function (key) {
            if(key === "" || key === undefined) {
                return Types.Guid.MakeNew().ToString();
            }
            return key + "_" + Types.Guid.MakeNew().ToString();
        };
        StringGenerator.prototype.Create = function (request) {
            if(typeof request != "string") {
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            }
            return this.CreateAnonymous();
        };
        return StringGenerator;
    })();
    AutofixtureTS.StringGenerator = StringGenerator;    
})(AutofixtureTS || (AutofixtureTS = {}));
