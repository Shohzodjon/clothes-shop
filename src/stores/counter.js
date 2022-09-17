import { defineStore } from "pinia";

export const useListStore = defineStore("count", {
  state: () => ({
    list: [],
  }),
  actions: {
    editList(id) {
      for (let i = 0; i <= this.list.length - 1; i++) {
        if (id === this.list[i].id) {
          this.list[i].edit = true;
        }
      }
      return this.list;
    },

    deleteList(id) {
      let newList = this.list.filter((item) => item.id !== id);
      return (this.list = newList);
    },
  },
});
