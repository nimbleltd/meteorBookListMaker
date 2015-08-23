Books = new Meteor.Collection("books");

Meteor.methods({
	addBook: function(bookData) {
		var bookID = Books.insert(bookData);
		return bookID;
	}
});