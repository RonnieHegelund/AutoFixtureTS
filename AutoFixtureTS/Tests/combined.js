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
// Module
var AutofixtureTS;
(function (AutofixtureTS) {
    // Class
    var DefaultPrimitiveBuilders = (function () {
        // Constructor
        function DefaultPrimitiveBuilders() {
            throw Error("not implemented exception");
        }
        DefaultPrimitiveBuilders.prototype.OfType = function (type) {
        };
        return DefaultPrimitiveBuilders;
    })();
    AutofixtureTS.DefaultPrimitiveBuilders = DefaultPrimitiveBuilders;    
})(AutofixtureTS || (AutofixtureTS = {}));
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
var AutofixtureTS;
(function (AutofixtureTS) {
    // Class
    var NumberGenerator = (function () {
        function NumberGenerator(min, max) {
            this._min = 0;
            this._max = 100;
            this._max = max - 1;
            this._min = min + 1;
        }
        NumberGenerator.prototype.CreateAnonymous = function () {
            return Math.floor(Math.random() * (this._max - this._min)) + this._min;
        };
        NumberGenerator.prototype.Create = function (request) {
            if(typeof request != "number") {
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            }
            return this.CreateAnonymous();
        };
        return NumberGenerator;
    })();
    AutofixtureTS.NumberGenerator = NumberGenerator;    
})(AutofixtureTS || (AutofixtureTS = {}));
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
var Types;
(function (Types) {
    var Guid = (function () {
        function Guid(guid) {
            this.guid = guid;
            this._guid = guid;
        }
        Guid.prototype.ToString = function () {
            return this.guid;
        }// Static member
        ;
        Guid.MakeNew = function MakeNew() {
            var result;
            var i;
            var j;
            result = "";
            for(j = 0; j < 32; j++) {
                if(j == 8 || j == 12 || j == 16 || j == 20) {
                    result = result + '-';
                }
                i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
                result = result + i;
            }
            return new Guid(result);
        }
        return Guid;
    })();
    Types.Guid = Guid;    
})(Types || (Types = {}));
var AutofixtureTS;
(function (AutofixtureTS) {
    })(AutofixtureTS || (AutofixtureTS = {}));
var AutofixtureTS;
(function (AutofixtureTS) {
    (function (Kernel) {
        // Class
        var NoSpecimen = (function () {
            // Constructor
            function NoSpecimen(request) {
                this._request = request;
            }
            NoSpecimen.prototype.Request = function () {
                return this._request;
            };
            return NoSpecimen;
        })();
        Kernel.NoSpecimen = NoSpecimen;        
    })(AutofixtureTS.Kernel || (AutofixtureTS.Kernel = {}));
    var Kernel = AutofixtureTS.Kernel;
})(AutofixtureTS || (AutofixtureTS = {}));
