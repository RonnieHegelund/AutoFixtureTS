var AutoFixtureTS;
(function (AutoFixtureTS) {
    var StringGenerator = (function () {
        function StringGenerator() { }
        StringGenerator.prototype.CreateAnonymous = function (prefix) {
            if(prefix != null && prefix != undefined && prefix != "") {
                return prefix + Types.Guid.MakeNew().ToString();
            }
            return Types.Guid.MakeNew().ToString();
        };
        StringGenerator.prototype.Create = function (request) {
            if(typeof request != "string") {
                return new AutoFixtureTS.Kernel.NoSpecimen(request);
            }
            return this.CreateAnonymous(request);
        };
        return StringGenerator;
    })();
    AutoFixtureTS.StringGenerator = StringGenerator;    
})(AutoFixtureTS || (AutoFixtureTS = {}));
