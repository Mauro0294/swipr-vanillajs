class Home {
    constructor() {
        this.apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=fEMFWtdn7bqvfjkwkiwH1O87iPZ27yPg&tag=&rating=g';
        this.likeButton = document.querySelector('#likeButton');
        this.dislikeButton = document.querySelector('#dislikeButton');
        this.imageContainer = document.querySelector('#giphyImage');
        const gifDescription = document.querySelector('#gifDescription');
        this.likeButton.addEventListener('click', () => {
            this.likeGif();
        });
        this.dislikeButton.addEventListener('click', () => {
            this.dislikeGif();
        });

        this.imageContainer.addEventListener('click', () => {
            this.imageContainer.classList.toggle('scale');
            if (this.imageContainer.classList.contains('scale')) {
                gifDescription.innerText = this.gifDescription;
            } else {
                gifDescription.innerText = '';
            }
        });
        this.fetchGif();
    }
    likeGif() {
        if (localStorage.getItem("favorietenGifs") === null) {
            localStorage.setItem("favorietenGifs", JSON.stringify([]));
        }

        const oudeFavorieten = JSON.parse(localStorage.getItem('favorietenGifs'));
        const nieuweFavoriet = this.gifId;

        oudeFavorieten.push(nieuweFavoriet);
        localStorage.setItem('favorietenGifs', JSON.stringify(oudeFavorieten));

        this.fetchGif();
    }
    dislikeGif() {
        this.fetchGif();
    }
    fetchGif() {
        fetch(this.apiUrl)
            .then(response => response.json())
            .then(data => {
                this.imageContainer.src = data.data.images.downsized_medium.url;
                this.gifId = data.data.id;
                this.gifDescription = data.data.title;
            });
    }
}

const home = new Home();