<template>
  <HeaderComp />
  <slot />
  <FooterComp />
</template>
<script setup>
import HeaderComp from "@/components/header-comp/HeaderComp.vue";
import FooterComp from "@/components/footer/FooterComp.vue";
</script>
