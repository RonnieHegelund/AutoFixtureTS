describe("CurrentDateTimeGenerator can", function () {
    it("Create With Date Request Returns Correct Result ", function () {
        var before = new Date().toUTCString();
        var dateTimeRequest = typeof (Date);
        var sut = new Autofixture.CurrentUTCDateGenerator();
        var dummyContext = new Autofixture.Kernel.DelegatingSpecimenContext();
        var result = sut.Create(dateTimeRequest, dummyContext);
        var after = new Date().toUTCString();
        var dt = result;
        expect(before + " " + dt + " " + after).toBe(2);
    });
});
