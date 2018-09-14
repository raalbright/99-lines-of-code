const singBtn = document.querySelector('input[value="Sing!"]');
const body = document.body;


const handleClick= () => {
    const friends = ['Justin', 'Ashley', 'Chris', 'Natilie', 'Rob'];
    friends.forEach(sing);
}

const sing = (name) => {
    const friendDiv = document.createElement('div');
    const friendHeader = document.createElement('h3');
    friendDiv.classList.add('friend');
    friendHeader.innerText = name.toUpperCase() + ':';
    friendDiv.appendChild(friendHeader);


    for (let i = 99; i > 0; i--) {
        const para = document.createElement('p');
        let lyric = '';

        if (i === 2) {
            lyric = i + ' line of code in the file, ' + i + ' line of code; ' + name +
            ' strikes one out, clears it all out, 1 line of code in the file.';
        } else if (i === 1) {
            lyric = i + ' line of code in the file, ' + i + ' line of code; ' + name +
                ' strikes one out, clears it all out, no more lines of code in the file.';
        } else {
            lyric = i + ' lines of code in the file, ' + i + ' lines of code; ' + name + 
            ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file.';
        }
        para.innerText = lyric;
        friendDiv.appendChild(para);
    }
    body.appendChild(friendDiv);
}

singBtn.addEventListener('click', handleClick);