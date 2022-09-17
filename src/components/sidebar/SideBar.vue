<template>
  <main>
    <div class="account--menu">
      <ul>
        <li><h3>ACCOUNT DASHBOARD</h3></li>
        <li>
          <router-link to="">
            <base-icon name="user_icon" />
            <span>Account Information</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <base-icon name="address_icon" />
            <span>Address Book</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
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
      <div><base-icon name="sign_out_icon" /> <span>SIGN OUT</span></div>
    </div>
  </main>
</template>
<script setup></script>
<style scoped>
.account--menu {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 3.2rem 0 6.4rem 0;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.account--menu ul {
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
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
</style>
