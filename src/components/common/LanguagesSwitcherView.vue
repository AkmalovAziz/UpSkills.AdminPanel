<script setup lang="ts">
  import IconEnglish from "../icons/languages/IconEnglish.vue";
  import IconRussia from "../icons/languages/IconRussia.vue";
  import IconUzbek from "../icons/languages/IconUzbek.vue";
  import { ref} from "vue";
  import {useI18n} from "vue-i18n";
  const t = useI18n();

  function changeLanguage(language:string){
    t.locale.value = language;
    localStorage.setItem("language", language);
  }

</script>
<template>
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
<div class="flex items-center md:order-2">
  <!--begin::Uzbek-->
  <button v-show="t.locale.value == 'uz'" type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
    <IconUzbek></IconUzbek>    
    {{ $t("uz") }}
      </button>
  <!--end::Uzbek-->

  <!--begin::English-->
  <button v-show="t.locale.value == 'eng'" type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
    <IconEnglish></IconEnglish>    
    {{ $t("eng") }}
      </button>
  <!--end::English-->

  <!--begin::Russian-->
  <button v-show="t.locale.value == 'ru'" type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
      <IconRussia></IconRussia>
      {{ $t("ru") }}
      </button>
  <!--end::Russian-->
      
      <!-- Dropdown -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
        <ul class="py-2 font-medium" role="none">
          <li>
            <button @click="changeLanguage('uz')" class="w-40 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div class="flex flex-wram mx-2">
                <IconUzbek></IconUzbek>    
                  {{ $t("uz") }}
              </div>
            </button>
          </li>
          <li>
            <button @click="changeLanguage('eng')" class="w-40 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div class="flex flex-wram mx-2">
                <IconEnglish></IconEnglish>    
                  {{ $t("eng") }}
              </div>
            </button>
          </li>
          <li>
            <button @click="changeLanguage('ru')" class="w-40 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div class="flex flex-wram mx-2">
                <IconRussia></IconRussia>    
                  {{ $t("ru") }}
              </div>
            </button>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
</div>
</div>
</template>
