import { defineStore } from 'pinia'

export const storeGlobal = defineStore({
  id: 'global',
  // sub menu 連結跳轉
  state: () => ({
    menu: null,
  }),
  getters: {},
  actions: {
    setMenu(data) {
      this.menu = data
    }
  }
})
