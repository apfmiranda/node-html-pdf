var pdf = require("html-pdf");
var ejs = require("ejs");

var options = { 
	format: 'A3',
	// paginationOffset: 1,       // Override the initial pagination number
    // header: {
    //   height: "35mm",
    //   contents: '<div style="text-align: center;">Autor: Alexandre Miranda</div>'
    // },
    // footer: {
    //   height: "25mm",
    //   contents: {
    //     first: 'Cover page',
    //     2: 'Second page', // Any page number is working. 1-based index
    //     default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
    //     last: 'Last Page'
	//   }
	// }
};

var nome = "Alexandre Miranda";

ejs.renderFile("relaorio.ejs",{nome: nome},(err, html) => {
	if (err) {
        console.log(err);
	} else {
		pdf.create(html,options).toFile("./file.pdf",(err, respo) => {
			if (err) {
				console.log(err); 
			} else {
				console.log(respo);
			}
		});
	}

});

