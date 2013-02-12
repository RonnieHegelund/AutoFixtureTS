/// <reference path="../../Kernel/ISpecimenBuilder.ts" />
module AutoFixtureTSUnitTest.Kernel { 

    export class DelegatingSpecimenBuilder implements AutoFixtureTS.Kernel.ISpecimenBuilder{
        public Create(request: Object): Object {
            return request;
        }
    }
}