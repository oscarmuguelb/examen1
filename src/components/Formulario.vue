<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="marca">Marca:</label>
                <input type="text" id="marca" v-model="marca" required pattern="[A-Za-z0-9]+" />
            </div>
            <div>
                <label for="modelo">Modelo:</label>
                <input type="text" id="modelo" v-model="modelo" required pattern="[A-Za-z0-9]+" />
            </div>
            <div>
                <label for="anio">Año de fabricación:</label>
                <input type="number" id="anio" v-model="anio" required :max="currentYear" />
            </div>
            <div>
                <label for="numeroSerie">Número de serie(XXXX000-00XX):</label>
                <input type="text" id="numeroSerie" v-model="numeroSerie" required pattern="[A-Za-z]{4}[0-9]{3}-[0-9]{2}[A-Za-z]{2}" />
            </div>
            <button type="submit">Registrar</button>
        </form>
        <div v-if="showSuccessMessage">¡Registro exitoso!</div>
    </div>
</template>

<script>
export default {
    name: 'Formulario',
    data() {
        return {
            marca: '',
            modelo: '',
            anio: '',
            numeroSerie: '',
            currentYear: new Date().getFullYear(),
            showSuccessMessage: false,
        };
    },
    methods: {
        submitForm() {
            if (this.marca === '' || this.modelo === '' || this.anio === '' || this.numeroSerie === '') {
                console.log('Por favor, complete todos los campos');
                return;
            }

            this.$store.dispatch('guardarRegistro', {
                marca: this.marca,
                modelo: this.modelo,
                anio: this.anio,
                numeroSerie: this.numeroSerie,
            }).then(() => {
                console.log('Dato guardado');
                this.showSuccessMessage = true; 
                setTimeout(() => {
                    this.showSuccessMessage = false; 
                }, 3000);
            }).catch((error) => {
                console.log('Error al guardar el dato:', error);
            });


            this.marca = '';
            this.modelo = '';
            this.anio = '';
            this.numeroSerie = '';
        },
    },
};
</script>
