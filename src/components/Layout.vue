<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <template>
          <div class="mb-2">
            <b-avatar src="data:image/jpeg;base64,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"></b-avatar>
          </div>
        </template>
        <h1>Arctic Monkeys</h1>
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
              <template>
                <b-breadcrumb :items="items"></b-breadcrumb>
              </template>
              <div class="px-3 py-2"></div>
            </b-sidebar>
          </div>
        </template>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style scoped>
h1 {
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 10px;
  font-family: "Roboto", sans-serif;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "/",
        },
        {
          text: "Formulario",
          href: "/#/Formulario",
        },
        {
          text: "Paginacion",
          href: "/#/Paginacion",
        },
        {
          text: "Library",
          active: true,
        },
      ],
    };
  },
};
</script>
