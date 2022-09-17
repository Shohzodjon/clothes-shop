<template>
  <div>
    <label for="">{{ props.label }}</label>
    <input
      :type="props.inputType"
      :placeholder="props.inputPlace"
      v-model="props.inputValue"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  label: String,
  inputType: String,
  inputPlace: String,
  inputValue: String,
});
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
label {
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
}
input {
  border: 1px solid #000000;
  border-radius: 6px;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
  padding: 1rem;
  outline: none;
  transition: 0.2s linear all;
}
input:focus {
  border-color: #00a795;
}
@media screen and (min-width: 370px) and (max-width: 575.9px) {
  div {
    gap: 10px;
  }
  label {
    font-size: 1.3rem;
  }
  input {
    font-size: 1.3rem;
    line-height: 18px;
    padding: 1rem;
  }
}
@media screen and (min-width: 576px) and (max-width: 767.9px) {
  div {
    gap: 14px;
  }
  label {
    font-size: 1.4rem;
  }
  input {
    font-size: 1.4rem;
    padding: 1rem;
  }
}
</style>
