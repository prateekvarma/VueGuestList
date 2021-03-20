new Vue({
    el: "#app",
    data: {
        event: {
        eventDate: "Thy Date",
        eventTitle: "Thy Title",
        eventDescription: "Thy Description"
        },
        newNameText: '',
        guestList: []
    },
    methods: {
        formSubmit: function() {
            if(this.newNameText.length > 0){
                this.guestList.push(this.newNameText)
                this.newNameText = ''
            }
        }
    }
});