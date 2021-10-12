const Books = {
    data() {
        return {
            books: []
        }
    },
    methods: {
        fetchBooksData() {
            fetch('/api/books/books.php')
            .then( response => response.json() )
            .then( (responseJson) => {                
                this.books = responseJson;                
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchBooksData();
    }
}

Vue.createApp(Books).mount('#books')