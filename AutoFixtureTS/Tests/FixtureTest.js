/// <reference path="../Kernel/RangedNumberRequest.ts" />
/// <reference path="LoopTest.ts" />
/// <reference path="kernel/DelegatingSpecimenBuilder.ts" />
/// <reference path="../Fixture.ts" />
/// <reference path="jasmine-1.2.d.ts" />
describe("AutoFixtureTS.Fixture", function () {
    it("Initialized With Engine Sut Has Correct Engine", function () {
        // Fixture setup
        var expectedEngine = new AutoFixtureTSUnitTest.Kernel.DelegatingSpecimenBuilder();
        var sut = new AutoFixtureTS.Fixture(expectedEngine);
        // Exercise system
        var result = sut.Engine();
        // Verify outcome
        expect(result).toBe(expectedEngine);
        // Teardown
            });
    it("CreateMany items.length to be equals RepeatCount", function () {
        // Fixture setup
        var expectedRepeatCount = 187;
        var dummyBuilder = new AutoFixtureTSUnitTest.Kernel.DelegatingSpecimenBuilder();
        var sut = new AutoFixtureTS.Fixture(dummyBuilder);
        sut.RepeatCount(expectedRepeatCount);
        // Exercise system
        var result = sut.CreateMany(0).length;
        // Verify outcome
        expect(result).toBe(expectedRepeatCount);
        // Teardown
            });
    it("Customizations Is Instance", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = sut.Customizations();
        // Verify outcome
        expect(result).not.toBeNull();
        // Teardown
            });
    it("Customizations Is Stable", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        var builder = new AutoFixtureTSUnitTest.Kernel.DelegatingSpecimenBuilder();
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
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(Object);
        // Verify outcome
        expect(result).not.toBeNull();
        // Teardown
            });
    it("Create Anonymous String Will Prefix Name", function () {
        // Fixture setup
        var expectedText = "Anonymous text";
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(expectedText);
        // Verify outcome
        expect(result).toContain(expectedText);
        // Teardown
            });
    it("Create Anonymous with empty string will return guid string ", function () {
        var sut = new AutoFixtureTS.Fixture();
        var expected = sut.CreateAnonymous("");
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected).toMatch(regex);
    });
    it("Create Anonymous with string object will return guid string  ", function () {
        var sut = new AutoFixtureTS.Fixture();
        var expected = sut.CreateAnonymous(String());
        var regex = "^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
        expect(expected).toMatch(regex);
    });
    it("Create Anonymous boolean Will true on first call", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(true);
        // Verify outcome
        expect(result).toBeTruthy();
        // Teardown
            });
    it("Create Anonymous boolean Will false on second call", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = new AutoFixtureTSUnitTest.LoopTest(function () {
            return sut.CreateAnonymous(true);
        }).Execute(2);
        // Verify outcome
        expect(result).toBeFalsy();
        // Teardown
            });
    it("Create Anonymous boolean object Will return true on first call", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(Boolean());
        // Verify outcome
        expect(result).toBeTruthy();
        // Teardown
            });
    it("Create Anonymous boolean object Will false on second call", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = new AutoFixtureTSUnitTest.LoopTest(function () {
            return sut.CreateAnonymous(Boolean());
        }).Execute(2);
        // Verify outcome
        expect(result).toBeFalsy();
        // Teardown
            });
    it("Create Anonymous boolean Will true on first call", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(true);
        // Verify outcome
        expect(result).toBeTruthy();
        // Teardown
            });
    it("Create Anonymous number Will return 1 on first call", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(0);
        // Verify outcome
        expect(result).toBe(1);
        // Teardown
            });
    it("Create Anonymous number Will return 2 on second call", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = new AutoFixtureTSUnitTest.LoopTest(function () {
            return sut.CreateAnonymous(0);
        }).Execute(2);
        // Verify outcome
        expect(result).toBe(2);
        // Teardown
            });
    it("Create Anonymous number object Will return 1 on first call", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = sut.CreateAnonymous(Number());
        // Verify outcome
        expect(result).toBe(1);
        // Teardown
            });
    it("Create Anonymous number object Will return 2 on second call", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        // Exercise system
        var result = new AutoFixtureTSUnitTest.LoopTest(function () {
            return sut.CreateAnonymous(Number());
        }).Execute(2);
        // Verify outcome
        expect(result).toBe(2);
        // Teardown
            });
    it("Create Anonymous NumberRequestRange object Will return correct result", function () {
        // Fixture setup
        var sut = new AutoFixtureTS.Fixture();
        var rangeRequest = new AutoFixtureTS.Kernel.RangedNumberRequest(1, 10);
        // Exercise system
        var result = sut.CreateAnonymous(rangeRequest);
        // Verify outcome
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(11);
        // Teardown
            });
});
