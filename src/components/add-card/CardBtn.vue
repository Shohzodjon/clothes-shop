<template>
  <div class="store--card">
    <div class="card--img">
      <img :src="props.img_url" alt="img" />
    </div>
    <div class="card--info">
      <h5>{{ props.text }}</h5>
      <p>₦ {{ props.price }}</p>
    </div>
    <!--  card btn -->
    <div class="card--overlay">
      <div class="overlay--inside">
        <div class="card--heart--icon">
          <base-icon name="heart_empty_icon" />
        </div>
        <button>
          <span>ADD TO CARD</span>
          <base-icon name="backet_icon" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseIcon from "../basic-icon/BaseIcon.vue";

const props = defineProps({
  img_url: String,
  text: String,
  price: Number,
});
</script>
<style scoped>
.store--card {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 1rem 0.5rem;
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 6px;
}
.store--card:hover {
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.25);
}
.card--img {
  height: 400px;
  max-height: 454px;
  box-sizing: border-box;
}
.card--img > img {
  height: 100%;
}
.card--info {
  margin-top: 3.2rem;
}
.store--card h5 {
  font-weight: 400;
  font-size: 2rem;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.2px;
  margin-bottom: 1.6rem;
}
.store--card p {
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 23px;
}
.card--overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.025);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s linear;
  opacity: 0;
}
.store--card:hover .card--overlay {
  height: 100%;
  opacity: 1;
}
.overlay--inside {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.3rem;
}
.card--heart--icon {
  background: #fff;
  width: max-content;
  height: max-content;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
}
.overlay--inside button {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 2px;
  border: none;
  padding: 1.2rem 1.8rem;
  gap: 1.5rem;
  cursor: pointer;
}
.overlay--inside button span {
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4rem;
  text-align: center;
  letter-spacing: 0.2px;
}

@media screen and (min-width: 370px) and (max-width: 575.9px) {
  .store--card {
    width: 90%;
    margin: 0 auto;
  }
  .card--img {
    height: 250px;
    width: 90%;
    margin: 0 auto;
  }
  .card--info {
    margin-top: 3rem;
  }
  .store--card h5 {
    font-size: 1.8rem;
    line-height: 12px;
    margin-bottom: 1.4rem;
  }
  .store--card p {
    font-size: 1.8rem;
    line-height: 20px;
  }
}

@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .store--card {
    width: 100%;
  }
  .card--img {
    height: 280px;
    width: 90%;
    margin: 0 auto;
  }
  .card--info {
    margin-top: 3rem;
  }
  .store--card h5 {
    font-size: 1.8rem;
    line-height: 12px;
    margin-bottom: 1.4rem;
  }
  .store--card p {
    font-size: 1.8rem;
    line-height: 20px;
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 991.9px) {
  .store--card {
    width: 100%;
  }
  .card--img {
    height: 300px;
    width: 90%;
    margin: 0 auto;
  }
  .card--img > img {
    width: 90%;
  }
  .card--info {
    margin-top: 3rem;
  }
  .store--card h5 {
    font-size: 1.8rem;
    line-height: 12px;
    margin-bottom: 1.4rem;
  }
  .store--card p {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 992px) and (max-width: 1099.9px) {
  .card--img {
    height: 300px;
    width: 90%;
    margin: 0 auto;
  }

  .card--info {
    margin-top: 3rem;
  }
}
@media screen and (min-width: 1100px) and (max-width: 1199.9px) {
  .card--img {
    height: 300px;
    width: 90%;
    margin: 0 auto;
  }

  .card--info {
    margin-top: 3rem;
  }
  .store--card h5 {
    font-size: 1.8rem;
    line-height: 12px;
    margin-bottom: 1.4rem;
  }
  .store--card p {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
}
</style>
<style></style>
