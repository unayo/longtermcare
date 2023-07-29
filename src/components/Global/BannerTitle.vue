<template>
  <div class="absolute">
    <kinesis-element type="depth" :strength="20">
      <img class="absolute w-[261px] top-[65px] left-[38px]" src="/images/text/text1.png" alt="照顧壓力別都">
    </kinesis-element>
    <kinesis-element type="depth" :strength="15">
      <img class="absolute w-[261px] top-[30px] right-[10px]" src="/images/text/text2.png" alt="擔在自己身上">
    </kinesis-element>
      <kinesis-element :strength="80" type="translate" axis="x">
        <img class="absolute w-[293px] top-[118px] left-[38px]" src="/images/text/text3.png" alt="讓專業的來">
      </kinesis-element>
    <kinesis-element type="depth" :strength="10">
      <img class="w-[448px] top-[183px] left-[35px] absolute" src="/images/text/text-s.svg" alt="text-s">
    </kinesis-element>
    <kinesis-element type="depth" :strength="5">
      <img class="w-[594px] relative" src="/images/text/block-title.svg" alt="block">
    </kinesis-element>
  </div>
</template>

<script>
export default {
  setup(){
    return{ }
  }
}
</script>

<style>

</style>