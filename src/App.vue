<template>
  <div id="app">
    <div>
      <Layout />
    </div>

    <div class="app-container">
      <header></header>
      <main>
        <div class="row mt-1">
          <div >
            <router-view> </router-view>
          </div>

        </div>
      </main>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import Layout from "./components/Layout.vue";
</script>

<style scoped></style>
