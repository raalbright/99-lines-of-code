const friends = ['Justin', 'Ashley', 'Chris', 'Natilie', 'Aaron'];

for (friend of friends) {
    console.log(friend.toUpperCase() + ':')
    for (let i = 99; i > 0; i--) {
        if (i < 2) {
            console.log(i + ' line of code in the file, ' + i + ' line of code; ' + friend + ' strikes one out, clears it all out, no more lines of code in the file');
        } else {
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file');
        }
    }
}