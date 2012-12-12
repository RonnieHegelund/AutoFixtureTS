module AutoFixtureTSUnitTest {
    export class LoopTest {

        private _func: any;
        constructor (func: Function) {
            this._func = func;
        }

        public Execute(loopCount: number): Object {
            var tmp: any;
            for (var cnt = 0; cnt < loopCount; cnt++)
                tmp = this._func();
            return tmp;
        }
    }
}