/// <reference path="Kernel/RangedNumberRequest.ts" />
/// <reference path="Kernel/NoSpecimen.ts" />
/// <reference path="Kernel/ISpecimenBuilder.ts" />

module AutoFixtureTS
{
    // Class
    export class CurrentDateGenerator implements AutoFixtureTS.Kernel.ISpecimenBuilder  {
                    
        public Create(request: Object): Object
        {             
            if (request instanceof Date == false)
                return new AutoFixtureTS.Kernel.NoSpecimen(request);         
                            
            var tmpDate = new Date();
            var now = new Date(tmpDate.getFullYear(), 
                tmpDate.getMonth(),
                tmpDate.getDay(),
                tmpDate.getHours(),
                tmpDate.getMinutes(),
                tmpDate.getSeconds(),
                tmpDate.getMilliseconds());                
            
            return now;                        
        }
    }

}

