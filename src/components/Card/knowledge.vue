<template>
  <div>
    <img class="w-[210px] h-[210px] mb-3" :src="name.img" :alt="name.title">
    <h2 class="text-green font-bold text-lg tracking-wider mb-3">
      {{ name.title }}
    </h2>
    <div class="w-[230px]">
      <slot name="content">
        <p class="mb-0">{{ name.content }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      typeof: Object,
      default(){
        return{
          img: null,
          title: null,
          content: null
        }
      }
    }
  }
}
</script>

<style>

</style>