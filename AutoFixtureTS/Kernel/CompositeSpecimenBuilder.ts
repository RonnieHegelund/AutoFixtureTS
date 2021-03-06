/// <reference path="NoSpecimen.ts" />
/// <reference path="ISpecimenBuilder.ts" />
module AutoFixtureTS.Kernel {
    export class CompositeSpecimenBuilder implements Kernel.ISpecimenBuilder {

        private _builders: Array<Kernel.ISpecimenBuilder>;
        
        constructor(builders: Array<Kernel.ISpecimenBuilder>)
        { 
            if (builders != null)
                this._builders = builders;
        }

        public Builders() : Kernel.ISpecimenBuilder[] {
            return this._builders;
        }

        public Create(request: Object): Object
        {   
            var result = null; 
            if(typeof request == "function")
                throw new Error("requet param is a function, this is not allowed");
            
            this._builders.forEach(item => {
                var tmp = item.Create(request);
                
                if (tmp instanceof AutoFixtureTS.Kernel.NoSpecimen == false) {
                    result = tmp;
                    return tmp;
                }
                return tmp;
            });

            if(result == null)
                return new AutoFixtureTS.Kernel.NoSpecimen();
            return result;
        }
    }
}