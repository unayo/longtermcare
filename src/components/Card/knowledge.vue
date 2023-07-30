<template>
  <div class="px-5 md:px-0 ">
    <img class="w-[160px] md:w-[210px] h-[160px] md:h-[210px] mb-3 mx-auto" :src="name.img" :alt="name.title">
    <h2 class="text-green font-bold text-lg tracking-wider mb-3">
      {{ name.title }}
    </h2>
    <div class="md:w-[230px]">
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