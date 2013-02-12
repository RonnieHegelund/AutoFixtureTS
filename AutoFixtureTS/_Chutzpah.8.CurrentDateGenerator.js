var AutoFixtureTS;
(function (AutoFixtureTS) {
    var CurrentDateGenerator = (function () {
        function CurrentDateGenerator() { }
        CurrentDateGenerator.prototype.Create = function (request) {
            if(request instanceof Date == false) {
                return new AutoFixtureTS.Kernel.NoSpecimen(request);
            }
            var tmpDate = new Date();
            var now = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDay(), tmpDate.getHours(), tmpDate.getMinutes(), tmpDate.getSeconds(), tmpDate.getMilliseconds());
            return now;
        };
        return CurrentDateGenerator;
    })();
    AutoFixtureTS.CurrentDateGenerator = CurrentDateGenerator;    
})(AutoFixtureTS || (AutoFixtureTS = {}));
