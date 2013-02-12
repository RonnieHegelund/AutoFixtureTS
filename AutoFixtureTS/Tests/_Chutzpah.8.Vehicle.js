var AutoFixtureDocumentationTest;
(function (AutoFixtureDocumentationTest) {
    (function (Simple) {
        var Vehicle = (function () {
            function Vehicle() {
                this._wheels = 0;
            }
            Vehicle.prototype.GetWheels = function () {
                return this._wheels;
            };
            Vehicle.prototype.SetWheels = function (value) {
                this._wheels = value;
            };
            return Vehicle;
        })();
        Simple.Vehicle = Vehicle;        
    })(AutoFixtureDocumentationTest.Simple || (AutoFixtureDocumentationTest.Simple = {}));
    var Simple = AutoFixtureDocumentationTest.Simple;
})(AutoFixtureDocumentationTest || (AutoFixtureDocumentationTest = {}));
