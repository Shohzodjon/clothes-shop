<template>
  <div class="price--component__wrap">
    <div class="price--search__wrapp">
      <input type="text" id="choose-price" v-model="currentPrice" />
      <label for="choose-price">
        <span>Clear</span>
        <base-icon name="clear_icon" />
      </label>
    </div>
    <!-- price  -->
    <ul class="price--list">
      <li v-for="price in prices" :key="price">
        <input type="checkbox" :id="`price__${price.id}`" />
        <label :for="`price__${price.id}`">{{ price.price }}</label>
      </li>
    </ul>
    <div class="apply--price">
      <div><span>₦</span> <input type="number" /></div>
      <span>to</span>
      <div><span>₦</span> <input type="number" /></div>
      <button>Apply</button>
    </div>
  </div>
</template>
<script setup>
import BaseIcon from "../basic-icon/BaseIcon.vue";
import { ref } from "vue";
const currentPrice = ref("PRICE");

const prices = [
  {
    price: "₦0 - ₦10,000",
    id: 1,
  },
  {
    price: "₦10,000 - ₦20,000",
    id: 2,
  },
  {
    price: "₦20,000 - ₦50,000",
    id: 3,
  },
  {
    price: "₦50,000 - ₦100,000",
    id: 4,
  },
  {
    price: "₦100,000 - ₦200,000",
    id: 5,
  },
];
</script>
<style scoped>
.price--component__wrap {
  padding-bottom: 1rem;
}
.price--search__wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.price--search__wrapp input {
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 2rem;
  line-height: 18px;
  width: 80%;
}
.price--search__wrapp label {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.price--search__wrapp label span {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
  color: #c4c4c4;
}
.price--list {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 32px;
}
.price--list li {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
}
.price--list li label {
  cursor: pointer;
}
.apply--price {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
  margin-top: 16px;
}
.apply--price > div {
  width: fit-content;
  height: 27px;
  border: 0.5px solid #000;
  display: flex;
  align-items: center;
}
.apply--price input {
  width: max-content;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 4px;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
  width: 30%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.apply--price button {
  padding: 5px 14px;
  background: #ed165f;
  color: #fff;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 12px;
}
</style>
