document.addEventListener("DOMContentLoaded", function() {
var friends = [ "Brian", "Kelsey", "Mike", "Lou", "Brittney" ];

var button = document.getElementById("button");

button.addEventListener('click', function() {
    for(var i = 0; i < friends.length; i++) {
            var friend = friends[i];

    var people = document.createElement('div');
    people.className = 'friend'
    var names = document.createElement('h3');
    var textName = document.createTextNode(friend);
    names.appendChild(textName);
    people.appendChild(names);
    document.body.appendChild(people);
    
    console.log (friends[i] + ':')
        for(var j = 99; j >= 1; j--) {
            var lyrics;
            if (j > 2) {
                lyrics = document.createTextNode([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friend+ ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file' );
            } else if (j == 2) {
                lyrics = document.createTextNode([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friend+ ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file' ); 
            } else if (j = 1) {
                lyrics = document.createTextNode([j] + ' line of code in the file, ' + [j] + ' line of code; ' + friend+ ' strikes one out, clears it all out, no more lines of code in the file' );
            }
            var music = document.createElement('p');
            music.appendChild(lyrics);
            people.appendChild(music);
            }
        }
    });
});
