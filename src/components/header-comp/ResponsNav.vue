<template>
  <nav>
    <ul class="link--wrapp">
      <li><a href="#">Home</a></li>
      <li><a href="#">Clothes</a></li>
      <li><a href="#">Shoes</a></li>
      <li><a href="#">Accessories</a></li>
    </ul>
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
          <base-icon name="user_icon" class="header--icon" />
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
</template>
<script setup>
import BaseIcon from "../basic-icon/BaseIcon.vue";
</script>

<style scoped>
nav {
  position: fixed;
  left: 0;
  transition: all 0.3s linear;
  top: 0%;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0);
  z-index: 2;
  display: block;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}
.link--wrapp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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
  font-size: 2.7rem;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #fff;
}
.link--wrapp li:hover a {
  color: #ed165f;
}

.flex--wrapp {
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
}
.header--logo {
  cursor: pointer;
}
.flex--search {
  gap: 2rem;
  background: #fff;
  padding: 0.3rem 0.9rem;
  border-radius: 4px;
}
.flex--search input {
  border: none;
  outline: none;
  background: none;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 18px;
  letter-spacing: 0.2px;
  padding: 0.5rem;
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
@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .flex--search {
    display: none;
  }
  .flex--wrapp {
    margin-top: 1rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .flex--wrapp {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  nav {
    display: none;
  }
}
</style>
<style>
.flex--icon .header--icon svg {
  fill: #fff;
}
</style>
