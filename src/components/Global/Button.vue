<template>
  <button class="overflow-hidden btn w-[260px] md:w-[330px] h-[48px] md:h-16 rounded-full bg-green flex gap-3 justify-items-center items-center relative z-[10]">
    <span class="ms-10 font-bold text-white">{{ name }}</span>
    <div class="absolute right-0 w-[48px] md:w-16 h-[48px] md:h-16 bg-[#CADEDF] rounded-full flex justify-items-center items-center">
      <img class="mx-auto" src="/images/icon--arrow-g.svg" alt="arrow">
    </div>
    <div class="circle absolute w-[48px] md:w-16 h-[48px] md:h-16 bg-orange rounded-full flex justify-items-center items-center">
      <img class="mx-auto" src="/images/icon--arrow-w.svg" alt="arrow">
    </div>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      defailt(){
        return null
      }
    }
  }
}
</script>

<style lang="scss">
.btn {
  .circle {
    transition: all .5s ease-out;
    left: -64px;
    img {
      opacity: 0;
    }
  }
  &:hover {
    .circle {
      left: calc(100% - 48px);
      img {
        opacity: 1;
        transition-delay: .5s;
      }
    }
    @media (min-width: 768px) {
      .circle {
        left: calc(100% - 4rem);
      }
    }
  }
}
</style>