<template>
  <button class="base--btn">{{ props.content }}</button>
</template>
<script setup>
const props = defineProps({
  content: String,
});
</script>
<style scoped>
button {
  border-radius: 6px;
  background: var(--main-color);
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
}
@media screen and (min-width: 370px) and (max-width: 575.9px) {
  button {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 20px;
    padding: 1rem;
  }
}
@media screen and (min-width: 576px) and (max-width: 767.9px) {
  button {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 20px;
    padding: 1.2rem 0;
  }
}
</style>
