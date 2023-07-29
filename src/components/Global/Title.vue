<template>
<div class="flex gap-3">
  <div class="flex items-start gap-1 mt-3">
    <img src="/images/span.svg" alt="liner">
    <span class="text-green font-thin" style="writing-mode: tb">{{ name.tag }}</span>
  </div>
  <div>
    <div class="text-green font-bold text-3xl tracking-widest leading-title mb-3">
      <slot name="title">
        <h1 v-html="name.title"></h1>
      </slot>
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