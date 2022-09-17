<template>
  <div class="pagination--wrap">
    <div class="pagination--inside">
      <v-pagination
        v-model="page"
        :pages="4"
        :range-size="1"
        active-color="#DCEDFF"
        @update:modelValue="updateHandler"
      />
      <div class="arrow--wrap">
        <a href="#">
          <base-icon name="up_arrow" class="pagination--arrow--up" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseIcon from "../../components/basic-icon/BaseIcon.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
</script>
<style scoped>
.pagination--wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 7rem;
  margin-bottom: 12.8rem;
}
.pagination--inside {
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
}

.arrow--wrap {
  border: 1px solid #000;
  border-radius: 5px;
}
.arrow--wrap a {
  padding: 2.1rem 2.2rem;
  display: block;
}
@media screen and (min-width: 370px) and (max-width: 575.9px) {
  .pagination--wrap {
    justify-content: flex-start;
    margin-bottom: 7rem;
  }
  .pagination--inside {
    width: 100%;
    justify-content: space-around;
  }
  .arrow--wrap a {
    padding: 0.8rem;
  }
}
@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .pagination--wrap {
    justify-content: flex-start;
    margin-bottom: 7rem;
  }
  .pagination--inside {
    width: 100%;
    justify-content: space-around;
  }
  .arrow--wrap a {
    padding: 1rem;
  }
}

@media screen and (min-width: 768px) and (max-width: 991.9px) {
  .pagination--wrap {
    justify-content: flex-start;
    margin-bottom: 8rem;
  }
  .pagination--inside {
    width: 100%;
    justify-content: space-around;
  }
  .arrow--wrap a {
    padding: 1.5rem;
  }
}
</style>
<style>
@media screen and (min-width: 370px) and (max-width: 575.9px) {
  .pagination--arrow--up svg {
    width: 14px;
  }
}
@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .pagination--arrow--up svg {
    width: 16px;
  }
}
</style>
