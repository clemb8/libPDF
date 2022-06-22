const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

(async () => {
    console.log(process.argv[2]);
    merger.add(process.argv[2], [1]); 
    merger.add(process.argv[3], [2]);

    await merger.save('merged.pdf');
})();