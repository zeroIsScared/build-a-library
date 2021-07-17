/* Let’s start by making a parent class for our Book, CD, and Movie classes. Create an empty class called Media.
Inside the Media class, create an empty constructor() method that takes one parameter. This argument will set the one property that is in all three subclasses of Media, and does not have a default value.
  Inside the constructor, set the values for Media properties that Book, CD, and Movie share. Prepend all of the property names with an underscore (_).  */

class Media {
    constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    }
//Create getters for the title, isCheckedOut, and ratings properties. Each getter should return the value saved to the matching property.

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }
// Create a setter for the isCheckedOut property.
    set isCheckedOut(isCheckedOut) {
        this._isCheckedOut = isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    /* Under your getters, create a method named toggleCheckOutStatus that changes 
    the value saved to the _isCheckedOut property. If the value is true, then change
     it to false. If the value is false, then change it to true. */
     toggleCheckOutStatus() {
        this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true;
     }
//Under .toggleCheckOutStatus(), create a method named getAverageRating.
// Return the average value of the ratings array. Use the reduce method to 
//find the sum of the ratings array. Divide this sum by the length of the
// ratings array, and return the result.
    getAverageRating() {
    return this._ratings.reduce((a, b)=> a + b )/this._ratings.length
    }
/*Let’s add a method named addRating that accepts one argument and uses .push() 
to add it to the end of the ratings array.*/
    addRating (rating) {
        this._ratings.push(rating);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        
       // super(ratings);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}
/* Create a Book instance with the following properties:
Author: 'Bill Bryson'
Title: 'A Short History of Nearly Everything'
pages: 544
 */
const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544);

//Call .toggleCheckOutStatus() on the historyOfEverything instance.
historyOfEverything.toggleCheckOutStatus();
  
//Log the value saved to the isCheckedOut property in the historyOfEverything instance.
console.log(historyOfEverything.isCheckedOut);

//Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//Call .getAverageRating() on historyOfEverything. 
//Log the result to the console.
console.log(historyOfEverything.getAverageRating());

//Create a Movie instance with the following properties:
//Director: 'Jan de Bont'
//Title: 'Speed'
//Runtime: 116
const speed = new Movie('Jan de Bont', 'Speed', 116 );

//Call .toggleCheckOutStatus() on the speed instance.
speed.toggleCheckOutStatus();
//Log the value saved to the isCheckedOut property in the speed instance.
console.log(speed.isCheckedOut);

//Call .addRating() three times on speed with inputs of 1, 1, and 5.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
//Call .getAverageRating() on speed. Log the result to the console.

console.log(speed.getAverageRating());

const babel = new CD('Alternosfera', 'Arhitectul din Babel', ['Unu doi', 'Fantinile', 'Lucis']);
 
console.log(babel);
babel.toggleCheckOutStatus();

babel.addRating(5);
babel.addRating(4);
babel.addRating(3);

console.log(babel.getAverageRating());
console.log(babel.songs);
