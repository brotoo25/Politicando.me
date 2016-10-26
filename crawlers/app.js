var request = require('request');
var cheerio = require('cheerio');
var tabletojson = require('tabletojson');

var url = "http://www.portaldatransparencia.gov.br/PortalFuncoes.asp?Exercicio=2016";

request.get({
        uri: url,
        headers: {
            'Content-Type': 'text/html; charset=ISO-8859-1'
        }
    },
function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var tablesAsJson = tabletojson.convert(html);
        var firstTableAsJson = tablesAsJson[1];

        console.log(firstTableAsJson);
    }
});
