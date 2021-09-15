const Offer = {
    data() {
        return {
            foo: 0,
            msg: "D&S is my favourite",
            list: ["red", "blue", "green"]
        }
    }
}

Vue.createpp(Offer).mount('#offer')