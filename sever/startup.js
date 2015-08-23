Meteor.startup(function () {
	if (!Books.findOne()) {
		Books.insert({title: "To Kill a Mockingbird", author: "Harper Lee"});
		Books.insert({title: "1984", author: "George Orwell"});
		Books.insert({title: "The Lord of the Rings", author: "J. R. R. Tolkien"});
		Books.insert({title: "Catcher in the Rye", author: "J. D. Salinger"});
		Books.insert({title: "The Geat Gatsby", author: "F. Scott Fitzgerald"});

	}
});