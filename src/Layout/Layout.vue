<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Header from "../components/common/HeaderComponent.vue";
import Sidebar from "../components/common/SidebarComponent.vue";
import Footer from "../components/common/FooterComponent.vue";
import ThemeSetter from "../components/common/ThemeSetter.vue";
import { RouterView } from "vue-router";

</script>
<template>
  <ThemeSetter></ThemeSetter>
  <Header></Header>
  <Sidebar></Sidebar>
  <div class="p-4 sm:ml-64">
    <div class="p-4 mt-14">
      </div>
        <RouterView></RouterView>
        <Footer></Footer>
    </div>
</template>