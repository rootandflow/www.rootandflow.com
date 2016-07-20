// ID of the Google Spreadsheet
/*
var spreadsheetID = '16FuP13iOQWUAeZEQX4RTPTrnUhDG58gvY2kCo-RRye8';
var feeds = ['list', 'cells'];
var wk = {
  test: '1',
  glossary: '2'
};

var val = ['values', 'basic'];

console.log(val.indexOf('values'));

var query = 'alt=json';
var queryp = {
  lv: 'alt=json-in-script&callback=ListValues',
  lb: 'alt=json-in-script&callback=ListBasic',
  cv: 'alt=json-in-script&callback=CellsValues',
  cb: 'alt=json-in-script&callback=CellsBasic'
};

var urlListValues = 'https://spreadsheets.google.com/feeds/'
        + feeds[0]
        + '/'
        + spreadsheetID
        + '/'
        + wk.glossary
        + '/public/'
        + val[0]

var urlCellsValues = 'https://spreadsheets.google.com/feeds/'
        + feeds[1]
        + '/'
        + spreadsheetID
        + '/'
        + wk.glossary
        + '/public/'
        + val[0]

$.getJSON(urlListValues, query, function(data) {

  var rows = data.feed.entry;

  console.log("Row 1 Keys:");
  console.log(Object.keys(rows[0]));
  console.log("Rows 1 Updated:");
  console.log(rows[0]['updated']['$t']);
  console.log("Rows 1 Content:");
  console.log(rows[0].content.$t);
  console.log("Row 1:");
  console.log(rows[0]);
  console.log("Rows:");
  console.log(rows);

  $(rows).each(function(){
    // Column names are name, age, etc.
    $('.fetched').prepend('<p><strong>'+this.title.$t+'</strong></p><p>'+this.content.$t+'</p>');
  });
});
*/

