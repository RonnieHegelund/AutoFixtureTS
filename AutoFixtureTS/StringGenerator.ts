/// <reference path="BaseTypes/Guid.ts" />
/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutoFixtureTS
{

    // Class
    export class StringGenerator implements AutoFixtureTS.Kernel.ISpecimenBuilder  {

        public CreateAnonymous(prefix : string): string {
            if(prefix != null && prefix != "")
                return prefix + Types.Guid.MakeNew().ToString();
            return Types.Guid.MakeNew().ToString();
        }

        public Create(request: Object): Object
        { 
            if (typeof request != "string")
                return new AutoFixtureTS.Kernel.NoSpecimen(request);

            return this.CreateAnonymous(<string>request);
        }
    }

}

