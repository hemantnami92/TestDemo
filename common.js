const useconfig = require("./config.js")
// Function takes the property file location as input and returns property map
function readlocatorsfromobjProperties(file)
{
var fs = require("fs")
var rawContent = fs.readFileSync(file)
var propertyMap = {}
var fullContent = rawContent.toString()
var allPairs = fullContent.split("\n")
for(var i = 0; i<allPairs.length; i++){
var keyValue = allPairs[i].split("~")
propertyMap[keyValue[0]] = keyValue[1]

}

return propertyMap;
}
module.exports.fngetdata= function(jsfilename) {
    locatorsmap= readlocatorsfromobjProperties("./Objectproperties/"+jsfilename+".properties")
    testdatamap=readtestdatafromCSV("./TestData/"+jsfilename+".csv")
    var arrayofmaps = [locatorsmap, testdatamap];   
    return arrayofmaps;
    }


// Function takes the Test data file as input and returns Testdata map
function readtestdatafromCSV(path) {
const papa = require('papaparse');
const fs = require('fs');
const file = fs.readFileSync(path, 'utf8');
let results = papa.parse(file, {
    header: true
});
// get first row
let getdatafromcsv = results.data[0]
Object.keys(getdatafromcsv).forEach(function (key) {
        getdatafromcsv[key] = getdatafromcsv[key].replace('{{XS}}', useconfig.config.suffixtobeused);
    })

return getdatafromcsv;
}


//santosh


//Need update with priya


module.exports.TraverseinTablewithpagination = async function (elementxpath) {

    await element.all(by.xpath("//ul[@class='ant-pagination ant-table-pagination']//li")).then(async function (pagination) {

        if (!pagination.length > 0) {
            throw new Error("No Pages found")
        }
        for (var i = 2; i < pagination.length - 1; i++) {

            var present = false;
            await element(by.xpath(elementxpath)).isPresent().then(async function (views) {
                if (!views) {
                    element(by.xpath("//a[text()='" + i + "']")).click();
                }
                else {
                    //Action that need to be done.
                    // element(by.xpath(elementxpath)).click();
                    present = true;
                }
            });

            if (present) {
                break;
            }
        }
    });
}
//function ends here//


//login credentials
module.exports.applogin=function (username,password)
{
    element(by.id('username')).sendKeys(username)
    element(by.id('password')).sendKeys(password)
    element(by.id('kc-login')).click()
}