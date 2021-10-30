const Controller = {
    data() {
        return{
            result: {
                name: "",
                location: "",
                dob: "",
                picture: ""
            },
            books: [],
            newBookForm: {},
            updateBookForm: {},
            isEditing: false,
            selectedBook: null
        }
    },
    methods: {
        formatDate(date_string) {
            const date_ = new Date(date_string);
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date_);
        },
        edit(book){
            book.editmode = true;            
        },
        cancelEdit(book){
            book.editmode = false;
            this.fetchBooksData();
        },
        save(book){            
            this.updateBookForm = book;
            book.editmode = false;
            fetch('api/books/updateBook.php', {
                method:'POST',
                body: JSON.stringify(this.updateBookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                this.books = json;
                this.updateBookForm = {};
            });
        },
		fetchUserData(){
			fetch('https://randomuser.me/api')
			.then(response => response.json())
			.then(  
				(json) => {                                
					this.result = json.results[0];                
					console.log(this.result);
				}
			)
			.catch(
				function(error) {
					console.error(error);
				}
			)
		},
        fetchBooksData() {
            fetch('/api/books/books.php')
            .then( response => response.json() )
            .then( (responseJson) => {                
                this.books = responseJson;                
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        addNewBook(event) {
            fetch('/api/books/createBook.php', {
                method: "POST",
                body: JSON.stringify(this.newBookForm),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                this.books = json;
                this.newBookForm = {};
            });
        },
        deleteBook(selectedBook) {
            if (!confirm("Are you sure you want to delete the book from " + selectedBook.title + "?")) {
                return;
            }
            fetch('api/books/deleteBook.php', {
                method:'POST',
                body: JSON.stringify(selectedBook),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                this.books = json;
            });
        }
    },
    created() {
        this.fetchUserData();
        this.fetchBooksData();   
    }
}

Vue.createApp(Controller).mount('#app')