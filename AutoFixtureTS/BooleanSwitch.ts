/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

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
                return new AutofixtureTS.Kernel.NoSpecimen(request);
            
            return this.CreateAnonymous();
        }
    }

}

