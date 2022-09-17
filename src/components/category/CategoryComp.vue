<template>
  <ul>
    <li v-for="item in props.data" :key="item">{{ item.list }}</li>
  </ul>
</template>
<script setup>
import { ref } from "vue";
const isActive = ref("");
const props = defineProps({
  data: Object,
});
</script>
<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
ul li {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 18px;
  cursor: pointer;
}
</style>
