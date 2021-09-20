const User = {
    data() {
        return{
            result: {
                name: "",
                location: "",
                dob: "",
                picture: ""
            }
        }
    },
    methods: {
        format_date(date_string) {
            const date_ = new Date(date_string);
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date_);
        }
    },
    created() {
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
    }
}

Vue.createApp(User).mount('#user')