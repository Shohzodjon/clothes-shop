<template>
  <div>
    <div class="size--search__wrapp">
      <input type="text" id="size-search" v-model="search" />
      <label for="size-search" @click="removeSelect(search)">
        <span>Clear</span>
        <base-icon name="clear_icon" class="search--icon" />
      </label>
    </div>

    <div class="size--grid">
      <div
        class="size--item"
        v-for="size in props.sizeData"
        :key="size.id"
        @click="chooseSize(size.id)"
      >
        <div :class="`item--child__${size.id}`" class="item">
          {{ size.property }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseIcon from "../basic-icon/BaseIcon.vue";
import { ref } from "vue";
const search = ref("SIZE");
const isActive = ref(false);
const props = defineProps({
  sizeData: Object,
});

function removeSelect(currentVal) {
  props.sizeData.forEach((size) => {
    if (size.property === currentVal) {
      document
        .querySelector(`.item--child__${size.id}`)
        .classList.remove("active");
      search.value = "";
    } else {
      search.value = "";
      return;
    }
  });
}

function chooseSize(id) {
  props.sizeData?.forEach((size) => {
    if (size.id === id) {
      search.value = size.property;
      document
        .querySelector(`.item--child__${size.id}`)
        .classList.add("active");
      isActive.value = true;
    } else {
      document
        .querySelector(`.item--child__${size.id}`)
        .classList.remove("active");
    }
  });
}
</script>
<style scoped>
.size--search__wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.size--search__wrapp input {
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 2rem;
  line-height: 18px;
  padding: 0;
  width: 50%;
}
.size--search__wrapp label {
  display: flex;
  align-items: center !important;
  column-gap: 1.6rem;
  height: 100%;
  cursor: pointer;
}
.size--search__wrapp label span {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
  color: #c4c4c4;
}
.search--icon {
  margin-top: 1px;
}
.active {
  background: #ed165f;
  color: #fff;
}
.size--grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  gap: 1.6rem;
}
.size--item {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
}
.size--item div {
  padding: 0.7rem 1.3rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  max-width: 54px;
  max-height: 32px;
  text-align: center;
  cursor: pointer;
}
</style>
