describe("Roman Numbers", function () {

    it("should return 1 for I", function () {
        expect(roman("I")).toBe("1");
    });

    it("should return 5 for V", function () {
        expect(roman("V")).toBe("5");
    });

    it("should return 10 for X", function () {
        expect(roman("X")).toBe("10");
    });

    it("should return 50 for L", function () {
        expect(roman("L")).toBe("50");
    });

    it("should return 100 for C", function () {
        expect(roman("C")).toBe("100");
    });

    it("should return 500 for D", function () {
        expect(roman("D")).toBe("500");
    });

    it("should return 1000 for M", function () {
        expect(roman("M")).toBe("1000");
    });

    it("should add every number", function () {
        expect(roman("VI")).toBe("6");
    });

    it("should substract a number if the next number is bigger", function () {
        expect(roman("IV")).toBe("4");
    });

    it("should work with all test cases", function () {
        expect(roman("IX")).toBe("9");
        expect(roman("XLII")).toBe("42");
        expect(roman("XCIX")).toBe("99");
        expect(roman("MMXIII")).toBe("2013");

        // 1999 special - In theory that allows eight different ways of depicting 1999 
        expect(roman("MCMXCIX")).toBe("1999");
        expect(roman("MCMXCVIIII")).toBe("1999");
        expect(roman("MCMLXXXXIX")).toBe("1999");
        expect(roman("MCMLXXXXVIIII")).toBe("1999");

        expect(roman("MDCCCCXCIX")).toBe("1999");
        expect(roman("MDCCCCXCVIIII")).toBe("1999");
        expect(roman("MDCCCCLXXXXIX")).toBe("1999");
        expect(roman("MDCCCCLXXXXVIIII")).toBe("1999");
    });
});
