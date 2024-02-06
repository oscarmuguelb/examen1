<template>
  <div class="content">
    <h1>Lista de Autos</h1>
    <p>
      Para ordenar los elementos debes de hacer clic en el encabezado de la
      columna correspondiente
    </p>
    <div class="table">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th @click="ordenar('marca')">Marca</th>
            <th @click="ordenar('modelo')">Modelo</th>
            <th @click="ordenar('anio')">Año</th>
            <th @click="ordenar('numeroSerie')">Número de Serie</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(registro, index) in registrosPaginados" :key="index">
            <td>{{ registro.marca }}</td>
            <td>{{ registro.modelo }}</td>
            <td>{{ registro.anio }}</td>
            <td>{{ registro.numeroSerie }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
}
.table {
  width: 80%;
  margin-top: 20px;
}
</style>
<script>
export default {
  name: "Paginacion",
  data() {
    return {
      columnaOrden: "",
      ordenAscendente: true,
      registrosPorPagina: 10,
      paginaActual: 1,
    };
  },
  computed: {
    registros() {
      return this.$store.getters.obtenerRegistros;
    },
    registrosOrdenados() {
      return this.ordenarRegistros();
    },
    totalPaginas() {
      return Math.ceil(this.registros.length / this.registrosPorPagina);
    },
    registrosPaginados() {
      const inicio = (this.paginaActual - 1) * this.registrosPorPagina;
      const fin = inicio + this.registrosPorPagina;
      return this.registrosOrdenados.slice(inicio, fin);
    },
  },
  methods: {
    ordenar(columna) {
      if (this.columnaOrden === columna) {
        this.ordenAscendente = !this.ordenAscendente;
      } else {
        this.columnaOrden = columna;
        this.ordenAscendente = true;
      }
    },
    ordenarRegistros() {
      const registros = [...this.registros];

      if (this.columnaOrden) {
        registros.sort((a, b) => {
          const factorOrden = this.ordenAscendente ? 1 : -1;
          return (
            a[this.columnaOrden].localeCompare(b[this.columnaOrden]) *
            factorOrden
          );
        });
      }

      return registros;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.table th {
  cursor: pointer;
}

.table th:hover {
  background-color: #f5f5f5;
}

.table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table tbody tr:hover {
  background-color: #e9e9e9;
}
</style>
