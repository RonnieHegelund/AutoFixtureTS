/// <reference path="LoopTest.ts" />
/// <reference path="kernel/DelegatingSpecimenBuilder.ts" />
/// <reference path="../Fixture.ts" />
/// <reference path="jasmine-1.2.d.ts" />
describe("AutofixtureTS.Fixture", function () {
    it("Initialized With Engine Sut Has Correct Engine", function () {
        // Fixture setup
        var expectedEngine = new AutofixtureTSUnitTest.Kernel.DelegatingSpecimenBuilder();
        var sut = new AutofixtureTS.Fixture(expectedEngine);
        // Exercise system
        var result = sut.Engine();
        // Verify outcome
        expect(result).toBe(expectedEngine);
        // Teardown
            });
    it("CreateMany items.length to be equals RepeatCount", function () {
        // Fixture setup
        var expectedRepeatCount = 187;
        var dummyBuilder = new AutofixtureTSUnitTest.Kernel.DelegatingSpecimenBuilder();
        var sut = new AutofixtureTS.Fixture(dummyBuilder);
        sut.RepeatCount(expectedRepeatCount);
        // Exercise system
        var result = sut.CreateMany(0).length;
        // Verify outcome
        expect(result).toBe(expectedRepeatCount);
        // Teardown
            });
    it("Customizations Is Instance", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = sut.Customizations();
        // Verify outcome
        expect(result).not.toBeNull();
        // Teardown
            });
    it("Customizations Is Stable", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        var builder = new AutofixtureTSUnitTest.Kernel.DelegatingSpecimenBuilder();
        // Exercise system
        sut.Customizations().push(builder);
        // Verify outcome
        expect(sut.Customizations().some(function (item) {
            return item === builder;
        })).toBeTruthy();
        // Teardown
            });
    it("Create Anonymous Will Create Simple Object", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(Object);
        // Verify outcome
        expect(result).not.toBeNull();
        // Teardown
            });
    it("Create Anonymous String Will Prefix Name", function () {
        // Fixture setup
        var expectedText = "Anonymous text";
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(expectedText);
        // Verify outcome
        expect(result).toContain(expectedText);
        // Teardown
            });
    it("Create Anonymous with empty string will return guid string ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous("");
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected).toMatch(regex);
    });
    it("Create Anonymous with string object will return guid string  ", function () {
        var sut = new AutofixtureTS.Fixture();
        var expected = sut.CreateAnonymous(String());
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected).toMatch(regex);
    });
    it("Create Anonymous boolean Will true on first call", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(true);
        // Verify outcome
        expect(result).toBeTruthy();
        // Teardown
            });
    it("Create Anonymous boolean Will false on second call", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = new AutofixtureTSUnitTest.LoopTest(function () {
            return sut.CreateAnonymous(true);
        }).Execute(2);
        // Verify outcome
        expect(result).toBeFalsy();
        // Teardown
            });
    it("Create Anonymous boolean object Will true on first call", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(Boolean());
        // Verify outcome
        expect(result).toBeTruthy();
        // Teardown
            });
    it("Create Anonymous boolean object Will false on second call", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = new AutofixtureTSUnitTest.LoopTest(function () {
            return sut.CreateAnonymous(Boolean());
        }).Execute(2);
        // Verify outcome
        expect(result).toBeFalsy();
        // Teardown
            });
    it("Create Anonymous boolean Will true on first call", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(true);
        // Verify outcome
        expect(result).toBeTruthy();
        // Teardown
            });
    it("Create Anonymous number Will return 1 on first call", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(0);
        // Verify outcome
        expect(result).toBe(1);
        // Teardown
            });
    it("Create Anonymous number Will return 2 on second call", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = new AutofixtureTSUnitTest.LoopTest(function () {
            return sut.CreateAnonymous(0);
        }).Execute(2);
        // Verify outcome
        expect(result).toBe(2);
        // Teardown
            });
    it("Create Anonymous number object Will return 1 on first call", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(Number());
        // Verify outcome
        expect(result).toBe(1);
        // Teardown
            });
    it("Create Anonymous number object Will return 2 on second call", function () {
        // Fixture setup
        var sut = new AutofixtureTS.Fixture();
        // Exercise system
        var result = new AutofixtureTSUnitTest.LoopTest(function () {
            return sut.CreateAnonymous(Number());
        }).Execute(2);
        // Verify outcome
        expect(result).toBe(2);
        // Teardown
            });
});
