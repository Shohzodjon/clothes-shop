<template>
  <section class="sign--page">
    <div class="sign--wrapp">
      <h2>Hello there!</h2>
      <p class="sign--text">Please sign in or create account to continue</p>
      <div class="btn--wrapp">
        <button-comp
          content="SIGN IN"
          @click="warming"
          class="btn"
          :class="[isAccount ? '' : 'sign--btn--unactive']"
        />
        <button-comp
          content="CREATE ACCOUNT"
          @click="warming"
          class="btn"
          :class="[isAccount ? 'sign--btn--active' : '']"
        />
      </div>
      <form
        :class="[isAccount ? 'sign--active--page' : 'sign--unactive--page']"
      >
        <BasicInput
          label="First name"
          inputType="text"
          inputPlace="Enter your name"
          inputValue=""
          class="sign--field"
        />
        <BasicInput
          label="Last name"
          inputType="text"
          inputPlace="Enter your last name"
          inputValue=""
          class="sign--field"
        />
        <BasicInput
          label="Email"
          inputType="email"
          inputPlace="Enter your email"
          inputValue="example@gmail.com"
          class="sign--field"
        />
        <BasicInput
          label="Creatre password"
          inputType="password"
          inputPlace="Enter your password"
          inputValue=""
          class="sign--field"
        />
        <BasicInput
          label="Confirm Password"
          inputType="password"
          inputPlace="Confirm password"
          inputValue=""
          class="sign--field"
        />
        <confirm-user
          confirmId="remember1"
          confirmText="I want to receive Safari newsletters with the best deals and offers"
        />
        <button-comp content="CREATE ACCOUNT" class="sign--btn" />
      </form>
      <form
        class="left"
        :class="[isAccount2 ? 'sign--active--page' : 'sign--unactive--page']"
      >
        <BasicInput
          label="Email"
          inputType="email"
          inputPlace="Enter your email"
          inputValue="example@gmail.com"
        />
        <BasicInput
          label="Password"
          inputType="password"
          inputPlace="Enter your password"
          inputValue=""
          style="margin-top: 32px"
        />
        <confirm-user confirmId="remember" confirmText="Remeber my details" />
        <button-comp content="sign in" class="sign--btn" @click="show" />
        <a href="#" class="forget--password">Forgot password?</a>
      </form>
      <!-- sign in -->

      <!-- create account -->
    </div>
  </section>
</template>
<script setup>
import BasicInput from "@/components/basic-input/BasicInput.vue";
import ButtonComp from "@/components/basic-btn/ButtonComp.vue";
import ConfirmUser from "@/components/confirm-user/ConfirmUser.vue";
import { ref } from "vue";

const userEmail = ref("wwwww");
const isAccount = ref(true);
const isAccount2 = ref(false);
function warming() {
  isAccount.value = !isAccount.value;
  if (!isAccount.value) {
    isAccount2.value = !isAccount2.value;
  } else {
    isAccount2.value = !isAccount2.value;
  }
}
function show() {
  alert("Hi");
}
</script>
<style scoped>
.sign--page {
  padding-top: 6.4rem;
}
.sign--wrapp {
  width: 45%;
  margin: 0 auto;
}
.sign--wrapp h2 {
  font-weight: 600;
  font-size: 3rem;
  line-height: 18px;
  letter-spacing: 0.2px;
  margin-bottom: 1.6rem;
}
.sign--text {
  font-weight: 400;
  font-size: 2rem;
  line-height: 18px;
  letter-spacing: 0.2px;
  margin-bottom: 6rem;
}
.btn--wrapp {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.btn {
  background: none;
  border: 1px solid var(--main-color);
  padding: 1.2rem 0;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  font-size: 2rem;
  line-height: 18px;
  letter-spacing: 0.2px;
}
.left {
  padding: 32px 0 1.6rem 0;
}
.sign--btn {
  margin: 3.5rem 0 3.5rem 0;
}
.forget--password {
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-decoration-line: underline;
}
.sign--field {
  margin-top: 32px;
}
.sign--btn--active {
  transition: 0.3s linear all;
  background: var(--main-color);
  color: #fff;
}
.sign--btn--unactive {
  transition: 0.3s linear all;
  background: var(--main-color);
  color: #fff;
}
.sign--active--page {
  transition: all linear 0.3s;
  opacity: 1;
  display: block;
}
.sign--unactive--page {
  opacity: 0;
  display: none;
}

@media screen and (min-width: 370px) and (max-width: 575.9px) {
  .sign--page {
    padding-top: 6rem;
  }
  .sign--wrapp {
    width: 90%;
    margin: 0 auto;
  }
  .btn--wrapp {
    flex-direction: column;
    gap: 2rem;
  }
  .btn {
    padding: 1rem;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 18px;
    letter-spacing: 0.2px;
  }
  .sign--wrapp h2 {
    font-weight: 600;
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
  }
  .sign--text {
    font-size: 1.7rem;
    margin-bottom: 4.5rem;
  }
  .sign--field {
    margin-top: 24px;
  }
}
@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .sign--page {
    padding-top: 6.4rem;
  }
  .sign--wrapp {
    width: 70%;
    margin: 0 auto;
  }
  .btn--wrapp {
    flex-direction: column;
    gap: 2rem;
  }
  .btn {
    padding: 1.2rem 0;
    font-size: 1.8rem;
    line-height: 18px;
  }
  .sign--wrapp h2 {
    font-weight: 600;
    font-size: 2.6rem;
    margin-bottom: 1.6rem;
  }
  .sign--text {
    font-size: 1.7rem;
    margin-bottom: 4.5rem;
  }
  .sign--field {
    margin-top: 28px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991.9px) {
  .sign--page {
    padding-top: 6.4rem;
  }
  .sign--wrapp {
    width: 60%;
    margin: 0 auto;
  }
  .btn--wrapp {
    flex-direction: row;
    gap: 2rem;
  }
  .btn {
    padding: 1.2rem 0;
    font-size: 1.8rem;
    line-height: 18px;
  }
  .sign--wrapp h2 {
    font-weight: 600;
    font-size: 2.6rem;
    margin-bottom: 1.6rem;
  }
  .sign--text {
    font-size: 1.7rem;
    margin-bottom: 4.5rem;
  }
  .sign--field {
    margin-top: 28px;
  }
}
</style>
