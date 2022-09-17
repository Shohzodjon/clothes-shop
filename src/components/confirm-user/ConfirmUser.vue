<template>
  <div>
    <label class="user--confirm" :for="props.confirmId"
      >{{ props.confirmText }}
      <input type="checkbox" :id="props.confirmId" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>
<script setup>
const props = defineProps({
  confirmId: String,
  confirmText: String,
});
</script>
<style scoped>
div {
  display: flex;
  align-items: center;
  margin-top: 2rem;
}
.user--confirm {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
  letter-spacing: 0.2px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.user--confirm input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0%;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  transition: 0.3s linear all;
  border: 0.5px solid var(--main-color);
}

/* .user--confirm:hover input ~ .checkmark {
  background-color: rgba(220, 20, 60, 0.267);
} */

.user--confirm input:checked ~ .checkmark {
  background-color: var(--main-color);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.user--confirm input:checked ~ .checkmark:after {
  display: block;
}
.user--confirm .checkmark:after {
  left: 6px;
  top: 3px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
