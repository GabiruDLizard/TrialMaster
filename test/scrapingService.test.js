const chai = require( "chai" );
const ScrapingService = require("../scripts/scrapingService");
const expect = chai.expect;

describe("scrapingService", function(){
    describe("start up", function(){
        it("The class initializes the url properly", function(){
            const res = new ScrapingService("testURL")
            expect(res.url).to.equal("testURL")
        })
    })
})