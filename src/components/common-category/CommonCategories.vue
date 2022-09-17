<template>
  <div class="line--wrapp">
    <div class="line1"></div>
    <div class="line2"></div>
  </div>
</template>
<style scoped>
.line--wrapp {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1.6rem;
  margin-bottom: 1.8rem;
  gap: 49px;
}
.line1,
.line2 {
  height: 1px;
  background: rgba(0, 0, 0, 0.5);
}
.line1 {
  width: 22%;
}
.line2 {
  width: 78%;
  /* width: calc(100%-22%-49px) !important; */
}
</style>
