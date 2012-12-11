/// <reference path="BaseTypes/Guid.ts" />
/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

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

