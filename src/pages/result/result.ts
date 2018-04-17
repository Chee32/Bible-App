import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataFinderProvider } from '../../providers/data-finder/data-finder';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  books: any;
  bible: any;
  bookI: any;
  book: any;
  chapter: any;
  verses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private datafinder: DataFinderProvider) {
    this.books = navParams.data.booksData;
    this.loadRandom();
  }

  loadRandom() {
  	var max  = this.books.length - 1;
    var bookindex = this.getRandomInt(0,max);
    var chapter = 0;
    this.bookI = this.books[bookindex];

    var url = 'assets/data/bible.json';
    this.datafinder.getJSONDataAsync(url)
    	.then((data) => {
    		this.bible = data;
    		this.bible.forEach((book) => {
		    	if(book.abbrev == this.bookI) {
		    		this.book = book.name;
		    		chapter = this.getRandomInt(0, book.chapters.length-1);
		    		this.chapter = chapter + 1;
		    		this.verses = "";
		    		book.chapters[chapter].forEach((vers, index) => {
		    			var verse = index + 1;
		    			this.verses += " [" + verse + "]" + vers;		    			
		    		});
		    	}
		    });
    	});    
  }
  
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  goToSearch() {
    this.navCtrl.pop();
  }

}
