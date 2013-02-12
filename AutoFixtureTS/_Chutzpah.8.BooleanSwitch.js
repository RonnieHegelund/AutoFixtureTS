var AutoFixtureTS;
(function (AutoFixtureTS) {
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
                return new AutoFixtureTS.Kernel.NoSpecimen(request);
            }
            return this.CreateAnonymous();
        };
        return BooleanSwitch;
    })();
    AutoFixtureTS.BooleanSwitch = BooleanSwitch;    
})(AutoFixtureTS || (AutoFixtureTS = {}));
