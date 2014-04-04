module AutoFixtureTS {
    export interface IFixture {
        CreateAnonymous<T>(type : any): T;
        CreateMany(type: any) : Array<any>;
    }
}