var AutoFixtureTS;
(function (AutoFixtureTS) {
    var SpecimenFactory = (function () {
        function SpecimenFactory(engine) {
            this._repeatCount = 10;
            this._engine = engine;
        }
        SpecimenFactory.prototype.RepeatCount = function (value) {
            this._repeatCount = value;
        };
        SpecimenFactory.prototype.CreateAnonymous = function (type) {
            var _this = this;
            if(typeof type != "object" && typeof type != "function") {
                return this._engine.Create(type);
            }
            if(typeof type == "function" && type() != null) {
                return this._engine.Create(type());
            }
            if(typeof type == "function" && type() == null) {
                type = new type();
            }
            if(typeof type == "object") {
                var t = this._engine.Create(type);
                if(t instanceof AutoFixtureTS.Kernel.NoSpecimen == false) {
                    return t;
                } else {
                    t = type;
                    Object.keys(t).forEach(function (val) {
                        t[val] = _this.CreateAnonymous(t[val]);
                    });
                }
                return t;
            }
            return;
        };
        SpecimenFactory.prototype.CreateMany = function (type) {
            var arr = new Array();
            for(var i = 0; i < this._repeatCount; i++) {
                arr.push(this.CreateAnonymous(type));
            }
            return arr;
        };
        return SpecimenFactory;
    })();
    AutoFixtureTS.SpecimenFactory = SpecimenFactory;    
})(AutoFixtureTS || (AutoFixtureTS = {}));
