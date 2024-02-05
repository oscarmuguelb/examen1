<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#/Landingpage">Landing-page</b-nav-item>
        <!-- sIDEBARXD -->
        <template>
          <div>
            <b-button v-b-toggle.sidebar-variant>Sidebar</b-button>
            <b-sidebar
              id="sidebar-variant"
              title="Sidebar"
              bg-variant="dark"
              text-variant="light"
              shadow
            >
              <router-link to="/#/inicio" class="link">Volver al incio</router-link>
              <p></p>
              <router-link to="/formulario" class="link">Formulario</router-link>
              <p></p>
              <router-link to="/paginacion" class="link">Paginacion</router-link>
              <div class="px-3 py-2"></div>
            </b-sidebar>
          </div>
        </template>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style scoped></style>
