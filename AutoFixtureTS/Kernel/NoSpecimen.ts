module AutofixtureTS.Kernel {
    // Class
    export class NoSpecimen {
        private _request: Object;
        // Constructor
                
        constructor (request?:Object) { 
            this._request = request;
        }

        public Request() : Object {
            return this._request;
        }
    }
}
