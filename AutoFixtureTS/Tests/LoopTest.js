var AutofixtureTSUnitTest;
(function (AutofixtureTSUnitTest) {
    var LoopTest = (function () {
        function LoopTest(func) {
            this._func = func;
        }
        LoopTest.prototype.Execute = function (loopCount) {
            var tmp;
            for(var cnt = 0; cnt < loopCount; cnt++) {
                tmp = this._func();
            }
            return tmp;
        };
        return LoopTest;
    })();
    AutofixtureTSUnitTest.LoopTest = LoopTest;    
})(AutofixtureTSUnitTest || (AutofixtureTSUnitTest = {}));
