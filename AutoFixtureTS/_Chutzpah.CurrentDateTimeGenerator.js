var Autofixture;
(function (Autofixture) {
    var CurrentUTCDateGenerator = (function () {
        function CurrentUTCDateGenerator() { }
        CurrentUTCDateGenerator.prototype.Create = function (request, context) {
            if(typeof (request) !== "object" && request instanceof Date) {
                return request;
            }
            var d = new Date().toUTCString();
            return d;
        };
        return CurrentUTCDateGenerator;
    })();
    Autofixture.CurrentUTCDateGenerator = CurrentUTCDateGenerator;    
})(Autofixture || (Autofixture = {}));

