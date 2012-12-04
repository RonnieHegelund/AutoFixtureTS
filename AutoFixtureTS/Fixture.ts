/// <reference path="StringGenerator.ts" />
/// <reference path="NumberGenerator.ts" />
/// <reference path="BooleanSwitch.ts" />
/// <reference path="BaseTypes/Guid.ts" />

interface IFixture {
    CreateAnonymous(type : any): any;
    CreateMany(type: any): any[];
    CreateString(): string;
    CreateNumber(): number;
    CreateNumberRange(min: number, max: number): number;
    CreateBoolean(): bool;    
}

module AutofixtureTS 
{
    export class Fixture implements IFixture {
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

