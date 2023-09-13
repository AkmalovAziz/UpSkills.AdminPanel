<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FlowbiteSetup from './views/FlowbiteSetup.vue';
import ThemeSetter from './components/common/ThemeSetter.vue';
</script>

<template>
    <RouterView></RouterView>
    <ThemeSetter></ThemeSetter>
    <FlowbiteSetup></FlowbiteSetup>
</template>

<style scoped>
</style>
