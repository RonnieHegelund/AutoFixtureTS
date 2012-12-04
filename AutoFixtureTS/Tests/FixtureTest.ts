/// <reference path="../Fixture.ts" />
/// <reference path="jasmine-1.2.d.ts" />
class Person {
    private firstname = "";
    private lastName = "";
    public Age = 0;
    public Male = true;    

    public GetFullName() : string
    {
        return this.firstname + " " + this.lastName;
    }

    public SetFirstname(val:string) {
        this.firstname = val;
    }

    public SetLastname(val:string) {
        this.lastName = val;
    }
}

describe("Fixture", () => {
    it("can create CreateAnonymous Person ", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = <Person>sut.CreateAnonymous(Person);        
        expected.SetFirstname("Ronnie");
        expected.SetLastname("Hegelund");
                
        expect(expected.GetFullName()).toBe("Ronnie Hegelund");                
    });
    
    it("can create many Anonymous Persons ", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = <Person[]> sut.CreateMany(Person);        
        expect(expected.length).toBe(10);
        expected.forEach(p => {
                p.SetFirstname("Ronnie");
                p.SetLastname("Hegelund");
            }
        );
        expected.forEach(p => expect(p.GetFullName()).toBe("Ronnie Hegelund"));        
    });

    it("can create many strings", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = <string[]> sut.CreateMany("");        
        expect(expected.length).toBe(10);
        
        expected.forEach(p => expect(p).toBeDefined());        
    });

    it("can create many numbers", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = <number[]> sut.CreateMany(0);        
        expect(expected.length).toBe(10);
        
        expected.forEach(p => expect(p).toBeDefined());        
    });
    
    it("can create many booleans", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = <bool[]> sut.CreateMany(true);        
        expect(expected.length).toBe(10);        
        expected.forEach(p => expect(p).toBeDefined());        
    });

    it("can create many Dates", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = <Date[]> sut.CreateMany(Date);        
        expect(expected.length).toBe(10);        
        expected.forEach(p => expect(p).toBeDefined());        
    });

    it("can create defaultstring ", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateString();
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
    
        expect(expected.match(regex).length).not.toBeNull();
    });
    
    it("can create string with identifier ", () =>{
        var sut = new AutofixtureTS.Fixture();
        
        var expected = sut.CreateString("tester");                
        var regex = "^(tester_)(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
    
        expect(expected.match(regex).length).not.toBeNull();
    });

    it("can create Anonymous string ", () =>{
        var sut = new AutofixtureTS.Fixture();

        var expected = sut.CreateAnonymous(String);
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";

        expect(expected.match(regex).length).not.toBeNull();
    });

    it("can create Anonymous string by empty string", () =>{
        var sut = new AutofixtureTS.Fixture();

        var expected = sut.CreateAnonymous("");
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";

        expect(expected.match(regex).length).not.toBeNull();
    });

    it("can create boolean ", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateBoolean();            
        expect(typeof(expected)).toBe("boolean");
    });
    
    it("can create Anonymous boolean by true value ", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateAnonymous(true);            
        expect(typeof(expected)).toBe("boolean");
    });

    it("can create number ", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateNumber();            
        expect(typeof(expected)).toBe("number");
    });

    it("can create Anonymous number by number value ", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateAnonymous(100);            
        expect(typeof(expected)).toBe("number");
    });

    it("can create negative numbers from range", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateNumberRange(0,-100);            
        expect(expected).toBeLessThan(0);
        expect(expected).toBeGreaterThan(-100);
    });

    it("can create positive numbers from range", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateNumberRange(0,100);            
        expect(expected).toBeLessThan(100);
        expect(expected).toBeGreaterThan(0);
    });

    it("can create number Anonymous", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateAnonymous(Number);            
        expect(typeof(expected)).toBe("number");
    });

    it("can create negative Anonymous numbers from range", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateAnonymous(Number, 0,-100); 
        expect(expected).toBeLessThan(0);
        expect(expected).toBeGreaterThan(-100);
    });

    it("can create positive Anonymous numbers from range", () =>{
        var sut = new AutofixtureTS.Fixture();        
        var expected = sut.CreateAnonymous(Number,0,100);            
        expect(expected).toBeLessThan(100);
        expect(expected).toBeGreaterThan(0);
    });
    
});



