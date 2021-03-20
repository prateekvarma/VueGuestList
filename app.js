new Vue({
    el: "#app",
    data: {
        event: {
        eventDate: "Thy Date",
        eventTitle: "Thy Title",
        eventDescription: "Thy Description"
        },
        guestName: '',
        guestList: []
    },
    methods: {
        formSubmit: function() {
            this.guestList.push(this.guestName)
        }
    }
});