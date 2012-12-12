/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutoFixtureTS
{

    // Class
    export class BooleanSwitch implements AutoFixtureTS.Kernel.ISpecimenBuilder  {
            
        private b = false;
        
        public CreateAnonymous(): bool {
            this.b = !this.b;
            return this.b;
        }

        public Create(request: Object): Object
        { 
            if (typeof request != "boolean")            
                return new AutoFixtureTS.Kernel.NoSpecimen(request);
            
            return this.CreateAnonymous();
        }
    }

}

