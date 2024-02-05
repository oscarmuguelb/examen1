<template>
    <div class="container">
        <header>
            <h1>Bienvenido a mi examen, no me repruebe D:</h1>
        </header>
        <main>
            <div class="content">
                <img src="../img/descarga.jpeg" alt="Random Image 1" class="image">
                <p>MONOS ARTICOS</p>
            </div>

            <router-link to="/#/inicio" class="link">Volver al incio</router-link>
        </main>
        <footer>
            <p>Me gustan los Arctic Monkeys</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #454545;
}

h1 {
    font-size: 24px;
    color: #f3f3f3;
}



p {
    font-size: 16px;
    color: #ffffff;
}

.link {
    display: block;
    margin-top: 16px;
    font-size: 16px;
    color: #ffffff;
}

footer {
    text-align: center;
    margin-top: 32px;
    font-size: 14px;
}
</style>
