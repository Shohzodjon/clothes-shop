<template>
  <div>
    <ul>
      <li><h4>Payment details</h4></li>
      <li>
        <p>Item’s total - ₦ {{ props.price }}</p>
      </li>
      <li>
        <p>Delivery fee - ₦ {{ props.delivery_fee }}</p>
      </li>
      <li>
        <p>TOTAL - ₦ {{ props.total_price }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  price: String | Number,
  delivery_fee: String,
  total_price: String | Number,
});
</script>
