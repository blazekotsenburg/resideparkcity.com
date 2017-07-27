/**
 * Server used for resideparkcity.com.
 * updated: 7-16-17
 */

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> REALCOVE API <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ########################################################################################################################################
// ###	REQUIRED SEARCH PARAMETERS
// partner_key: Provided by RealCove.  This Unique ID will grant you access to the API.
//     values:	( authentication string )
// action:	Determines which api method you will be accessing
// values: (string)
// options: agentSearch, officeSearch, propertySearch, pickListSearch
//
// ########################################################################################################################################
// ###	PICK LIST PARAMETERS
// search_list:	Return List of all distinct values for the specified data type
// values:	(string)
// options: status, listing_type, property_type, city, state, county, zip, area_name, subdivision
// search_mls_id: References internal MLS ID used in property search, left blank will query all available mls's.
// values: (array)
// options: ( 1 =>	Park City MLS
// 2 => WFRMLS
// )
//
// ########################################################################################################################################
// ###	AGENT SEARCH OPTIONAL PARAMETERS
// qry:	Open ended query, capable of searching against agent_id,office_id,first_name,last_name,agent_email
// values:	(character strings and integers)
// search_mls_id: References internal MLS ID used in property search, left blank will query all available mls's.
// values: (array)
// options: ( 1 =>	Park City MLS
// 2 => WFRMLS
// )
// search_agent_id: References Agent ID assigned to each agent by the associated MLS.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (array)
// search_brokerage_id: References Brokerage ID assigned to each broker by the associated MLS.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (array)
// search_sort: Sorts result set, comma delimmeted strings are accepted.
//     values: (agent_id,office_id,first_name,last_name,agent_email)
// search_limit: Limit number of records to be returned, default = 15, max = 150
// values: (integers)
// search_offset: Offset returned results, used for pagination.
//                                                      values: (integers)
//
// ########################################################################################################################################
// ###	OFFICE SEARCH OPTIONAL PARAMETERS
// qry:	Open ended query, capable of searching against office_id,office_name,office_phone,office_address,office_city
// values:	(character strings and integers)
// search_mls_id: References internal MLS ID used in property search, left blank will query all available mls's.
// values: (array)
// options: ( 1 =>	Park City MLS
// 2 => WFRMLS
// )
// search_brokerage_id: References Brokerage ID assigned to each broker by the associated MLS.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (array)
// search_brokerage_name: References Brokerage Name.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (string)
// search_brokerage_address: Brokerage address wildcard search.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (string)
// search_brokerage_city: Brokerage city wildcard search.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (string)
// search_brokerage_state: Brokerage state wildcard search.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (string)
// search_brokerage_zip: Brokerage zip wildcard search.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (string)
// search_sort: Sorts result set, comma delimmeted strings are accepted.
//     values: (office_id,office_name,office_phone,office_address,office_city)
// search_limit: Limit number of records to be returned, default = 15, max = 150
// values: (integers)
// search_offset: Offset returned results, used for pagination.
//                                                      values: (integers)
//
// ########################################################################################################################################
// ###	PROPERTY SEARCH OPTIONAL PARAMETERS
// qry:	Open ended query, capable of searching against mls_num, property_type, address, city, county, state, zip, area_name, subdivision, description, publicremarks
// values:	(character strings and integers)
// search_address: Returns listings with similar address criteria
// values: (string)
// search_house_number: Returns listings with specific house number
// values: (integers)
// search_modified_date: Returns all listings modified after this date
// values: (datetime)
// search_list_date: Returns all listings listed after this date
// values: (datetime)
// search_price_min: Minimum price criteria used in property search
// values: (integers)
// search_price_max: Maximum price criteria used in property search
// values: (integers)
// search_sq_ft: Minimum square footage criteria used in property search
// values: (integers)
// search_acres: Minimum acreage criteria used in property search
// values: (integers)
// search_beds: Minimum number of bedrooms criteria used in property search
// values: (integers)
// search_baths: Minimum number of baths criteria used in property search
// values: (integers)
// search_property_type: Property type as in Single Family Home, Condo, or Land.
//     values: (array)
// search_area_name: Search within specific areas.  Recommend to build a pick list to choose from if this search critieria will be used.
//     values: (array)
// search_subdivision: Search within specific subdivisions.  Recommend to build a pick list to choose from if this search critieria will be used.
//     values: (array)
// search_status: Listing status.  To protect agents we currently only return Active and Pending Listings
// values: (array)
// search_mls_num: References MLS# assigned to each property by the associated MLS.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (array)
// search_agent_id: References Agent ID assigned to each agent by the associated MLS.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (array)
// search_brokerage_id: References Brokerage ID assigned to each broker by the associated MLS.  Duplicates may occur accross MLS systems, use MLS ID in your searches to get accurate results.
//     values: (array)
// search_mls_id: References internal MLS ID used in property search, left blank will query all available mls's.
// values: (array)
// options: ( 1 =>	Park City MLS
// 2 => WFRMLS
// )
// search_geocode: Search by GEO Coded values
// values: (string)
// options: (area, radius)
// search_geo_topleft: Top Left GEO Point used when search_geocode = area
// values: array(lat,long)
// example: array(40.6684780,-111.5636690)
// search_geo_bottomright: Bottom Right GEO Point used when search_geocode = area
// values: array(lat,long)
// example: array(40.6684780,-111.5636690)
// search_geo_center: Center GEO Point used when search_geocode = area
// values: array(lat,long)
// example: array(40.6684780,-111.5636690)
// search_geo_radius
// values: (float)
// search_sort: Sorts result set, comma delimmeted strings are accepted.
//     values: (price, square_feet, acres, beds, baths, mls_id, agent_code, office_code)
// search_limit: Limit number of records to be returned, default = 15, max = 15
// values: (integers)
// search_offset: Offset returned results, used for pagination.
//                                                      values: (integers)
//
// ########################################################################################################################################


var express          = require('express'),
    request          = require('request'),
    bodyParser       = require('body-parser'),
    app              = express();

var url              = 'https://secure.realcove.com/api.php?';

var defaultData = {
    partner_key          : '7e52cad4e91ee36e308d35f93a9db02b',     //International MLS
    action               : 'propertySearch',                      //agentSearch, officeSearch, propertySearch, pickListSearch
    return               : 'json', 							     //xml, json
    search_offset        : '0',
    search_limit         : '100',						         //MAX BATCH IS 100, OVER THAT DEFAULTS TO 15
    search_mls_id        : ['1'],                                 //Array of valid MLS id's, Park City MLS = 1 and WFRMLS = 2
    search_price_min     : '800000',
    search_price_max     : '2000000',
    search_property_type : ['Single Family', 'Condo'],
    search_area_name     : 'Old Town',
    debug                : '0'
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    request.post({url: url, formData: defaultData}, function(err, httpResponse, body) {
        if (!err && httpResponse.statusCode == 200) {
            var mlsData = JSON.parse(body);

            for(var i=0; i < mlsData['data'].length; i++) {
                mlsData['data'][i]['photos'] = removeHttpFromPhotos(mlsData['data'][i]['photos'].split(","));
            }

            res.render('home', {mlsData: mlsData['data']});
        }
        else {
            return console.error('upload failed:', err);
        }
    });
});

app.get("/home", function (req, res) {
    res.redirect("/");
});

app.get("/listing", function (req, res) {
    /**
     * Gets the data for the selected listing.
     */
    var listingData = {};
    var dataListing = {
        partner_key        : '7e52cad4e91ee36e308d35f93a9db02b',
        action             : 'propertySearch',
        return             : 'json',
        search_offset      : '0',
        search_limit       : '1',
        search_mls_id      : ['1'],
        search_mls_num     : req.query.mls,
        search_area_name   : req.query.area,
        debug              : '0'
    };

    request.post({url: url, formData: dataListing}, function(err, httpResponse, body) {
        if (!err && httpResponse.statusCode == 200) {

            var listingmlsData = JSON.parse(body);

            listingmlsData['data'].forEach(function (listing){

                if (listing['list_id'].match(req.query.id)) {

                    listingData = {
                        address         : req.query.address,
                        longitude       : req.query.long,
                        latitude        : req.query.lat,
                        price           : listing['price'].replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        square_feet     : listing['square_feet'].replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        photos          : listing['photos'].split(","),
                        mls_num         : listing['mls_num'],
                        days_on_market  : listing['days_on_market'],
                        beds            : listing['beds'],
                        baths           : listing['baths'],
                        status          : listing['status'],
                        subdivision     : listing['subdivision'],
                        property_type   : listing['property_type'],
                        publicremarks   : listing['publicremarks']
                    };
                }
            });
        }

        listingData['photos'] = removeHttpFromPhotos(listingData['photos']);
    });

    /**
     * Gets the data for the featured listings.
     */
    var data = {
        partner_key        : '7e52cad4e91ee36e308d35f93a9db02b',
        action             : 'propertySearch',
        return             : 'json',
        search_offset      : '0',
        search_limit       : '100',
        search_mls_id      : ['1'],
        search_area_name   : req.query.area,
        debug              : '0'
    };

    request.post({url: url, formData: data}, function(err, httpResponse, body) {
        if (!err && httpResponse.statusCode == 200) {

            var mlsData   = JSON.parse(body),
                listData  = {};

            mlsData['data'].forEach(function (listing){

                if (listing['list_id'].match(req.query.id)) {

                    listData = {
                        list_id         : req.query.id,
                        address         : req.query.address,
                        longitude       : req.query.long,
                        latitude        : req.query.lat,
                        area            : req.query.area,
                        price           : listing['price'].replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        square_feet     : listing['square_feet'].replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        photos          : listing['photos'].split(","),
                        mls_num         : listing['mls_num'],
                        days_on_market  : listing['days_on_market']
                    };
                }
            });

            listData['photos'] = removeHttpFromPhotos(listData['photos']);

            for(var i=0; i < mlsData['data'].length; i++) {
                mlsData['data'][i]['photos'] = removeHttpFromPhotos(mlsData['data'][i]['photos'].split(","));
            }

            res.render('listing', {mlsData: mlsData['data'], listData: listData, listingData: listingData});
        }
        else {
            return console.error('upload failed:', err);
        }
    });
});

app.post("/results", function(req, res) {
    var minInputVal = req.body.price_min.replace(/\,/g,""),
        maxInputVal = req.body.price_max.replace(/\,/g,"");

    var searchData = {
        partner_key: '7e52cad4e91ee36e308d35f93a9db02b',
        action: 'propertySearch',
        return: 'json',
        search_offset           : '0',
        search_limit            : '100',
        search_mls_id           : ['1'],
        search_price_min        : minInputVal,
        search_price_max        : maxInputVal,
        search_beds             : req.body.beds,
        search_property_type    : req.body.property_type,
        qry                     : req.body.qry,
        debug                   : '0'
    };

    request.post({url: url, formData: searchData}, function (err, httpResponse, body) {
        if (!err && httpResponse.statusCode == 200) {
            var mlsData = JSON.parse(body);

            for(var i=0; i < mlsData['data'].length; i++) {
                mlsData['data'][i]['photos'] = removeHttpFromPhotos(mlsData['data'][i]['photos'].split(","));
            }

            res.render('searchresults', {mlsData: mlsData['data']});
        }
        else {
            return console.error('upload failed:', err);
        }
    });
});

app.listen(8000, "localhost", function () {
    console.log("Server is running...");
});

/**
 * Remove http from image URLs.
 */
function removeHttpFromPhotos(array) {
    if(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].indexOf('http') >= 0) {
                array[i] = array[i].replace('http://54.245.115.2/rets.realcove.com/', '/');
            }
        }
    }

    return array;
}