class Favorieten {
    constructor() {
        this.favorietenGifs = JSON.parse(localStorage.getItem('favorietenGifs'));
        this.favorietenContainer = document.querySelector('#favorietenContainer');
        this.laadFavorieten();
    }
    laadFavorieten() {
        for (let x = 0; x < this.favorietenGifs.length; x++) {
            const favorietElement = document.createElement('img');
            favorietElement.src = `https://media.giphy.com/media/${this.favorietenGifs[x]}/giphy.gif`;
            favorietElement.alt = 'Gif';
            this.favorietenContainer.appendChild(favorietElement);
        }
    }
}

const favorieten = new Favorieten();