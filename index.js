const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

(async () => {
    merger.add(process.argv[0], [1]); 
    merger.add(process.argv[1], [2]);

    await merger.save('merged.pdf');
})();