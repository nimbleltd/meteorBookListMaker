Template.bookList.helpers({
  books: function () {
    // return Session.get('books');
    return Books.find();
  }
});

Template.bookList.events({
	"submit .add-book": function(event) {
		event.preventDefault(); // this prevents built-in form submission
		Meteor.call('addBook', {title: event.target.title.value, author: event.target.author.value})
	}
});
