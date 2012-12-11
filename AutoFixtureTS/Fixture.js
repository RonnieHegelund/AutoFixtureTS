/// <reference path="IFixture.ts" />
/// <reference path="DefaultPrimitiveBuilders.ts" />
/// <reference path="Kernel/CompositeSpecimenBuilder.ts" />
/// <reference path="SpecimenFactory.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
var AutofixtureTS;
(function (AutofixtureTS) {
    var Fixture = (function () {
        function Fixture(engine) {
            this._repeatCount = 10;
            var defaultPrimitiveBuilders = new AutofixtureTS.DefaultPrimitiveBuilders();
            this._customizer = new AutofixtureTS.Kernel.CompositeSpecimenBuilder(defaultPrimitiveBuilders.GetSpecimens());
            if(engine != null) {
                this._engine = engine;
                this._customizer.Builders().push(engine);
            }
            this._specimenFactory = new AutofixtureTS.SpecimenFactory(this._customizer);
        }
        Fixture.prototype.RepeatCount = function (value) {
            this._repeatCount = value;
            this._specimenFactory.RepeatCount(value);
        };
        Fixture.prototype.Engine = function () {
            return this._engine;
        };
        Fixture.prototype.Customizations = function () {
            return this._customizer.Builders();
        };
        Fixture.prototype.CreateAnonymous = function (type) {
            return this._specimenFactory.CreateAnonymous(type);
        };
        Fixture.prototype.CreateMany = function (type) {
            return this._specimenFactory.CreateMany(type);
        };
        return Fixture;
    })();
    AutofixtureTS.Fixture = Fixture;    
})(AutofixtureTS || (AutofixtureTS = {}));
