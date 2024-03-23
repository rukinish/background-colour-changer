const body = document.body;

body.addEventListener('click', changeBgColour);

function changeBgColour() {

    const randomColour = getRandomCol(); //hex code
    body.style.backgroundColor = randomColour;
}

function getRandomCol() {
    
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}