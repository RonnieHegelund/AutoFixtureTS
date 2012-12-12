module AutoFixtureTS {
    export interface IFixture {
        CreateAnonymous(type : any): any;
        CreateMany(type: any): any[];
    }
}