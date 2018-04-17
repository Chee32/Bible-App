import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage } from '../../pages/result/result';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  form = {
  	"OT": {
  		"value": true,
  		"abbr": "ot",
  		"name": "Old<br>Testimate",
  		"showsub": false,
  		"sections": [
  			{
	  			"value": true,
		  		"abbr": "lw",
		  		"name": "Books of the Law",
		  		"show": false,
		  		"showsub": false,
		  		"books": [
			  		{
				  		"value": true,
				  		"abbr": "gn",
				  		"name": "Genisis"
			  		},
			  		{
			  			"value": true,
			  			"abbr": "ex",
			  			"name": "Exodus"
			  		},
			  		{
			  			"value": true,
			  			"abbr": "lv",
			  			"name": "Leviticus"
			  		},
			  		{
			  			"value": true,
			  			"abbr": "nm",
			  			"name": "Numbers"
			  		},
			  		{
			  			"value": true,
			  			"abbr": "dt",
			  			"name": "Deuteronomy"
			  		}
			  			
			  	]
			},
			{
	  			"value": true,
		  		"abbr": "hs",
		  		"name": "Books of History",
		  		"show": false,
		  		"showsub": false,
		  		"books": [
		  			{
				  		"value": true,
				  		"abbr": "js",
				  		"name": "Joshua"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "jud",
				  		"name": "Judges"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "rt",
				  		"name": "Ruth"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "1sm",
				  		"name": "Samuel 1"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "2sm",
				  		"name": "Samuel 2"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "1kgs",
				  		"name": "Kings 1"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "2kgs",
				  		"name": "Kings 2"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "1ch",
				  		"name": "Chronicles 1"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "2ch",
				  		"name": "Chronicles 2"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "ezr",
				  		"name": "Ezra"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "ne",
				  		"name": "Nehemiah"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "et",
				  		"name": "Esther"
			  		},
			  	]

			},
			{
	  			"value": true,
		  		"abbr": "pw",
		  		"name": "Poetry and Wisdom",
		  		"show": false,
		  		"showsub": false,
		  		"books": [
		  			{
				  		"value": true,
				  		"abbr": "job",
				  		"name": "Job"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "ps",
				  		"name": "Psamls"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "prv",
				  		"name": "Proverbs"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "ec",
				  		"name": "Ecclesiastes"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "so",
				  		"name": "Song of Songs"
			  		},
			  	]

			},
			{
	  			"value": true,
		  		"abbr": "ma",
		  		"name": "Major Prophets",
		  		"show": false,
		  		"showsub": false,
		  		"books": [
		  			{
				  		"value": true,
				  		"abbr": "is",
				  		"name": "Isaiah"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "jr",
				  		"name": "Jeremiah"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "lm",
				  		"name": "Lamentations"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "ez",
				  		"name": "Ezekiel"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "dn",
				  		"name": "Daniel"
			  		},
			  	]

			},
			{
	  			"value": true,
		  		"abbr": "mi",
		  		"name": "Minor Prophets",
		  		"show": false,
		  		"showsub": false,
		  		"books": [
		  			{
				  		"value": true,
				  		"abbr": "ho",
				  		"name": "Hosea"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "jl",
				  		"name": "Joel"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "am",
				  		"name": "Amos"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "ob",
				  		"name": "Obadiah"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "jn",
				  		"name": "Jonah"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "mi",
				  		"name": "Micah"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "na",
				  		"name": "Nahum"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "hk",
				  		"name": "Habakkuk"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "zp",
				  		"name": "Zephaniah"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "hg",
				  		"name": "Haggai"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "zc",
				  		"name": "Zechariah"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "ml",
				  		"name": "Malachi"
			  		},
			  	]

			},
		]
  	},
  	"NT": {
  		"value": true,
  		"abbr": "nt",
  		"name": "New<br>Testimate",
  		"showsub": false,
  		"sections": [
  			{
	  			"value": true,
		  		"abbr": "gs",
		  		"name": "The Gosple",
		  		"show": false,
		  		"showsub": false,
		  		"books": [
			  		{
				  		"value": true,
				  		"abbr": "mt",
				  		"name": "Matthew"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "mk",
				  		"name": "Mark"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "lk",
				  		"name": "Luke"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "jo",
				  		"name": "John"
			  		},
			  	]

			},
			{
	  			"value": true,
		  		"abbr": "her",
		  		"name": "History, Epistles, and Revelation",
		  		"show": false,
		  		"showsub": false,
		  		"books": [
			  		{
				  		"value": true,
				  		"abbr": "act",
				  		"name": "Acts"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "rm",
				  		"name": "Romans"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "1co",
				  		"name": "Corinthians 1"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "2co",
				  		"name": "Corinthians 2"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "gl",
				  		"name": "Galatians"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "eph",
				  		"name": "Ephesians"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "ph",
				  		"name": "Philippians"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "cl",
				  		"name": "Colossians"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "1ts",
				  		"name": "Thessalonians 1"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "2ts",
				  		"name": "Thessalonians 2"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "1tm",
				  		"name": "Timothy 1"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "2tm",
				  		"name": "Timothy 2"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "tt",
				  		"name": "Titus"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "phm",
				  		"name": "Philemon"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "hb",
				  		"name": "Hebrews"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "jm",
				  		"name": "James"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "1pe",
				  		"name": "Peter 1"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "2pe",
				  		"name": "Peter 2"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "1jo",
				  		"name": "John 1"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "2jo",
				  		"name": "John 2"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "3jo",
				  		"name": "John 3"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "jd",
				  		"name": "Jude"
			  		},
			  		{
				  		"value": true,
				  		"abbr": "re",
				  		"name": "Revelation"
			  		},
			  	]

			},
		]
  	}
  };

  resultPage : any;
  books : any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  	this.resultPage = ResultPage;
  }

  RandomBible() {
  	console.log(this.form);

  	this.books = this.booksArray(this.form);
  	if( this.books.length == 0 ) {
  		this.noBooks();
  	} else {
	  	this.navCtrl.push(this.resultPage, {
	        booksData: this.books
	    });
	}
  }

  ShowSections(sec) {
  	console.log(sec);
  	if( sec == "ot" ) {
  		this.form.OT.showsub = !this.form.OT.showsub;
  		this.form.OT.sections.forEach((section) => {
  			section.showsub = false;
  		});
  	}

  	if( sec == "lw" ) {
  		this.form.OT.sections[0].showsub = !this.form.OT.sections[0].showsub;
  	}

  	if( sec == "hs" ) {
  		this.form.OT.sections[1].showsub = !this.form.OT.sections[1].showsub;
  	}

  	if( sec == "pw" ) {
  		this.form.OT.sections[2].showsub = !this.form.OT.sections[2].showsub;
  	}

  	if( sec == "ma" ) {
  		this.form.OT.sections[3].showsub = !this.form.OT.sections[3].showsub;
  	}

  	if( sec == "mi" ) {
  		this.form.OT.sections[4].showsub = !this.form.OT.sections[4].showsub;
  	}

  	if( sec == "nt" ) {
  		this.form.NT.showsub = !this.form.NT.showsub;
  		this.form.NT.sections.forEach((section) => {
  			section.showsub = false;
  		});
  	}

  	if( sec == "gs" ) {
  		this.form.NT.sections[0].showsub = !this.form.NT.sections[0].showsub;
  	}

  	if( sec == "her" ) {
  		this.form.NT.sections[1].showsub = !this.form.NT.sections[1].showsub;
  	}
  }
  

  CheckChange( name, value ) {

  	if( name == "ot" ) {
  		//Sub
  		this.form.OT.sections.forEach((section) => {
  			section.value = value;
  			section.books.forEach((book) => {
  				book.value = value;
  			});
  		});

  		//No Super
  	}

  	if( name == "lw" ) {
  		//Sub
  		this.form.OT.sections[0].books.forEach((book) => {
			book.value = value;
		});

		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  		}
  	}

  	if( this.inSectionOT(0,name) ) {
  		//No Sub

  		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  			this.form.OT.sections[0].value = false;
  		}
  	}

  	if( name == "hs" ) {
  		//Sub
  		this.form.OT.sections[1].books.forEach((book) => {
			book.value = value;
		});

		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  		}
  	}

  	if( this.inSectionOT(1,name) ) {
  		//No Sub

  		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  			this.form.OT.sections[1].value = false;
  		}
  	}

  	if( name == "pw" ) {
  		//Sub
  		this.form.OT.sections[2].books.forEach((book) => {
			book.value = value;
		});

		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  		}
  	}

  	if( this.inSectionOT(2,name) ) {
  		//No Sub

  		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  			this.form.OT.sections[2].value = false;
  		}
  	}

  	if( name == "ma" ) {
  		//Sub
  		this.form.OT.sections[3].books.forEach((book) => {
			book.value = value;
		});

		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  		}
  	}

  	if( this.inSectionOT(3,name) ) {
  		//No Sub

  		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  			this.form.OT.sections[3].value = false;
  		}
  	}

  	if( name == "mi" ) {
  		//Sub
  		this.form.OT.sections[4].books.forEach((book) => {
			book.value = value;
		});

		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  		}
  	}

  	if( this.inSectionOT(4,name) ) {
  		//No Sub

  		//Super
  		if( value == false ) {
  			this.form.OT.value = false;
  			this.form.OT.sections[4].value = false;
  		}
  	}

  	if( name == "nt" ) {
  		//Sub
  		this.form.NT.sections.forEach((section) => {
  			section.value = value;
  			section.books.forEach((book) => {
  				book.value = value;
  			});
  		});

  		//No Super
  	}

  	if( name == "gs" ) {
  		//Sub
  		this.form.OT.sections[0].books.forEach((book) => {
			book.value = value;
		});

		//Super
  		if( value == false ) {
  			this.form.NT.value = false;
  		}
  	}

  	if( this.inSectionNT(0,name) ) {
  		//No Sub

  		//Super
  		if( value == false ) {
  			this.form.NT.value = false;
  			this.form.NT.sections[0].value = false;
  		}
  	}

  	if( name == "her" ) {
  		//Sub
  		this.form.NT.sections[1].books.forEach((book) => {
			book.value = value;
		});

		//Super
  		if( value == false ) {
  			this.form.NT.value = false;
  		}
  	}

  	if( this.inSectionNT(1,name) ) {
  		//No Sub

  		//Super
  		if( value == false ) {
  			this.form.NT.value = false;
  			this.form.NT.sections[1].value = false;
  		}
  	}

  }

  inSectionOT(sec, name) {
  	var exists = false;
  	this.form.OT.sections[sec].books.forEach((book) => {
  		if(book.abbr == name) {
  			exists = true;
  		}
  	});
  	return exists;
  }

  inSectionNT(sec, name) {
  	var exists = false;
  	this.form.NT.sections[sec].books.forEach((book) => {
  		if(book.abbr == name) {
  			exists = true;
  		}
  	});
  	return exists;
  }

  booksArray(form) {
  	var books = [];

  	this.form.NT.sections.forEach((section) => {
		section.books.forEach((book) => {
			if (book.value) {
				books.push(book.abbr);
			} 
		});
	});
	this.form.OT.sections.forEach((section) => {
		section.books.forEach((book) => {
			if (book.value) {
				books.push(book.abbr);
			} 
		});
	});
  	return books;
  }

  noBooks() {
	  let alert = this.alertCtrl.create({
	    title: 'No books selected',
	    subTitle: 'Please select at least one book',
	    buttons: ['Dismiss']
	  });
	  alert.present();
  }
}
