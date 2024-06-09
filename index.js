(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        // Retrieve the first letter of the current name
        var firstLetter = names[i].charAt(0).toLowerCase();

        // Check if the first letter is 'j'
        if (firstLetter === 'j') {
            console.log("Good Bye " + names[i]);
        } else {
            console.log("Hello " + names[i]);
        }
    }
})();