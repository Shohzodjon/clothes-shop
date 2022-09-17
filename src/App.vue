<template>
  <section>
    <HeaderComp :class="[route.path === '/' ? 'hidden' : 'active']" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterComp />
  </section>
</template>
<script setup>
import HeaderComp from "@/components/header-comp/HeaderComp.vue";
import FooterComp from "@/components/footer/FooterComp.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<style scoped>
.hidden {
  display: none;
}
.active {
  display: block;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  transform: translateX(0);
}
</style>
