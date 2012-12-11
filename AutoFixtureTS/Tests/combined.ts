

module AutofixtureTS
{

    // Class
    export class BooleanSwitch implements AutofixtureTS.Kernel.ISpecimenBuilder  {
            
        private b = false;
        
        public CreateAnonymous(): bool {
            this.b = !this.b;
            return this.b;
        }

        public Create(request: Object): Object
        { 
            if (typeof request != "boolean")
            {
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            }

            return this.CreateAnonymous();
        }
    }

}


// Module
module AutofixtureTS 
{
    // Class
    export class DefaultPrimitiveBuilders {
        // Constructor
        constructor () { 
            throw Error("not implemented exception");
        }
        private List : Kernel.ISpecimenBuilder[];
        public OfType(type: any) {

        }
    }
}








module AutofixtureTS 
{
    export class Fixture implements AutofixtureTS.IFixture {
        constructor () { };
                                       
        CreateAnonymous(type: any,min?:number,max?:number): any {
            
            if (typeof type == "string") {                
                return new AutofixtureTS.StringGenerator().CreateAnonymous();
            }
            if (typeof type == "number") {                
                return new AutofixtureTS.NumberGenerator(min,max).CreateAnonymous();
            }
            if (typeof type == "boolean") {                
                return new AutofixtureTS.BooleanSwitch().CreateAnonymous();
            }

            var tmp = new type();
            

            if (typeof tmp == "object" && tmp instanceof String) {                
                return new AutofixtureTS.StringGenerator().CreateAnonymous();
            }

            if (typeof tmp == "object" && tmp instanceof Number) {
                return new AutofixtureTS.NumberGenerator(min,max).CreateAnonymous();
            }

            if (typeof tmp == "object" && tmp instanceof Boolean) {
                return new AutofixtureTS.BooleanSwitch().CreateAnonymous();
            }
            
            var t = new type;                        

            Object.keys(t).forEach(val => {
                
                if(typeof t[val] == "string")
                    t[val] = new AutofixtureTS.StringGenerator().CreateAnonymous();
                if(typeof t[val] == "number")
                    t[val] = new AutofixtureTS.NumberGenerator(min,max).CreateAnonymous();
                if(typeof t[val] == "boolean")
                    t[val] = new AutofixtureTS.BooleanSwitch().CreateAnonymous();
                if (typeof t[val] == "object" && t[val] instanceof Array) {
                    
                }                    
            });            
            return t;
        }

        CreateMany(type: any) : any[] {
            var arr = new any[];
            for (var i = 0; i < 10;i++)
            {
                arr.push(this.CreateAnonymous(type));
            }                        
            return arr;
        }

        CreateNumber(): number {
            return this.CreateNumberRange(1, 100);
        }

        CreateNumberRange(min: number, max: number): number
        {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        CreateString(key ? : string): string {
            return new AutofixtureTS.StringGenerator().CreateAnonymous(key);
        }

        CreateBoolean(): bool {
            return new AutofixtureTS.BooleanSwitch().CreateAnonymous();
        }        
    }
}

module AutofixtureTS {
    export interface IFixture {
        CreateAnonymous(type : any): any;
        CreateMany(type: any): any[];
        CreateString(): string;
        CreateNumber(): number;
        CreateNumberRange(min: number, max: number): number;
        CreateBoolean(): bool;    
    }
}


module AutofixtureTS
{

    // Class
    export class NumberGenerator implements AutofixtureTS.Kernel.ISpecimenBuilder  {
            
        private _min = 0;
        private _max = 100;
        
        constructor (min?: number, max?: number) {
            this._max = max-1;
            this._min = min+1;
        }

        public CreateAnonymous(): number {            
            return Math.floor(Math.random() * (this._max - this._min)) + this._min;
        }

        public Create(request: Object): Object
        { 
            if (typeof request != "number")
            {
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            }

            return this.CreateAnonymous();
        }
    }

}





module AutofixtureTS
{

    // Class
    export class StringGenerator implements AutofixtureTS.Kernel.ISpecimenBuilder  {                  
        constructor () { }

        public CreateAnonymous(key?:string): string {      
            
            if (key === "" || key === undefined)
                return Types.Guid.MakeNew().ToString();
            return key + "_" + Types.Guid.MakeNew().ToString();
        }

        public Create(request: Object): Object
        { 
            if (typeof request != "string")
            {
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            }

            return this.CreateAnonymous();
        }
    }

}

module Types {
    export class Guid {
        constructor (public guid: string) {
            this._guid = guid;
        }

        private _guid: string;

        public ToString(): string {
            return this.guid;
        }

        // Static member
        static MakeNew(): Guid {
            var result: string;
            var i: string;
            var j: number;

            result = "";
            for (j = 0; j < 32; j++) {
                if (j == 8 || j == 12 || j == 16 || j == 20)
                    result = result + '-';
                i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
                result = result + i;
            }
            return new Guid(result);
        }
    }
}module AutofixtureTS.Kernel {
    
    export interface ISpecimenBuilder {
        /// <summary>
        /// Creates a new specimen based on a request.
        /// </summary>
        /// <param name="request">The request that describes what to create.</param>
        /// <param name="context">A context that can be used to create other specimens.</param>
        /// <returns>
        /// The requested specimen if possible; otherwise a <see cref="NoSpecimen"/> instance.
        /// </returns>
        /// <remarks>
        /// <para>
        /// The <paramref name="request"/> can be any object, but will often be a
        /// <see cref="Type"/> or other <see cref="System.Reflection.MemberInfo"/> instances.
        /// </para>
        /// <para>
        /// Note to implementers: Implementations are expected to return a
        /// <see cref="NoSpecimen"/> instance if they can't satisfy the request.
        /// </para>
        /// </remarks>
        Create(request: Object) : Object;
    }
}module AutofixtureTS.Kernel {
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
