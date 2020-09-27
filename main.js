const text = "Bonjour, Je m'appelle Samia, J'habite à Avignon, Je suis \"developpeuse\" front-end, Je travaille avec HTML, Css, Javascript, Je commence l'apprentissage du React, et le tout en autodidacte !... Contactez moi ;)";

let begin = 0;

function write() {
    document.body.innerText = text.slice(0, begin);
    begin++;

    if (begin > text.length ) {
        begin = 0 ;
    }
}

setInterval(write, 150);

