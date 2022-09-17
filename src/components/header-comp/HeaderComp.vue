<template>
  <header class="header" :class="[route.path !== '/' ? 'other--page' : '']">
    <div class="box">
      <nav class="navbar">
        <ul class="link--wrapp">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/clothes">Clothes</router-link></li>
          <li><router-link to="/shoes">Shoes</router-link></li>
          <li><router-link to="/accessory">Accessories</router-link></li>
        </ul>
        <div class="header--menu" @click="show">
          <base-icon name="menu_icon" />
        </div>
        <router-link to="/">
          <base-icon name="logo" class="header--logo" />
        </router-link>
        <div class="flex flex--wrapp">
          <div class="flex flex--search">
            <input
              type="text"
              id="search"
              placeholder="Search ..."
              autocomplete="off"
            />
            <label for="search">
              <base-icon name="search_icon" class="header--icon" />
            </label>
          </div>
          <ul class="flex flex--icon">
            <li>
              <router-link to="/account/user-info"
                ><base-icon name="user_icon" class="header--icon" />
                user
              </router-link>
            </li>
            <li>
              <base-icon name="store_icon" class="header--icon" />
            </li>
            <li>
              <base-icon name="heart_full_icon" class="header--icon" />
            </li>
          </ul>
        </div>
      </nav>
      <respons-nav :class="[isShow ? 'active--nav' : 'unactive']" />
    </div>
  </header>
</template>

<script setup>
import BaseIcon from "../basic-icon/BaseIcon.vue";
import ResponsNav from "./ResponsNav.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();

const isShow = ref(false);

function show() {
  isShow.value = !isShow.value;
}
</script>
<style scoped>
.header {
  background-color: #fff;
  width: 100%;
  overflow: hidden;
}
.other--page {
  background: #f5f5f5;
}
.active--nav {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.unactive {
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
}
.box {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
.link--wrapp {
  display: flex;
  gap: 5.5rem;
}
.link--wrapp li {
  position: relative;
  cursor: pointer;
  transition: all linear 0.3s;
  padding: 0 0.6rem 0.4rem;
}
.link--wrapp li::after {
  content: "";
  width: 0;
  height: 1px;
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #ed165f;
  transition: width 0.3s linear;
}
.link--wrapp li:hover::after {
  width: 100%;
}
.link--wrapp li a {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 18px;
  letter-spacing: 0.2px;
}
.link--wrapp li:hover a {
  color: #ed165f;
}
.header--menu {
  display: none;
}
.flex--wrapp {
  gap: 4rem;
}
.header--logo {
  cursor: pointer;
}
.flex--search {
  gap: 2.2rem;
}
.flex--search input {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 18px;
  letter-spacing: 0.2px;
  padding: 0.5rem;
  background: none;
}
.flex--search input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}
.flex--search label {
  transition: all 0.3s linear;
  cursor: pointer;
}

.flex--icon {
  gap: 3rem;
}
.flex--icon li {
  cursor: pointer;
}

@media screen and (min-width: 370px) and (max-width: 575.9px) {
  .navbar {
    padding: 15px;
  }
  .link--wrapp {
    display: none;
  }
  .header--menu {
    display: block;
  }
  .flex--wrapp {
    display: none;
  }
}
@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .navbar {
    padding: 15px;
  }
  .link--wrapp {
    display: none;
  }
  .header--menu {
    display: block;
  }
  .flex--wrapp {
    display: block;
  }
  .flex--icon {
    display: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023.9px) {
  .navbar {
    padding: 15px;
  }
  .link--wrapp {
    display: none;
  }
  .header--menu {
    display: block;
  }
  .flex--wrapp {
    display: flex;
    gap: 0;
    justify-content: space-around;
  }
  .flex--icon {
    gap: 1.5rem;
  }
  .flex--search {
    gap: 1.2rem;
  }
  .flex--search input {
    width: 65%;
  }
  .flex--wrapp {
    width: 33%;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .navbar {
    padding: 15px;
  }
}
</style>
<style>
.router-link-active {
  color: var(--main-color);
}
.router-link-active .header--icon svg {
  fill: #ed165f !important;
}
.header--icon svg {
  width: 17px;
  transition: all linear 0.3s;
}
.flex--search label:hover .header--icon svg path {
  fill: #ed165f;
}
.flex--icon li:hover .header--icon svg path {
  fill: #ed165f;
}
@media screen and (min-width: 370px) and (max-width: 575.9px) {
  .header--logo svg {
    width: 50px;
  }
}
</style>
