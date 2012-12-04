var Autofixture;
(function (Autofixture) {
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
                return new Autofixture.Kernel.NoSpecimen(request);
            }
            return this.CreateAnonymous();
        };
        return BooleanSwitch;
    })();
    Autofixture.BooleanSwitch = BooleanSwitch;    
})(Autofixture || (Autofixture = {}));
