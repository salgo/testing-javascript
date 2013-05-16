describe("Countries in the United Kingdom", function() {
 
    it("England", function() {
        expect(UKCountry('England')).toBe(true);
    });

    it("Scotland", function() {
        expect(UKCountry('Scotland')).toBe(true);
    });
 
    it("Wales", function() {
        expect(UKCountry('Wales')).toBe(true);
    });
    
    it("Northern Ireland", function() {
        expect(UKCountry('Northern Ireland')).toBe(true);
    });
});

describe("Countries outside United Kingdom", function() {
 
    it("Ireland", function() {
        expect(UKCountry('Ireland')).toBe(false);
    });
 
    it("Spain", function() {
        expect(UKCountry('Spain')).toBe(false);
    });
});