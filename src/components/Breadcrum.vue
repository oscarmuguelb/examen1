<template>
    <div class="breadcrumb">
        <!-- Estructura del breadcrumb -->
        <router-link v-for="(crumb, index) in breadcrumbs" :key="index" :to="crumb.link">
            {{ crumb.label }}
        </router-link>
    </div>
</template>

<script>
export default {
    computed: {
        breadcrumbs() {
            return [
                { label: "Inicio", link: "/" },
            ];
        },
    },
};
</script>
