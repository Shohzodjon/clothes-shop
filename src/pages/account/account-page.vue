<template>
  <section class="account--section">
    <div class="container">
      <main class="account--flex">
        <div class="left--side">
          <div class="account--menu">
            <ul>
              <li><h3>ACCOUNT DASHBOARD</h3></li>
              <li>
                <router-link :to="{ name: 'UserInfo' }">
                  <base-icon name="user_icon" />
                  <span>Account Information</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'UserAddress' }">
                  <base-icon name="address_icon" />
                  <span>Address Book</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'UserOrder' }">
                  <base-icon name="gift_icon" />
                  <span>My Orders</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <base-icon name="heart_full_icon" />
                  <span>My Favorites</span>
                </router-link>
              </li>
            </ul>
            <div class="sign--out">
              <base-icon name="sign_out_icon" /> <span>SIGN OUT</span>
            </div>
          </div>
        </div>
        <div class="right--side">
          <router-view />
        </div>
      </main>
    </div>
  </section>
</template>
<script setup>
import BaseIcon from "@/components/basic-icon/BaseIcon.vue";
import ButtonComp from "@/components/basic-btn/ButtonComp.vue";
</script>
<style scoped>
.account--section {
  background: #fff;
  padding: 6.4rem 0;
}
.account--flex {
  display: flex;
  gap: 3.2rem;
}
.left--side {
  width: 25%;
}
.right--side {
  width: 75%;
  padding-top: 3.2rem;
}
.account--menu {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 3.2rem 0 6.4rem 0;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.account--menu ul {
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
}
.account--menu h3 {
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 18px;
  letter-spacing: 0.2px;
}
.account--menu ul li a {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  padding-left: 3.2rem;
}
.account--menu ul li span {
  height: max-content;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
  letter-spacing: 0.2px;
}
.sign--out {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  justify-content: center;
}
.sign--out span {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: var(--main-color);
}
</style>
