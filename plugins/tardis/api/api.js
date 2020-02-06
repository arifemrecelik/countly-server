var plugin = {},
    common = require("../../../api/utils/common.js"),
    plugins = require("../../pluginManager.js");

//write api call
plugins.register("/i", function(ob) {
    //process sdk request here
    var params = ob.params;
    var validate = ob.validateUserForDataWriteAPI; //user validation

    validate(params, function(params) {
        //user is validated
        //you can process request
    });

    if (params) {
        console.log("Params");
        console.log(params);
    } else {
        console.log("Params not founded");
    }
});

module.exports = plugin;
