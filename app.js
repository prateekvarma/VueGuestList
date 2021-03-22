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
        makeGreen: '',
        eventCapacity: 25,
        eventCapacityPercentage: 0
    },
    methods: {
        formSubmit: function() {
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100){
                this.guestList.push(this.newNameText)
                // following is to clear input text after submit
                this.newNameText = ''
                this.makeGreen = 'greenBgClass',
                this.eventCapacityPercentage = this.guestList.length / (this.eventCapacity/100)
            }
        },
        spacePressMethod: function() {
            console.log('Escape key pressed')
        }
    }
});