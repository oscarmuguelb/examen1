<template>
    <div class="container">
        <header>
            <div class="carousel">
                <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    style="text-shadow: 1px 1px 2px #333"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >
                    <!-- Text slides with image -->
                    <b-carousel-slide
                        img-src="https://i0.wp.com/michambergodeentretiempo.com/wp-content/uploads/2015/12/artick.jpg"
                    ></b-carousel-slide>
                    <b-carousel-slide img-src="https://kubomusical.com/wp-content/uploads/2020/03/arctic-monkeys.jpg">
                    </b-carousel-slide>
                    <b-carousel-slide
                        img-src="https://www.eres.com.mx/_next/image?url=https%3A%2F%2Fadmin.eres.com.mx%2Fwp-content%2Fuploads%2F2023%2F10%2FArctic-Monkeys-1.jpg&w=1920&q=75"
                    ></b-carousel-slide>
                </b-carousel>
                <h1 slot="caption">Arctic Monkeys</h1>
            </div>
        </header>
        <main>
            <div class="content">
                <h1>Arctic Monkeys</h1>
                <p>
                    Arctic Monkeys es una banda británica de indie rock, formada en Sheffield, Reino Unido. La banda
                    está compuesta por el vocalista y guitarrista Alex Turner, el guitarrista Jamie Cook, el bajista
                    Nick O'Malley y el baterista Matt Helders. Antes de ser conocidos como Arctic Monkeys, la banda
                    llevó por nombre "Bang Bang" y "The Death Ramps", con los que grabaron un EP homónimo en 2005.
                </p>
                <p>
                    La banda alcanzó la fama en el Reino Unido con su primer sencillo "I Bet You Look Good on the
                    Dancefloor", que llegó al número uno en las listas de éxitos del Reino Unido en octubre de 2005.
                    Su álbum debut, Whatever People Say I Am, That's What I'm Not, lanzado en enero de 2006, fue
                    aclamado por la crítica y se convirtió en el álbum debut más vendido en la historia de la música
                    británica. Fue seguido por Favourite Worst Nightmare en 2007, Humbug en 2009, Suck It and See en
                    2011, AM en 2013 y Tranquility Base Hotel & Casino en 2018.
                </p>
                <p>
                    La banda ha ganado siete premios Brit, ganó el premio Mercury Prize en 2006 y ha sido nominada
                    tres veces para el premio Grammy. Arctic Monkeys también ha encabezado festivales como Glastonbury,
                    Reading y Leeds, T in the Park y Lollapalooza. La banda ha vendido más de 20 millones de discos en
                    todo el mundo.
                </p>
            </div>

            <router-link to="/#/inicio" class="link">Volver al inicio</router-link>
        </main>
        <footer>
            <p>Me gustan los Arctic Monkeys</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "LandingPage",
    data() {
        return {
            slide: 0,
            sliding: null,
        };
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        },
    },
};
</script>

<style scoped>
.carousel {
    margin-bottom: 20px;
    max-height: 480px;  
    width: 1024px;
    overflow: hidden;   
}

.carousel img {
    height: auto;
    width: 100%; 
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 24px;
    color: #000000;
}

p {
    font-size: 16px;
    color: #000000;
}

.link {
    display: block;
    margin-top: 16px;
    font-size: 16px;
    color: #000000;
}

footer {
    text-align: center;
    margin-top: 32px;
    font-size: 14px;
}
</style>

