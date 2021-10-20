const Controller = {
    data() {
        return{
            result: {
                name: "",
                location: "",
                dob: "",
                picture: ""
            },
            books: []
        }
    },
    methods: {
        format_date(date_string) {
            const date_ = new Date(date_string);
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date_);
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
        }
    },
    created() {
        this.fetchUserData();
        this.fetchBooksData();   
    }
}

Vue.createApp(Controller).mount('#app')