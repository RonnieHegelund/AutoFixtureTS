/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />
var AutofixtureTS;
(function (AutofixtureTS) {
    // Class
    var BooleanSwitch = (function () {
        function BooleanSwitch() {
            this.b = false;
        }
        BooleanSwitch.prototype.CreateAnonymous = function () {
            this.b = !this.b;
            return this.b;
        };
        BooleanSwitch.prototype.Create = function (request) {
            if(typeof request != "boolean") {
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            }
            return this.CreateAnonymous();
        };
        return BooleanSwitch;
    })();
    AutofixtureTS.BooleanSwitch = BooleanSwitch;    
})(AutofixtureTS || (AutofixtureTS = {}));
