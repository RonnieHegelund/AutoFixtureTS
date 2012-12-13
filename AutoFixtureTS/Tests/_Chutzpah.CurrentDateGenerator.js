var AutoFixtureTSUnitTest;
(function (AutoFixtureTSUnitTest) {
    describe("AutoFixtureTS.CurrentDateGenerator", function () {
        it("can create Anonymous date ", function () {
            var sut = new AutoFixtureTS.CurrentDateGenerator();
            var result = sut.Create(Date);
            for(var i = 0; i < 100000; i++) {
            }
            var d = new Date();
            expect(result.getTime()).toBe(d.getTime());
        });
    });
})(AutoFixtureTSUnitTest || (AutoFixtureTSUnitTest = {}));

