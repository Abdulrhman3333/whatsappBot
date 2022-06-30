// // the simplest way to read excel is to use sheetjs
// // https://github.com/SheetJS/sheetjs

// // A. in nodejs
// var XLSX = require('xlsx');
// var workbook = XLSX.readFile('C:\\Users\\USER\\Desktop\\programming\\Whatsapp\\excelFile.xlsx');
// /* DO SOMETHING WITH workbook HERE */

// // B. in browser
// // 1. first include the library
// // <script src="dist/xlsx.full.min.js"></script>

// // 2. handle the file upload in a script

// function handleFile(e) {
//   var files = e.target.files, f = files[0];
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     var data = new Uint8Array(e.target.result);
//     var workbook = XLSX.read(data, {type: 'array'});

//     /* DO SOMETHING WITH workbook HERE */
//   };
//   reader.readAsArrayBuffer(f);
// }
// input_dom_element.addEventListener('change', handleFile, false);


var workbook = new Excel.Workbook(); 
workbook.xlsx.readFile('C:\\Users\\USER\\Desktop\\programming\\Whatsapp\\excelFile.xlsx')
    .then(function() {
        var worksheet = workbook.getWorksheet(sheet);
        worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
          console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
        });
});

// import parseXlsx from excel;
 
// parseXlsx('C:\\Users\\USER\\Desktop\\programming\\Whatsapp\\excelFile.xlsx').then((data) => {
//   // data is an array of arrays
//   console.log(data);
// });