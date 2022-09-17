<template>
  <div class="color--component__wrapp">
    <div class="color--search__wrapp">
      <input type="text" id="choose-color" v-model="colorName" />
      <label for="choose-color" @click="removeSelect">
        <span>Clear</span>
        <base-icon name="clear_icon" />
      </label>
    </div>
    <!-- color grid -->
    <div class="color--grid">
      <div class="grid--item" v-for="color in colors" :key="color">
        <div
          :style="`background:${color.property} `"
          :class="`item--child__${color.id}`"
          @click="chooseColor(color.id)"
        ></div>
        <p>{{ color.color_name }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseIcon from "../basic-icon/BaseIcon.vue";
import { ref } from "vue";
const isActive = ref(false);
const colorName = ref("COLOR");

function removeSelect() {
  colorName.value = "";
}
function chooseColor(id) {
  colors?.forEach((color) => {
    if (color.id === id) {
      colorName.value = color.color_name;
      document
        .querySelector(`.item--child__${color.id}`)
        .classList.add("active");
      isActive.value = true;
    } else {
      document
        .querySelector(`.item--child__${color.id}`)
        .classList.remove("active");
    }
  });
}

const colors = [
  {
    color_name: "Beige",
    property: "#F3ECDB",
    id: 1,
  },
  {
    color_name: "Blue",
    property: "#465BA3",
    id: 2,
  },
  {
    color_name: "Black",
    property: "#000",
    id: 3,
  },
  {
    color_name: "Orange",
    property: "#F07B4E",
    id: 4,
  },
  {
    color_name: "Green",
    property: "#41854D",
    id: 5,
  },
  {
    color_name: "Brown",
    property: "#665147",
    id: 6,
  },
  {
    color_name: "Purple",
    property: "#893D88",
    id: 7,
  },
  {
    color_name: "Gold",
    property:
      " linear-gradient(180deg, #F3B121 0%, rgba(255, 203, 90, 0.567708) 53.65%, #FFC954 100%)",
    id: 8,
  },
  {
    color_name: "Taupe",
    property: "#CAC1B8",
    id: 9,
  },
  {
    color_name: "White",
    property: "#fff",
    id: 10,
  },
  {
    color_name: "Pink",
    property: "#F2A1B1",
    id: 11,
  },
  {
    color_name: "Red",
    property: "#D23C47",
    id: 12,
  },
];
</script>
<style scoped>
.color--search__wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.color--search__wrapp input {
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 2rem;
  line-height: 18px;
  width: 80%;
}
.color--search__wrapp label {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  cursor: pointer;
}
.color--search__wrapp label span {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
  color: #c4c4c4;
}
.color--grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.6rem;
  row-gap: 2.8rem;
  margin-top: 3.2rem;
}
.grid--item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
}
.grid--item div {
  width: 32px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.grid--item p {
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
}
</style>
