<template>
  <div>
    <div class="user--info">
      <h2>User Information</h2>
      <div class="user--form">
        <BasicInput
          label="First name"
          inputType="text"
          inputPlace="Enter your name"
          inputValue=""
          class="account--field"
        />
        <BasicInput
          label="Last name"
          inputType="text"
          inputPlace="Enter your name"
          inputValue=""
          class="account--field"
        />
        <BasicInput
          label="Email"
          inputType="email"
          inputPlace="Enter your email"
          inputValue=""
          class="account--field"
        />
        <BasicInput
          label="Day of birth"
          inputType="date"
          inputValue=""
          class="account--field"
        />
        <a href="#">Change password</a>
        <confirm-user
          confirmId="subscribe"
          confirmText="Newsletter subsciption"
        />
      </div>
    </div>
    <button-comp content="save changes" class="user--info--btn" />
  </div>
</template>
<script setup>
import BasicInput from "@/components/basic-input/BasicInput.vue";
import ButtonComp from "@/components/basic-btn/ButtonComp.vue";
import ConfirmUser from "@/components/confirm-user/ConfirmUser.vue";
</script>
<style scoped>
.user--info {
  width: 100%;
}
.user--form {
  background: #ffffff;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 2rem 0 4.6rem 6.4rem;
}
.account--field {
  margin-top: 3.2rem;
  width: 40%;
}
.account--field:nth-child(1) {
  margin-top: 0;
}
.user--info h2 {
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 18px;
  letter-spacing: 0.2px;
  margin-bottom: 3.2rem;
}
.user--info a {
  margin: 1.6rem 0;
  display: block;
}
.user--info--btn {
  margin-top: 44px;
}
</style>
