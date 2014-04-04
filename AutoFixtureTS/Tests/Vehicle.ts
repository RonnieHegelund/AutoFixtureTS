module AutoFixtureDocumentationTest.Simple {
    export class Vehicle {
        private _wheels = 0;
        
        public getWheels(): number {
            return this._wheels;
        }

        public setWheels(value:number) {
            this._wheels = value;
        }
        
    }
}