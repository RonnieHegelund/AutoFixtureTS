/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Tests/Vehicle.ts" />
/// <reference path="Kernel/CompositeSpecimenBuilder.ts" />
/// <reference path="DefaultPrimitiveBuilders.ts" />
/// <reference path="StringGenerator.ts" />
/// <reference path="RangedNumberGenerator.ts" />
/// <reference path="BooleanSwitch.ts" />
/// <reference path="DefaultPrimitiveBuilders.ts" />
/// <reference path="NumericSequenceGenerator.ts" />

module AutofixtureTS {
    export class SpecimenFactory {
        private _engine:AutofixtureTS.Kernel.CompositeSpecimenBuilder;
        private _repeatCount = 10;

        constructor (engine : AutofixtureTS.Kernel.CompositeSpecimenBuilder ) {
            this._engine = engine;
        }

        public RepeatCount(value: number) {
            this._repeatCount = value;
        }

        public CreateAnonymous(type: any): any {
            
            if(typeof type != "object" && typeof type != "function")
                return this._engine.Create(type);
            
            if (typeof type == "function" && type() != null)                
                return this._engine.Create(type());
            
            if (typeof type == "function" && type() == null)
                type = new type;                
                        
            if (typeof type == "object") {
                var t = this._engine.Create(type);
                if (t instanceof AutofixtureTS.Kernel.NoSpecimen == false) {
                    return t;
                } else {
                    t = type;
                    Object.keys(t).forEach(val => {
                        t[val] = this.CreateAnonymous(t[val]);
                    });
                }
                return t;
            }            
            return;            
        }
       
        public CreateMany(type: any) : any[] {
            var arr = new any[];
            for (var i = 0; i < this._repeatCount; i++)
            {
                arr.push(this.CreateAnonymous(type));
            }                        
            return arr;
        }
    }    

    
}

