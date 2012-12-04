var AutofixtureTS;
(function (AutofixtureTS) {
    var NumberGenerator = (function () {
        function NumberGenerator(min, max) {
            this._min = 0;
            this._max = 100;
            this._max = max;
            this._min = min;
        }
        NumberGenerator.prototype.CreateAnonymous = function () {
            return Math.floor(Math.random() * (this._max - this._min + 1)) + this._min;
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
