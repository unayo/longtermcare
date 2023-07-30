<template>
  <div class="absolute">
    <kinesis-element type="depth" :strength="20">
      <img class="absolute w-[192px] md:w-[261px] top-4 md:top-[53px] left-[10px] md:left-[38px]" src="/images/text/text1.png" alt="照顧壓力別都">
    </kinesis-element>
    <kinesis-element type="depth" :strength="15">
      <img class="absolute w-[186px] md:w-[261px] top-[50px] md:top-[30px] right-[14px] md:right-[22px] md:right-[10px]" src="/images/text/text2.png" alt="擔在自己身上">
    </kinesis-element>
      <kinesis-element :strength="80" type="translate" axis="x">
        <img class="absolute w-[230px] md:w-[293px] top-[88px] md:top-[118px] left-[13px] md:left-[38px]" src="/images/text/text3.png" alt="讓專業的來！">
      </kinesis-element>
    <kinesis-element type="depth" :strength="10">
      <img class="w-[283px] md:w-[448px] top-[137px] md:top-[183px] left-[21px] md:left-[35px] absolute" src="/images/text/text-s.svg" alt="4個照顧現場,讓你看見問題解方。">
    </kinesis-element>
    <kinesis-element type="depth" :strength="5">
      <img class="hidden md:block w-[594px] relative" src="/images/text/block-title.svg" alt="block">
    </kinesis-element>
    <kinesis-element type="depth" :strength="5">
      <img class="block md:hidden w-[323px] relative" src="/images/text/block-title-m.svg" alt="block">
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