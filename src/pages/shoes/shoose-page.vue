<template>
  <section class="shoes--section">
    <div class="container common--style">
      <h2 class="page--title">{{ route.name }}</h2>
      <sort-comp />
      <common-categories />
      <div class="shoes--data">
        <div class="left--side">
          <category-comp :data="categoryList" />
          <size-comp :sizeData="sizeData" />
          <color-comp />
          <price-comp />
        </div>
        <div class="right--side">
          <div class="grid">
            <card-btn
              v-for="item in gridData"
              :key="item"
              :img_url="item.img"
              :text="item.text"
              :price="item.price"
            />
          </div>
        </div>
      </div>
      <pagination-comp />
    </div>
  </section>
</template>
<script setup>
import { useRoute } from "vue-router";
import CategoryComp from "@/components/category/CategoryComp.vue";
import SortComp from "@/components/sort/SortComp.vue";
import CommonCategories from "@/components/common-category/CommonCategories.vue";
import SizeComp from "@/components/size/SizeComp.vue";
import ColorComp from "@/components/color/ColorComp.vue";
import PriceComp from "@/components/price/PriceComp.vue";
import CardBtn from "@/components/add-card/CardBtn.vue";
import PaginationComp from "@/components/pagination/PaginationComp.vue";

const route = useRoute();
const categoryList = [
  {
    list: "All",
    id: 1,
  },
  {
    list: "Dresses",
    id: 2,
  },
  {
    list: "Denim",
    id: 3,
  },
  {
    list: "Jeans",
    id: 12,
  },
  {
    list: "Coat",
    id: 13,
  },
];
const sizeData = [
  { property: "XXS", id: "xxs" },
  { property: "XS", id: "xs" },
  { property: "S", id: "s" },
  { property: "M", id: "m" },
  { property: "L", id: "l" },
  { property: "XL", id: "xl" },
  { property: "23", id: "23" },
  { property: "24", id: "24" },
  { property: "25", id: "25" },
  { property: "26", id: "26" },
  { property: "27", id: "27" },
  { property: "28", id: "28" },
  { property: "29", id: "29" },
  { property: "30", id: "30" },
  { property: "31", id: "31" },
  { property: "32", id: "32" },
];
const gridData = [
  {
    img: "/src/assets/images/grid_img4.png",
    text: "Multicolored armless top",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img2.png",
    text: "Grey bee wrist-watch",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img3.png",
    text: "Mini skirt",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img1.png",
    text: "Red lightweight gown",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img5.png",
    text: "Blue botton-down gown",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img6.png",
    text: "Moon and star neckpiece",
    price: "10,000",
  },

  {
    img: "/src/assets/images/grid_img7.png",
    text: "Katy Perry Killer Queen EDP ",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img1.png",
    text: "Multicolored armless top",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img2.png",
    text: "Grey bee wrist-watch",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img3.png",
    text: "Mini skirt",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img4.png",
    text: "Red lightweight gown",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img5.png",
    text: "Blue botton-down gown",
    price: "10,000",
  },
];
</script>

<style scoped>
.shoes--section {
  overflow: hidden;
}
.shoes--data {
  display: flex;
  gap: 49px;
}
.left--side {
  width: 22%;
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
}
.right--side {
  width: 78%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 62px;
  grid-row-gap: 18px;
}
</style>
