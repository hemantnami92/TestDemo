var arrayofmaps, locatorsmap, testdatamap
const useppsfunctions = require("../commonmethods/PPS.js")
const useframeworkfunctions = require("../common.js")

beforeAll(function () {

    arrayofmaps = useframeworkfunctions.fngetdata("PPS")
    locatorsmap = arrayofmaps[0]
    testdatamap = arrayofmaps[1]
    //browser.get(testdatamap[baseurl])
});
beforeEach(function () {
    browser.waitForAngularEnabled(false);

    browser.get(testdatamap["login"])
   // browser.get('http://192.168.0.155:4203/')

})
describe('Validation of POs and Mos', function () {
    it('click on manual po1', function () {
        useframeworkfunctions.applogin("hemanth","hemanth123")
        browser.sleep(5000)
        useppsfunctions.navigatetomodule("PPS")
   //  browser.element(by.id('username')).sendKeys("hemanth")
   //  browser.element(by.id('password')).sendKeys("hemanth")

    });
});