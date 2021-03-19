module.exports.loginaccess = function() { 
    useframeworkfunctions.fnselectdropdownvalue("Po Details","Select Style",testdatamap["style"])
    useframeworkfunctions.fnselectmultidropdownvalue(locatorsmap["podetailscolordropdown"],testdatamap["color"])
    element(by.xpath(locatorsmap["POsearchbutton"])).click()

   };

module.exports.navigatetomodule=function(modulename)
{
element(by.xpath("//span[text()='" + modulename + "']//parent::a")).click()
}