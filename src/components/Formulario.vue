<template>
  <div class="content">
    <h1>Formulario auto</h1>
    <div v-if="showSuccessMessage" class="alert alert-success">
      ¡Registro exitoso!
    </div>
    <div class="fomulario2">
      <form class="formulario" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            v-model="marca"
            required
            pattern="[A-Za-z0-9]+"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="modelo">Modelo:</label>
          <input
            type="text"
            id="modelo"
            v-model="modelo"
            required
            pattern="[A-Za-z0-9]+"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="anio">Año de fabricación:</label>
          <input
            type="number"
            id="anio"
            v-model="anio"
            required
            :max="currentYear"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="numeroSerie">Número de serie(XXXX000-00XX):</label>
          <input
            type="text"
            id="numeroSerie"
            v-model="numeroSerie"
            required
            pattern="[A-Za-z]{4}[0-9]{3}-[0-9]{2}[A-Za-z]{2}"
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
      <img
        src="https://i.pinimg.com/564x/e9/c4/a2/e9c4a211bf8a6fc18de58809192747dc.jpg"
        alt="auto"
      />
    </div>
  </div>
</template>
<style>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: auto;
}
.fomulario2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #5d5d5d;
  border-radius: 5px;
  width: auto;
  margin: 50px;
  padding: 20px;
}
.formulario {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  padding: 20px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}
</style>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      marca: "",
      modelo: "",
      anio: "",
      numeroSerie: "",
      currentYear: new Date().getFullYear(),
      showSuccessMessage: false,
    };
  },
  methods: {
    submitForm() {
      if (
        this.marca === "" ||
        this.modelo === "" ||
        this.anio === "" ||
        this.numeroSerie === ""
      ) {
        console.log("Por favor, complete todos los campos");
        return;
      }

      this.$store
        .dispatch("guardarRegistro", {
          marca: this.marca,
          modelo: this.modelo,
          anio: this.anio,
          numeroSerie: this.numeroSerie,
        })
        .then(() => {
          console.log("Dato guardado");
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        })
        .catch((error) => {
          console.log("Error al guardar el dato:", error);
        });

      this.marca = "";
      this.modelo = "";
      this.anio = "";
      this.numeroSerie = "";
    },
  },
};
</script>
