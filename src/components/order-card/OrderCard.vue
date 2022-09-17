<template>
  <div>
    <div>
      <img :src="props.imgUrl" alt="img" />
    </div>
    <ul>
      <li>
        <h4>{{ props.productName }}</h4>
      </li>
      <li>
        <p>{{ props.productSize }}</p>
      </li>
      <li>
        <p>{{ props.productPrice }}</p>
      </li>
      <li><slot /></li>
    </ul>
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  imgUrl: String,
  productName: String,
  productSize: String,
  productPrice: String,
});
</script>
