<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FlowbiteSetup from './views/FlowbiteSetup.vue';
import ThemeSetter from './components/common/ThemeSetter.vue';
</script>

<template>
    <FlowbiteSetup></FlowbiteSetup>
    <RouterView></RouterView>
    <ThemeSetter></ThemeSetter>
</template>

<style scoped>
</style>
