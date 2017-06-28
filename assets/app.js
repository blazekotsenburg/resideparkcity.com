
var express          = require("express"),
    httpBuildQuery   = require('http-build-query'),
    request          = require('request'),
    XMLHttpRequest   = require('xmlhttprequest').XMLHttpRequest,
    http             = new XMLHttpRequest(),
    app              = express();

var url              = 'https://secure.realcove.com/api.php?';

var data = {
    partner_key      : '7e52cad4e91ee36e308d35f93a9db02b',     //International MLS
    action           : 'propertySearch',                      //agentSearch, officeSearch, propertySearch, pickListSearch
    return           : 'json', 							     //xml, json
    search_offset    : '0',
    search_limit     : '100',						         //MAX BATCH IS 100, OVER THAT DEFAULTS TO 15
    search_mls_id    : ['1'],                                 //Array of valid MLS id's, Park City MLS = 1 and WFRMLS = 2
    debug            : '0'
};

//data = httpBuildQuery(data);

// doPostRequest(url, data);
//
// function doPostRequest(url, data, optionalHeaders) {
//
//     // var request = new Request(url+data, {
//     //     method: 'POST',
//     //     headers : new Headers({
//     //         'Content-type': ''
//     //     })
//     // }).then(function (response) {
//     //
//     //     if (optionalHeaders !== null) {
//     //         request.set('Content-type', optionalHeaders);
//     //     }
//     //     else {
//     //         request.set('Content-type', 'applications/x-www-form-urlencoded');
//     //     }
//     //
//     //     console.log(response.json());
//     // });
//     //
//     // fetch(request).then(function() {
//     //     JSON.parse(request);
//     // });
//
//
//     // http.open('POST', url, false);
//     //
//     // if (optionalHeaders !== null) {
//     //     http.setRequestHeader(optionalHeaders);
//     // }
//     // else {
//     //     http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     // }
//     //
//     // http.onreadystatechange = function(){
//     //     console.log("in function");
//     //     console.log(http.status);
//     //     console.log(http.readyState);
//     //     if(http.readyState == 4 && http.status == 200){
//     //         console.log("inside if");
//     //         console.log(http.responseText);
//     //     }
//     // };
//     //
//     // http.send(data);
// }

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

// app.get("/home", function (req, res) {
//     res.redirect("/");
// });

//Trying to pull all of the data once this port has been requested
app.listen(8000, "localhost", function () {
    console.log("Server is running...");

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST',url, true);
    ourRequest.onload = function() {
        console.log(ourRequest.responseText);
    };
    
    var data = new FormData();
    data.append('partner_key', '7e52cad4e91ee36e308d35f93a9db02b');
    data.append('action', 'propertySearch');
    data.append('return', 'json');
    data.append('search_offset', '0');
    data.append('search_limit', '20');
    data.append('search_mls_id', '1');
    ourRequest.send(data);

    // begin opening a connection to the api
    // http.open('POST', url, true);
    //
    // // set the request header to be json so content type requested is json
    // http.setRequestHeader('Content-type', 'application/json');
    //
    // http.onload = function(){
    //     console.log(http.status); //make sure status of 200 is returned
    //     console.log(http.readyState); //make sure ready state 4 is reached.
    //     if(http.readyState == 4 && http.status == 200){
    //         console.log("inside if");
    //         //do something with response?
    //         // at this point should have something in http.responseText according to tutorials
    //         // and examples
    //         console.log(typeof http.response);
    //     }
    // };
    //
    // console.log("before send");
    // // http.send(string) -> data must be a string, but not sure if data should be the raw object or
    // // the httpBuildQuery string on line 21.
    // http.send(JSON.stringify(data));

    // request(url + data, function (err, res, body) {
    //     if(!err && res.statusCode == 200) {
    //         console.log(body);
    //         //var parsedData = JSON.parse(body.JSON); //Will not allow me to parse because nothing is in body, body type is string though.
    //         // console.log(parsedData);
    //     }
    //     else {
    //         console.log("an error occurred ....");
    //         console.log(err);
    //     }
    // });
});
