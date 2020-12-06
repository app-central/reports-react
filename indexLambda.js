


exports.handler = async (event, context) => {
    let appId = await getConfig("bundle_id_appstore_id_map", "oded.Movies");
    let day1 = new Date();
    let day2 = new Date();
    let day3 = new Date();
    let day4 = new Date();
    let day5 = new Date();
    let day6 = new Date();
    let day7 = new Date();


    let hh = day1.getHours();
    console.log("***hour now**: " + hh);

    if (hh > 13) {
        day1.setDate(day1.getDate() - 1);
        day2.setDate(day2.getDate() - 2);
        day3.setDate(day3.getDate() - 3);
        day4.setDate(day4.getDate() - 4);
        day5.setDate(day5.getDate() - 5);
        day6.setDate(day6.getDate() - 6);
        day7.setDate(day7.getDate() - 7);


    } else {
        day1.setDate(day1.getDate() - 2);
        day2.setDate(day2.getDate() - 3);
        day3.setDate(day3.getDate() - 4);
        day4.setDate(day4.getDate() - 5);
        day5.setDate(day5.getDate() - 6);
        day6.setDate(day6.getDate() - 7);
        day7.setDate(day7.getDate() - 8);
    }




    console.log("day1 test: " + day1.toString());
    console.log("day2 test: " + day2.toString());
    console.log("day1 test: " + day3.toString());
    console.log("day2 test: " + day4.toString());
    console.log("day1 test: " + day5.toString());
    console.log("day2 test: " + day6.toString());
    console.log("day2 test: " + day7.toString());


    var dd1 = String(day1.getDate()).padStart(2, '0');
    var mm1 = String(day1.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy1 = day1.getFullYear();

    var dd2 = String(day2.getDate()).padStart(2, '0');
    var mm2 = String(day2.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy2 = day2.getFullYear();

    var dd3 = String(day3.getDate()).padStart(2, '0');
    var mm3 = String(day3.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy3 = day3.getFullYear();

    var dd4 = String(day4.getDate()).padStart(2, '0');
    var mm4 = String(day4.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy4 = day4.getFullYear();

    var dd5 = String(day5.getDate()).padStart(2, '0');
    var mm5 = String(day5.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy5 = day5.getFullYear();


    var dd6 = String(day6.getDate()).padStart(2, '0');
    var mm6 = String(day6.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy6 = day6.getFullYear();

    var dd7 = String(day7.getDate()).padStart(2, '0');
    var mm7 = String(day7.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy7 = day7.getFullYear();





    // let path1 ='/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0';
    let path1 = '/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0&filter[reportDate]=' + yyyy1 + "-" + mm1 + "-" + (dd1);
    let data1 = await getData(path1);

    let path2 = '/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0&filter[reportDate]=' + yyyy2 + "-" + mm2 + "-" + (dd2);
    let data2 = await getData(path2);

    let path3 = '/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0&filter[reportDate]=' + yyyy3 + "-" + mm3 + "-" + (dd3);
    let data3 = await getData(path2);

    let path4 = '/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0&filter[reportDate]=' + yyyy4 + "-" + mm4 + "-" + (dd4);
    let data4 = await getData(path2);

    let path5 = '/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0&filter[reportDate]=' + yyyy5 + "-" + mm5 + "-" + (dd5);
    let data5 = await getData(path2);

    let path6 = '/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0&filter[reportDate]=' + yyyy6 + "-" + mm6 + "-" + (dd6);
    let data6 = await getData(path2);

    let path7 = '/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0&filter[reportDate]=' + yyyy7 + "-" + mm7 + "-" + (dd7);
    let data7 = await getData(path2);

    let result = {
        data: data1,
        data2: data2,
        data3: data3,
        data4: data4,
        data5: data5,
        data6: data6,
        data7: data7,

        appsId: appId
    }
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(result),
    };
    return response;

};




async function getData(path) {
    const zlib = require('zlib');
    const fs = require('fs');
    const jwt = require('jsonwebtoken');
    const https = require('https');
    const gunzip = zlib.createGunzip();
    const AWS = require('aws-sdk');
    const privateKey = fs.readFileSync("./AuthKey_D553FL6G6L.p8");
    let now = Math.round((new Date()).getTime() / 1000);
    let nowPlus20 = now + 1199;
    let payload = {
        "iss": process.env.issuerId,
        "exp": nowPlus20,
        "aud": "appstoreconnect-v1"
    };

    let signOptions = {
        "algorithm": "ES256",
        header: {
            "alg": "ES256",
            "kid": process.env.apiKeyId,
            "typ": "JWT"
        }
    };


    let token = jwt.sign(payload, privateKey, signOptions);
    // console.log("Token: " + token);


    var options = {
        host: 'api.appstoreconnect.apple.com',

        // path: '/v1/salesReports?filter[frequency]=WEEKLY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0&filter[reportDate]=2020-11-22', /// weekly
        // path: '/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0', // daily dont work before 3pm
        path: path,

        // path: '/v1/salesReports?filter[frequency]=DAILY&filter[reportSubType]=SUMMARY&filter[reportType]=SALES&filter[vendorNumber]=89328372&filter[version]=1_0&filter[reportDate]=2020-11-27', // daily dont work before 2pm

        method: 'GET',
        headers: {
            'Accept': 'application/a-gzip, application/json',
            'Authorization': 'Bearer ' + token
        }
    };
    return new Promise((resolve) => {

        https.get(options, function (res) {

            res.on('data', function (data) {
                console.log("debug:::: " + data);
            });


            var body = '';

            res.pipe(gunzip);

            gunzip.on('data', function (data) {
                console.log("data:::: " + data);
                body += data;
            });

            gunzip.on('end', function () {
                console.log("body:::: " + body);
                resolve(body);
            });

        });

    });

}


async function getConfig(secretID, key) {
    const AWS = require('aws-sdk');
    const secretmanager = new AWS.SecretsManager();
    const params = {
        SecretId: secretID
    };
    const result = await secretmanager.getSecretValue(params).promise();
    return JSON.parse(result.SecretString);
}

