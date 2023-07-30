<template>
<div class="block md:flex gap-3">
  <div class="hidden md:flex items-start gap-1 mt-3">
    <img src="/images/span.svg" alt="liner">
    <span class="text-green font-thin" style="writing-mode: tb">{{ name.tag }}</span>
  </div>
  <div>
    <div class="text-green font-bold text-2xl md:text-3xl tracking-widest leading-titleM md:leading-title md:mb-3">
      <slot name="title">
        <h1 v-html="name.title"></h1>
      </slot>
    </div>
    <div class="block md:hidden items-start gap-1 mb-3 mt-2">
      <span class="text-green">{{ name.tag }}</span>
      <img src="/images/span-m.svg" alt="liner">
  </div>
    <slot name="content"></slot>
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
          title: null,
          tag: null
        }
      }
    }
  }
}
</script>

<style>

</style>