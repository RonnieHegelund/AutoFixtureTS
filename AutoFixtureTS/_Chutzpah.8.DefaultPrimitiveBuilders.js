var AutoFixtureTS;
(function (AutoFixtureTS) {
    var DefaultPrimitiveBuilders = (function () {
        function DefaultPrimitiveBuilders() {
            this._list = new Array();
            this._list.push(new AutoFixtureTS.NumericSequenceGenerator());
            this._list.push(new AutoFixtureTS.RangedNumberGenerator());
            this._list.push(new AutoFixtureTS.StringGenerator());
            this._list.push(new AutoFixtureTS.BooleanSwitch());
            this._list.push(new AutoFixtureTS.CurrentDateGenerator());
        }
        DefaultPrimitiveBuilders.prototype.GetSpecimens = function () {
            return this._list;
        };
        return DefaultPrimitiveBuilders;
    })();
    AutoFixtureTS.DefaultPrimitiveBuilders = DefaultPrimitiveBuilders;    
})(AutoFixtureTS || (AutoFixtureTS = {}));
