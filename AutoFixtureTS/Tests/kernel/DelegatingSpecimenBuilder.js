/// <reference path="../../Kernel/ISpecimenBuilder.ts" />
var AutoFixtureTSUnitTest;
(function (AutoFixtureTSUnitTest) {
    (function (Kernel) {
        var DelegatingSpecimenBuilder = (function () {
            function DelegatingSpecimenBuilder() { }
            DelegatingSpecimenBuilder.prototype.Create = function (request) {
                return request;
            };
            return DelegatingSpecimenBuilder;
        })();
        Kernel.DelegatingSpecimenBuilder = DelegatingSpecimenBuilder;        
    })(AutoFixtureTSUnitTest.Kernel || (AutoFixtureTSUnitTest.Kernel = {}));
    var Kernel = AutoFixtureTSUnitTest.Kernel;
})(AutoFixtureTSUnitTest || (AutoFixtureTSUnitTest = {}));
