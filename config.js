exports.config={
    directConnect:true,
    framework:'jasmine',
    specs:['../UATFRAMEWORK/pages/PPS.js'],
    capabilities:
    {
        browserName:'chrome'
        
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
      }

}