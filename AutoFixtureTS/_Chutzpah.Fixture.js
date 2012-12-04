var AutofixtureTS;
(function (AutofixtureTS) {
    var Fixture = (function () {
        function Fixture() {
        }
        Fixture.prototype.CreateAnonymous = function (type, min, max) {
            if(typeof type == "string") {
                return new AutofixtureTS.StringGenerator().CreateAnonymous();
            }
            if(typeof type == "number") {
                return new AutofixtureTS.NumberGenerator(min, max).CreateAnonymous();
            }
            if(typeof type == "boolean") {
                return new AutofixtureTS.BooleanSwitch().CreateAnonymous();
            }
            var tmp = new type();
            if(typeof tmp == "object" && tmp instanceof String) {
                return new AutofixtureTS.StringGenerator().CreateAnonymous();
            }
            if(typeof tmp == "object" && tmp instanceof Number) {
                return new AutofixtureTS.NumberGenerator(min, max).CreateAnonymous();
            }
            if(typeof tmp == "object" && tmp instanceof Boolean) {
                return new AutofixtureTS.BooleanSwitch().CreateAnonymous();
            }
            var t = new type();
            Object.keys(t).forEach(function (val) {
                if(typeof t[val] == "string") {
                    t[val] = new AutofixtureTS.StringGenerator().CreateAnonymous();
                }
                if(typeof t[val] == "number") {
                    t[val] = new AutofixtureTS.NumberGenerator(min, max).CreateAnonymous();
                }
                if(typeof t[val] == "boolean") {
                    t[val] = new AutofixtureTS.BooleanSwitch().CreateAnonymous();
                }
                if(typeof t[val] == "object" && t[val] instanceof Array) {
                }
            });
            return t;
        };
        Fixture.prototype.CreateMany = function (type) {
            var arr = new Array();
            for(var i = 0; i < 10; i++) {
                arr.push(this.CreateAnonymous(type));
            }
            return arr;
        };
        Fixture.prototype.CreateNumber = function () {
            return this.CreateNumberRange(1, 100);
        };
        Fixture.prototype.CreateNumberRange = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        Fixture.prototype.CreateString = function (key) {
            return new AutofixtureTS.StringGenerator().CreateAnonymous(key);
        };
        Fixture.prototype.CreateBoolean = function () {
            return new AutofixtureTS.BooleanSwitch().CreateAnonymous();
        };
        return Fixture;
    })();
    AutofixtureTS.Fixture = Fixture;    
})(AutofixtureTS || (AutofixtureTS = {}));

