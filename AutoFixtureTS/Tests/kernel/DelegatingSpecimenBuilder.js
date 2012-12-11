/// <reference path="../../Kernel/ISpecimenBuilder.ts" />
var AutofixtureTSUnitTest;
(function (AutofixtureTSUnitTest) {
    (function (Kernel) {
        var DelegatingSpecimenBuilder = (function () {
            function DelegatingSpecimenBuilder() { }
            DelegatingSpecimenBuilder.prototype.Create = function (request) {
                return request;
            };
            return DelegatingSpecimenBuilder;
        })();
        Kernel.DelegatingSpecimenBuilder = DelegatingSpecimenBuilder;        
    })(AutofixtureTSUnitTest.Kernel || (AutofixtureTSUnitTest.Kernel = {}));
    var Kernel = AutofixtureTSUnitTest.Kernel;
})(AutofixtureTSUnitTest || (AutofixtureTSUnitTest = {}));
