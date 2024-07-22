// Define your Book class here:

class Book {
    constructor(title, author, copyright, ISBN, pageCount, checkoutCount, discarded = 'false') {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.ISBN = ISBN;
        this.pageCount = pageCount;
        this.checkoutCount = checkoutCount;
        this.discarded = discarded;
    }

    checkout(uses = 1) {
        this.checkoutCount += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyright, ISBN, pageCount, checkoutCount, discarded) {
        super(title, author, copyright, ISBN, pageCount, checkoutCount, discarded);
    }
    
    replace(currentYear) {
        if (currentYear - this.copyright > 5) {
            this.discarded = 'true';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, ISBN, pageCount, checkoutCount, discarded) {
        super(title, author, copyright, ISBN, pageCount, checkoutCount, discarded);
    }

    replace() {
        if (this.checkoutCount > 100) {
            this.discarded = 'true';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let pride = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'false');

let topSecret = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0000000000000, 1147, 1, 'false');

// Code exercises 4 & 5 here:

topSecret.replace(2024);

console.log(topSecret);

pride.checkout(5);
pride.replace();

console.log(pride);