var Types;
(function (Types) {
    var Guid = (function () {
        function Guid(guid) {
            this.guid = guid;
            this._guid = guid;
        }
        Guid.prototype.ToString = function () {
            return this.guid;
        };
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

