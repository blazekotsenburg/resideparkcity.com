
var express          = require("express"),
    //httpBuildQuery   = require('http-build-query'),
    request          = require('request'),
    //XMLHttpRequest   = require('xmlhttprequest').XMLHttpRequest,
    //http             = new XMLHttpRequest(),
    //FormData         = require('form-data'),
    app              = express();

var url              = 'https://secure.realcove.com/api.php?';

var defaultData = {
    partner_key      : '7e52cad4e91ee36e308d35f93a9db02b',     //International MLS
    action           : 'propertySearch',                      //agentSearch, officeSearch, propertySearch, pickListSearch
    return           : 'json', 							     //xml, json
    search_offset    : '0',
    search_limit     : '100',						         //MAX BATCH IS 100, OVER THAT DEFAULTS TO 15
    search_mls_id    : ['1'],                                 //Array of valid MLS id's, Park City MLS = 1 and WFRMLS = 2
    //search_price_min : '800000',
    //search_price_max : '1500000',
    debug            : '0'
};

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {

    request.post({url: url, formData: defaultData}, function(err, httpResponse, body) {
        if (!err && httpResponse.statusCode == 200) {
            var mlsData = JSON.parse(body);
            res.render('home', {mlsData: mlsData['data']});
        }
        else {
            return console.error('upload failed:', err); //possibly send to error page with error message and status code??
        }
    });
});

app.get("/home", function (req, res) {
    res.redirect("/");
});

//Trying to pull all of the data once this port has been requested
app.listen(8000, "localhost", function () {
    console.log("Server is running...");
});