<script>
// component
import Title from '@/components/Global/Title.vue'
import bannerTitle from '@/components/Global/BannerTitle.vue'
import Knowledge from '@/components/Card/knowledge.vue'
import Btn from '@/components/Global/Button.vue'

import { storeGlobal } from '@/stores/global.js'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import { ref, onMounted } from 'vue'


export default {
  components:{ 
    Title,
    bannerTitle,
    Knowledge,
    Btn,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  setup() {
    const items = ref([
      './images/live1.png',
      './images/live2.png',
      './images/live3.png'
    ])
    const itemsM = ref([
      './images/live1-m.png',
      './images/live2-m.png',
      './images/live3-m.png'
    ])
    const breakpoints = {
      // 300 and up
      300: {
        itemsToShow: 1.1,
        snapAlign: 'start',
      },
      // 768 and up
      768: {
        itemsToShow: 1.3,
        snapAlign: 'start',
      },
    }

    const store_Global = storeGlobal()
    onMounted(() => {
      window.addEventListener("scroll", scrollspy);
    })
    function scrollspy() {
      document.querySelectorAll(".section").forEach((e) => {
        const { y } = e.getBoundingClientRect();
        if (y < 10) {
          console.log('e.id',e.id)
          // activeLink.value = `#${e.id}`;
          store_Global.setMenu({ menuTitle: e.id})

          console.log('store_Global.menu', store_Global.menu)
          }
      });
    }

    const saerchmap = ref(true)
    const ckSearch = ()=>{
      saerchmap.value = !saerchmap.value
    }
    return { items, itemsM, breakpoints, ckSearch, saerchmap }
  }
}
</script>

<template>
<div>
  <section id="home">
    <kinesis-container>
      <div
        class="hidden md:block h-[780px] bg-cover relative"
        style=" 
          background-image: url(./images/banner-w.jpg);
        ">
        <bannerTitle class="z-[3] right-[96px] top-[220px]" />
        <a href="#term">
          <img class="absolute bottom-0 z-[3] left-[120px] bottom-[99px]" src="/images/icon--scroll.svg" alt="scroll">
        </a>
      </div>
      <div
        class="block md:hidden h-[667px] bg-cover"
        style=" 
          background-image: url(./images/banner-m.jpg);
        ">
          <bannerTitle class="z-[3] top-[430px] left-[40px]" />
      </div>
    </kinesis-container>
    <div id="term" class="container pt-10 px-5 md:px-0 md:pt-20 mt-20 mx-auto flex gap-6 justify-evenly">
      <div class="hidden md:block relative w-[460px] h-[504px]">
        <img class="absolute z-[2] w-[376px] left-[60px]" src="/images/services.png" alt="LONG TERM CARE SERVICES">
        <img class="absolute z-[1] w-[360px] top-[64px]" src="/images/block1.png" alt="block1">
      </div>
      <Title
        class="md:mt-[40px]"
        :name="{ 
          title: '長照2.0，<br/>讓照顧的路上有專業相挺',
          tag: 'LONG TERM CARE SERVICES'
        }"
      >
        <template #content>
          <p class="max-w-[402px] mb-0">
            台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。<br/>
            老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。<br/>
            「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。
            <br/><br/>
            面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！
          </p>
        </template>
      </Title>
    </div>
    <img class="ml-auto mr-[110px] pt-[70px] pr-[22px] pl-[70px]" src="/images/block2.png" alt="liner">
  </section>
  <section id="care" class="section">
    <div class="px-5 md:px-0 container pt-10 md:pt-20 mb-8 mx-auto ">
      <Title
        class="md:ms-3 pt-20"
        :name="{ 
          tag: 'LTCS LIVE'
        }"
      >
        <template #title>
          <span class='text-[#333]'>照顧現場</span>
          <br>
          預見安心變老
        </template>
      </Title>
    </div>
    <div class="ms-6 md:ms-[100px] overflow-hidden rounded-tl-3xl relative">
      <carousel class="hidden md:block" :autoplay="2000" :wrap-around="true" :breakpoints="breakpoints">
        <slide v-for="slide in items" :key="slide">
          <img :src="slide" :alt="slide">
        </slide>
        <template #addons>
          <navigation>
            <template #next>
              <img src="/images/icon--arrow.svg" alt="arrow">
            </template>
          </navigation>
          <pagination />
        </template>
      </carousel>

      <carousel class="block md:hidden" :autoplay="2000" :wrap-around="true" :breakpoints="breakpoints">
        <slide v-for="slide in itemsM" :key="slide">
          <img :src="slide" :alt="slide">
        </slide>
        <template #addons>
          <navigation>
            <template #next>
              <img src="/images/icon--arrow.svg" alt="arrow">
            </template>
          </navigation>
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
  <section id="long" class="relative section">
    <div class="px-5 md:px-0 container pt-10 md:pt-20 mb-8 mx-auto ">
      <Title
        class="container pt-20 mx-auto md:ms-3"
        :name="{ 
          tag: 'LTCS Knowledge'
        }"
      >
        <template #title>
          <span class='text-[#333]'>5分鐘一看就懂</span>
          <br>
          長照2.0
        </template>
      </Title>
    </div>
    <div class="px-5 md:px-0 container mx-auto flex flex-wrap justify-evenly relative z-[2]">
      <Knowledge
        class="mt-10 md:mt-[60px]"
        :name="{
          img: './images/know1.png',
          title: '服務對象',
          content: '經各縣市長期照顧管理中心評估，符合長照需要等級2級以上者，並符合下列之一，65歲以上老人、55歲以上原住民、50歲以上失智症者、失能身心障礙者。'
        }">
      </Knowledge>
      <Knowledge
      class="w-full md:w-[230px] mt-10 md:mt-0"
        :name="{
            img: './images/know2.png',
            title: '申請流程',
          }">
        <template #content>
          <ol>
            <li>
              <div class="flex items-center gap-2">
                <p class="block w-[20px] h-[20px] bg-green text-white flex justify-center items-center rounded-full">1</p>
                <p class="mb-0">
                  直接撥打
                  <span class="text-green">長照專線1966</span>
                </p>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-2">
                <p class="block w-[20px] h-[20px] bg-green text-white flex justify-center items-center rounded-full">2</p>
                <p class="mb-0">聯絡當地長期照顧管理中心</p>
              </div>
            </li>
            <li>
              <div class="flex gap-2">
                <p class="block min-w-[20px] min-h-[20px] w-[20px] h-[20px] max-w-[20px] max-h-[20px] bg-green text-white flex justify-center items-center rounded-full">3</p>
                <p class="mb-0">住院期間聯絡出院準備銜接長照服務小組或是線上申請</p>
              </div>
            </li>
          </ol>
        </template>
      </Knowledge>
      <Knowledge
        class="mt-10 md:mt-[60px]"
        :name="{
          img: './images/know3.png',
          title: '服務內容',
          content: '依據個案管理員擬訂照顧計畫，提供照顧及專業服務、交通接送、輔具及居家無障礙環境改善與喘息服務，四大類給付。'
        }">
      </Knowledge>
    </div>
    <div class="flex justify-center items-center gap-8">
      <img class="hidden md:block w-[430px] h-[36px] mt-[80px]" src="/images/block3.png" alt="line">
      <Btn class="mt-20 md:mt-0" :name="'了解更多長照2.0'" />
    </div>
    <img class="absolute top-[363px] md:top-[353px] z-[1] left-1/2 -translate-x-1/2 max-w-[1600px] md:max-w-full" src="/images/circle.svg" alt="bg-circle">
  </section>
  <section id="map" class="section pt-10 md:pt-20 relative z-[2] pb-20">
    <div class="px-5 md:px-0 container pt-20 mb-8 mx-auto ">
      <Title
        class="md:ps-11"
        :name="{ 
          tag: 'LTCS Map'
        }"
      >
        <template #title>
          <span class='text-[#333]'>長照地圖</span>
          <br>
          厝邊好朋友
        </template>
      </Title>
    </div>
    <div class="relative mb-20">
      <div v-if="saerchmap" class="relative z-[2] flex justify-center gap-20 pt-[130px]">
        <div class="w-[230px]">
          <img class="animate-scale1 w-[191px] mb-3" src="/images/tip1.png" alt="tip">
          <p class="text-orange">TIPS 1</p>
          <p>透過左上角篩選功能，找到適合的服務機構</p>
        </div>
        <div class="hidden md:block w-[230px] mt-[100px]">
          <img class="animate-scale2 w-[130px] mb-3" src="/images/tip2.png" alt="tip">
          <p class="text-orange">TIPS 2</p>
          <p>直接點擊地圖，定位篩選出範圍內的相關服務機構</p>
        </div>
        <div class="hidden md:block w-[230px] mt-[200px]">
          <img class="animate-scale3 w-[205px] mb-3" src="/images/tip3.png" alt="tip">
          <p class="text-orange">TIPS 3</p>
          <p>點選下方篩選列表，觀看更詳細的聯絡資訊</p>
        </div>
      </div>
      <Btn v-if="saerchmap" @click="ckSearch" class="mx-auto my-20" :name="'尋找附近的長照服務'" />
      <div v-if="!saerchmap" class="relative z-[2] flex justify-center pt-[130px]">
        <iframe
          class="h-[201px] md:h-[394px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.907545397087!2d121.5036404871582!3d25.043341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a970fd5829dd%3A0x16816469f66b278d!2z6KGb55Sf56aP5Yip6YOo55a-55eF566h5Yi2572y!5e0!3m2!1szh-TW!2stw!4v1690695622878!5m2!1szh-TW!2stw"
          width="80%" height="394" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <Btn v-if="!saerchmap" @click="ckSearch" class="mx-auto my-20" :name="'返回'" />
      <img class="absolute z-[1] top-0 left-1/2  -translate-x-1/2 md:w-[92%] h-[600px] md:h-auto" src="/images/map.png" alt="bg-map">
    </div>
  </section>
</div>
</template>

<style lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__next {
  position: absolute;
  top: 35%;
  right: 10px;
  width: 36px;
  height: 36px;
}
@media (min-width: 768px) {
  .carousel__next {
    position: absolute;
    top: 50%;
    right: 140px;
    width: 64px;
    height: 64px;
  }
}
.carousel__prev {
  display: none;
}
.carousel__pagination {
  position: absolute;
  bottom: 4%;
  left: 0;
}
@media (min-width: 768px) {
  .carousel__pagination {
    position: absolute;
    bottom: 7%;
    left: 12%;
  }
}
.carousel__pagination-button::after {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: none;
  border: 1px solid #CADEDF;
}
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
  background: #EC6C00;
  border: 1px solid #EC6C00;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: #fff0 !important;
  color: #EC6C00 !important;
}
</style>
