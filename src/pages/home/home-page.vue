<template>
  <header>
    <div class="swiper--wrapp">
      <header-comp />
      <div class="container">
        <swiper>
          <swiper-slide v-for="item in 4" :key="item" :autoplay="true">
            <div class="slider--content">
              <img
                src="/src/assets/images/slider_img.png"
                alt="slider_img"
                class="slider--img"
              />
            </div>
          </swiper-slide>
        </swiper>
        <div class="collection--wrapp">
          <p>Explore our collection</p>
          <a href="#">
            <base-icon name="arrow_down" class="header--arrow__down" />
          </a>
        </div>
      </div>
    </div>
    <div>
      <h2 class="header--title">Shop your style</h2>
      <div class="container">
        <p class="header--desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          ipsa eum iste quia sapiente officia libero in voluptatem unde,
          laboriosam, dolore veritatis ratione necessitatibus odio consectetur
          quisquam dolores rerum porro?
        </p>
        <!-- begin grid -->
        <div class="header--grid">
          <card-btn
            v-for="item in gridData"
            :key="item"
            :img_url="item.img"
            :text="item.text"
            :price="item.price"
          />
        </div>
        <!-- end of grid -->
        <pagination-comp />
      </div>
    </div>
  </header>
</template>
<script setup>
import CardBtn from "@/components/add-card/CardBtn.vue";
import HeaderComp from "@/components/header-comp/HeaderComp.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css";
import BaseIcon from "../../components/basic-icon/BaseIcon.vue";
import PaginationComp from "@/components/pagination/PaginationComp.vue";
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
    img: "/src/assets/images/grid_img5.png",
    text: "Blue botton-down gown",
    price: "10,000",
  },
  {
    img: "/src/assets/images/grid_img6.png",
    text: "Moon and star neckpiece",
    price: "10,000",
  },
];
</script>
<style scoped>
.swiper--wrapp {
  width: 100%;
  background: var(--main-color);
  padding: 3.9rem 0 3.7rem;
}
.slider--content {
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/src/assets/images/Logo.png");
  background-repeat: no-repeat;
  background-size: 65% 70%;
  background-position: center;
}
.slider--img {
  width: 50%;
  display: block;
  margin: 0 auto;
  transform: scale(0.8);
}
.collection--wrapp {
  margin-top: 6.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.collection--wrapp > p {
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
}

.header--grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 4rem;
  grid-column-gap: 2.3rem;
  margin-top: 6.98rem;
}
.header--title {
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 24px;
  text-align: center;
  margin-top: 6.4rem;
  position: relative;
  margin-bottom: 3.2rem;
}
.header--title::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  width: 30%;
  height: 1px;
  background: #000;
}
.header--title::after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  width: 30%;
  height: 1px;
  background: #000;
}
.header--desc {
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 35px;
  text-align: center;
  color: #000000;
  width: 80%;
  margin: 0 auto;
}

@media screen and (min-width: 370px) and (max-width: 575.9px) {
  .slider--content {
    width: 100%;
    height: 340px;
    background-size: 70% 60%;
  }
  .slider--img {
    width: 300px;
    margin: 0 auto;
    transform: scale(0.8);
  }
  .collection--wrapp {
    margin-top: 5rem;
  }
  .collection--wrapp > p {
    font-size: 2rem;
  }
  .header--title {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 20px;
  }
  .header--title::after,
  .header--title::before {
    display: none;
  }
  .header--desc {
    font-size: 1.8rem;
    line-height: 28px;
  }

  .header--grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(16, 1fr);
    grid-row-gap: 4rem;
    margin-top: 6rem;
    padding: 0 2rem;
  }
}

@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .slider--content {
    width: 100%;
    height: 400px;
    background-size: 60% 55%;
  }
  .slider--img {
    width: 350px;
    margin: 0 auto;
  }
  .collection--wrapp {
    margin-top: 5rem;
  }
  .collection--wrapp > p {
    font-size: 2.3rem;
  }
  .header--title {
    font-weight: 600;
    font-size: 3rem;
    line-height: 22px;
    /* 24px */
  }
  .header--title::after,
  .header--title::before {
    width: 28%;
  }
  .header--desc {
    font-size: 1.9rem;
    line-height: 30px;
    /* 2.4rem 35px  */
  }

  .header--grid {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
    margin-top: 6rem;
    padding: 0 2rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 991.9px) {
  .slider--content {
    width: 100%;
    height: 500px;
    background-size: 70% 60%;
  }
  .slider--img {
    width: 430px;
    margin: 0 auto;
  }
  .collection--wrapp {
    margin-top: 5rem;
  }
  .collection--wrapp > p {
    font-size: 2.5rem;
  }
  .header--title {
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 24px;
    /* 24px */
  }
  .header--title::after,
  .header--title::before {
    width: 30%;
  }
  .header--desc {
    font-size: 2rem;
    line-height: 32px;
    /* 2.4rem 35px  */
  }

  .header--grid {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;
    width: 98%;
    margin: 6rem auto 0;
  }
}
@media screen and (min-width: 992px) and (max-width: 1099.9px) {
  .slider--content {
    width: 100%;
    height: 600px;
    background-size: 60% 50%;
  }
  .slider--img {
    width: 500px;
    margin: 0 auto;
  }
  .collection--wrapp {
    margin-top: 5rem;
    gap: 2rem;
  }
  .collection--wrapp > p {
    font-size: 3rem;
  }
  .header--title {
    font-weight: 600;
    font-size: 4rem;
    line-height: 24px;
    /* 24px */
  }
  .header--title::after,
  .header--title::before {
    width: 30%;
  }
  .header--desc {
    font-size: 2.4rem;
    line-height: 35px;
    /* 2.4rem 35px  */
  }

  .header--grid {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;
    width: 95%;
    margin: 6rem auto 0;
  }
}
@media screen and (min-width: 1100px) and (max-width: 1199.9px) {
  .slider--content {
    width: 100%;
    height: 600px;
    background-size: 60% 50%;
  }
  .slider--img {
    width: 500px;
    margin: 0 auto;
  }
  .collection--wrapp {
    margin-top: 5rem;
    gap: 2rem;
  }
  .collection--wrapp > p {
    font-size: 3rem;
  }
  .header--title {
    font-weight: 600;
    font-size: 4rem;
    line-height: 24px;
    /* 24px */
  }
  .header--title::after,
  .header--title::before {
    width: 30%;
  }
  .header--desc {
    font-size: 2.4rem;
    line-height: 35px;
    /* 2.4rem 35px  */
  }

  .header--grid {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 3rem;
    width: 98%;
    margin: 6rem auto 0;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1299.9px) {
  .header--grid {
    width: 98%;
    margin: 6rem auto 0;
    grid-row-gap: 4rem;
  }
}
</style>
<style>
.header--arrow__down svg {
  width: 22px;
}
@media screen and (min-width: 370px) and (max-width: 575.9px) {
  .header--arrow__down svg {
    width: 18px;
  }
}
</style>
