/// <reference path="../../Kernel/ISpecimenBuilder.ts" />
module AutofixtureTSUnitTest.Kernel  { 

    export class DelegatingSpecimenBuilder implements AutofixtureTS.Kernel.ISpecimenBuilder{
        public Create(request: Object): Object {
            return request;
        }
    }

}