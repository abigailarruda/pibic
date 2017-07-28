var app = {
    initialize: function() {
    	console.log(":)");
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
    }
};

app.initialize();
