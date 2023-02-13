var app = new Vue({
    el: '#app',
    data: {
        // creo la variabile che mi serve per stoppare setinterval
        autoSlideInterval: 0,

        // indexCarousel è l'indice dell'array carouselImages
        indexCarousel: 0,

        // creo un array di img per il carosello
        carouselImages: [
            "img/campagna.jpg",
            "img/cascate.webp",
            "img/fiori.jpeg",
            "img/montagne.webp"
        ],
    },
    methods: {
        //creo la funzione che con la freccia di destra mi scorre le immagini in avanti
        nextPhoto()
        {
            const nextImageIndex = this.indexCarousel +1;

            if( nextImageIndex > this.carouselImages.length - 1){
                this.indexCarousel = 0;
            } else {
                this.indexCarousel = nextImageIndex;
            }
        },
        // creo la funzione per la freccia di sx per scorrere le immagini indietro
        prevPhoto ()
        {
            const prevImageIndex = this.indexCarousel - 1;

            if( prevImageIndex < 0) {
                this.indexCarousel = this.carouselImages.length - 1;
            } else {
                this.indexCarousel = prevImageIndex;
            }
        },
        // funzione che stoppa lo scroll di setInterval
        autoSlideStop() {
        clearInterval(this.autoSlideInterval);
        }
    },
    created() {
        //set interval al caricamento del browser
    this.autoSlideInterval = setInterval(() => {
        this.nextPhoto();
    }, 3000)

    }

    });

















