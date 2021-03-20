new Vue({
    el: "#app",
    data: {
        event: {
        eventDate: "Thy Date",
        eventTitle: "Thy Title",
        eventDescription: "Thy Description"
        },
        newNameText: '',
        guestList: [],
        makeGreen: ''
    },
    methods: {
        formSubmit: function() {
            if(this.newNameText.length > 0){
                this.guestList.push(this.newNameText)
                // following is to clear input text after submit
                this.newNameText = ''
                this.makeGreen = 'greenBgClass'
            }
        }
    }
});