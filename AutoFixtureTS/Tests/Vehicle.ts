module AutoFixtureDocumentationTest.Simple {
    export class Vehicle {
        private _wheels = 0;
        
        public GetWheels(): number {
            return this._wheels;
        }

        public SetWheels(value:number) {
            this._wheels = value;
        }
        
    }
}