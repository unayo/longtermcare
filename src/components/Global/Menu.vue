<script>
import { ref, reactive } from 'vue'


export default {
  setup() {

    const menu = reactive([
      {
        mainTitle: '首頁',
        link: '#home',
      },
      {
        mainTitle: '照顧現場',
        link: '#care',
      },
      {
        mainTitle: '一看就懂長照2.0',
        link: '#long',
      },
      {
        mainTitle: '長照地圖',
        link: '#map',
      }
    ])

    const drawer = ref(false)
    const ckDrawer = () => {
      drawer.value = true
    }

    return { menu, drawer, ckDrawer }
  }
}
</script>

<template>
  <div class="sticky z-50  top-0 left-0 right-0 bg-white/75 drop-shadow">
    <div class="container mx-auto p-0">
      <el-menu class="items-center py-3 bg-white/50" mode="horizontal" :ellipsis="false">
        <a href="/">
          <img src="/images/logo.png" alt="logo" class="h-[42px]" />
        </a>
        <div class="flex-grow"></div>
        <!-- ----- web start ----- -->
        <div v-for="(item, index) in menu" :key="index" class="hidden md:block">
          <el-menu-item >
            <a :href="item.link">{{ item.mainTitle }}</a>
          </el-menu-item>
        </div>
        <!-- ----- web end ----- -->
        <!-- ----- iphone start ----- -->
        <button class="menuToggle block md:hidden" @click="ckDrawer">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <!-- ----- iphone end ----- -->
      </el-menu>
    </div>
  </div>
  <el-drawer v-model="drawer" :show-close="true" size="100%">
    <template #header>
      <img src="/images/logo.png" alt="logo" class="h-[42px] object-contain" />
    </template>
    <template #default>
      <div class="flex flex-wrap gap-6 flex-col justify-around items-stretch text-center p-16">
        <template v-for="(item, index) in menu" :key="index">
            <a :href="item.link">{{ item.mainTitle }}</a>
            <hr v-if="index+1 !== menu.length" /> 
        </template>
      </div>
    </template>
  </el-drawer>
</template>

<style lang="scss">
$stone-950: rgb(12 10 9);
$stone-500: rgb(120 113 108);
$stone-400: rgb(168 162 158);
$stone-300: rgb(214 211 209);
$drop-shadow-lg: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
// el-menu
.el-menu {
  background-color: rgb(255 255 255 / 0);
}
.el-menu--horizontal > .el-sub-menu:hover .el-sub-menu__title {
  color: $stone-500;
}
.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: unset !important;
  color: unset !important;
}
.scroll-active-menu {
  color: $stone-500;
  border-bottom: solid 2px $stone-500;
}
.el-menu--horizontal {
  border-bottom: none;
}
//el-sub-menu
.el-popper.is-light {
  border-radius: 10px;
  border: 1px solid $stone-300;
  overflow: hidden;
  filter: $drop-shadow-lg;
}
// el-sub-menu hover
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: white;
  background-color: $stone-950;
}
// wl-sub-menu active
.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-sub-menu.is-active > .el-sub-menu__title {
  color: $stone-950;
  background-color: $stone-300;
}

// customer
.menuToggle {
  z-index: 1;
  span {
    display: block;
    width: 33px;
    height: 1.5px;
    margin-bottom: 8px;
    position: relative;
    background: rgb(114, 118, 123);
  }
}
</style>
