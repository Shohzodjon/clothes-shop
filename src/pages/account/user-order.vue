<template>
  <div>
    <h2>My Orders</h2>
    <div>
      <order-card />
      <payment-details />
      <deliver-method />
    </div>
  </div>
</template>
<script setup>
import OrderCard from "@/components/order-card/OrderCard.vue";
import PaymentDetails from "@/components/payment-details/PaymentDetails.vue";
import DeliverMethod from "@/components/deliver-method/DeliverMethod.vue";
</script>
