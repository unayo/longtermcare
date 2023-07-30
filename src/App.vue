<template>
  <div class="mt-[-100px]">
    <Menu></Menu>
    <RouterView class="overflow-hidden" />
    <Footer></Footer>
    <el-backtop :right="23" :bottom="23" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
body {
  font-family: 'Noto Sans TC', sans-serif;
}
.el-icon {
  color: #EC6C00;
}
</style>
