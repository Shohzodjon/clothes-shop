<template>
  <div class="drop--down">
    <h3>CATEGORY</h3>
    <div class="drop--down__inside" :class="[show ? 'no--border' : '']">
      <div class="drop--down__inside2" @click="toggle">
        <span>Sort by:</span
        ><input type="text" id="sort" readonly v-model="selectValue" />
        <label for="sort" style="cursor: pointer">
          <base-icon name="select_icon" @click="toggle" />
        </label>
      </div>
      <ul class="sort--list" :class="[show ? 'active' : '']">
        <li
          v-for="list in lists"
          :key="list.id"
          @click="changeValue(list.id)"
          :class="`sort--list_${list.id}`"
        >
          <span>{{ list.list_price }}</span> {{ list.list_property }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import BaseIcon from "../basic-icon/BaseIcon.vue";
import { ref } from "vue";
const lists = [
  {
    list_property: "Most popular",
    list_price: "",
    id: 1,
  },
  {
    list_property: "Best Selling",
    id: 2,
    list_price: "",
  },
  {
    list_property: " High to Low",
    id: 3,
    list_price: "Price:",
  },
  {
    list_property: " Low to High",
    id: 4,
    list_price: "Price:",
  },
];

const show = ref(false);

const selectValue = ref("");

function toggle() {
  show.value = !show.value;
}

function changeValue(id) {
  lists.forEach((item) => {
    if (id === item.id) {
      selectValue.value = item.list_property;
      toggle();
      document.querySelector(`.sort--list_${id}`).classList.add("active--list");
    } else {
      document
        .querySelector(`.sort--list_${item.id}`)
        .classList.remove("active--list");
    }
  });
}
</script>
<style scoped>
.drop--down {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
}
.drop--down__inside {
  width: 195px;
  border: 1px solid #000;
  position: relative;
  height: 38px;
}
.no--border {
  height: 38px;
  border-bottom: none;
}
.drop--down h3 {
  font-weight: 600;
  font-size: 2rem;
  line-height: 18px;
}
.drop--down__inside2 {
  display: flex;
  position: relative;
  padding: 9px 16px;
  box-sizing: border-box;
  align-items: center;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
  cursor: pointer !important;
}
.drop--down__inside2::after {
  content: "";
  display: block;
  width: 98%;
  height: 1px;
  background: rgba(0, 0, 0, 0.25);
  bottom: -0.1px;
  left: 1%;
  position: absolute;
}
.drop--down__inside input {
  border: none;
  outline: none;
  padding-left: 4px;
  width: 55%;
  margin-right: 8px;
  background: none;
  cursor: pointer;
}

.sort--list {
  position: absolute;
  width: 100%;
  display: block;
  border: 1px solid #000;
  left: 0;
  z-index: 3;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  transition: 0.3s all linear;
  overflow: hidden;
}

.active {
  position: absolute;
  width: 100%;
  display: block;
  border: 1px solid #000;
  left: 0;
  z-index: 3;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: 0.3s all linear;
}
/* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); */
.sort--list li {
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  cursor: pointer;
  color: #000000;
  padding: 10px 25px;
}

.active--list {
  background: #ed165f !important;
  color: #fff !important;
}
.active--list span {
  color: #fff !important;
}
</style>
