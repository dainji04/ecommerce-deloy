<template>
  <div id="Slide-and-menu" class="flex justify-between">
    <div class="slide flex gap-4 min-w-[892px] h-[344px] mt-10">
      <div
        class="item justify-center max-tablet:justify-start max-tablet:w-full"
      >
        <div
          class="ml-16 max-tablet:ml-2 mt-[58px] max-tablet:mt-2 text-white mr-10 z-10"
        >
          <div class="flex items-center gap-6">
            <img loading="lazy" src="@/assets/images/logo-apple.png" alt="" />
            <h3>Iphone 14 series</h3>
          </div>
          <div class="mt-5 w-[300px]">
            <h1
              class="font-[inter] text-5xl font-semibold leading-[60px] tracking-[1.92px] not-italic"
            >
              Up to 10% off Voucher
            </h1>
          </div>
          <div class="select-auto">
            <a
              href="#"
              class="flex items-center gap-2 mt-[22px] hover:underline decoration-[#ccc]"
              >Shop Now
              <img loading="lazy" src="@/assets/fonts/arrow-right.svg" alt=""
            /></a>
          </div>
        </div>
        <div
          class="w-[496px] h-[352px] mt-4 overflow-hidden max-tablet:absolute"
        >
          <img loading="lazy" src="@/assets/images/slider.png" alt="" />
        </div>
      </div>
      <div
        class="item justify-center max-tablet:justify-start max-tablet:w-full"
      >
        <div
          class="ml-16 max-tablet:ml-2 mt-[58px] max-tablet:mt-2 text-white mr-10 z-10"
        >
          <div class="flex items-center gap-6">
            <img loading="lazy" src="@/assets/images/logo-apple.png" alt="" />
            <h3>Iphone 15 Pro</h3>
          </div>
          <div class="mt-5 w-[300px]">
            <h1
              class="font-[inter] text-5xl font-semibold leading-[60px] tracking-[1.92px] not-italic"
            >
              Up to 10% off Voucher
            </h1>
          </div>
          <div class="select-auto">
            <a
              href="#"
              class="flex items-center gap-2 mt-[22px] hover:underline decoration-[#ccc]"
              >Shop Now
              <img loading="lazy" src="@/assets/fonts/arrow-right.svg" alt=""
            /></a>
          </div>
        </div>
        <div
          class="w-[496px] h-[352px] mt-4 overflow-hidden max-tablet:absolute"
        >
          <img loading="lazy" src="@/assets/images/iphone15pro.png" alt="" />
        </div>
      </div>
      <div
        class="item justify-center max-tablet:justify-start max-tablet:w-full"
      >
        <div
          class="ml-16 max-tablet:ml-2 mt-[58px] max-tablet:mt-2 text-white mr-10 z-10"
        >
          <div class="flex items-center gap-6">
            <img loading="lazy" src="@/assets/images/logo-apple.png" alt="" />
            <h3>Iphone 16 Pro</h3>
          </div>
          <div class="mt-5 w-[300px]">
            <h1
              class="font-[inter] text-5xl font-semibold leading-[60px] tracking-[1.92px] not-italic"
            >
              Up to 10% off Voucher
            </h1>
          </div>
          <div class="select-auto">
            <a
              href="#"
              class="flex items-center gap-2 mt-[22px] hover:underline decoration-[#ccc]"
              >Shop Now
              <img loading="lazy" src="@/assets/fonts/arrow-right.svg" alt=""
            /></a>
          </div>
        </div>
        <div
          class="w-[496px] h-[352px] mt-4 overflow-hidden max-tablet:absolute"
        >
          <img loading="lazy" src="@/assets/images/iphone16pro.png" alt="" />
        </div>
      </div>
      <div
        class="item justify-center max-tablet:justify-start max-tablet:w-full"
      >
        <div
          class="ml-16 max-tablet:ml-2 mt-[58px] max-tablet:mt-2 text-white mr-10 z-10"
        >
          <div class="flex items-center gap-6">
            <img loading="lazy" src="@/assets/images/logo-apple.png" alt="" />
            <h3>Macbook Air M2</h3>
          </div>
          <div class="mt-5 w-[300px]">
            <h1
              class="font-[inter] text-5xl font-semibold leading-[60px] tracking-[1.92px] not-italic"
            >
              Up to 10% off Voucher
            </h1>
          </div>
          <div class="select-auto">
            <a
              href="#"
              class="flex items-center gap-2 mt-[22px] hover:underline decoration-[#ccc]"
              >Shop Now
              <img loading="lazy" src="@/assets/fonts/arrow-right.svg" alt=""
            /></a>
          </div>
        </div>
        <div
          class="w-[496px] h-[352px] mt-4 overflow-hidden max-tablet:absolute"
        >
          <img loading="lazy" src="@/assets/images/macbookm2.png" alt="" />
        </div>
      </div>
      <div
        class="item justify-center max-tablet:justify-start max-tablet:w-full"
      >
        <div
          class="ml-16 max-tablet:ml-2 mt-[58px] max-tablet:mt-2 text-white mr-10 z-10"
        >
          <div class="flex items-center gap-6">
            <img loading="lazy" src="@/assets/images/logo-apple.png" alt="" />
            <h3>Mac Mini</h3>
          </div>
          <div class="mt-5 w-[300px]">
            <h1
              class="font-[inter] text-5xl font-semibold leading-[60px] tracking-[1.92px] not-italic"
            >
              Up to 10% off Voucher
            </h1>
          </div>
          <div class="select-auto">
            <a
              href="#"
              class="flex items-center gap-2 mt-[22px] hover:underline decoration-[#ccc]"
              >Shop Now
              <img loading="lazy" src="@/assets/fonts/arrow-right.svg" alt=""
            /></a>
          </div>
        </div>
        <div
          class="w-[496px] h-[352px] mt-4 overflow-hidden max-tablet:absolute"
        >
          <img loading="lazy" src="@/assets/images/macmini.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const nameList = ref("flash-sales");
    const intervalId = ref(null);

    const prev = () => {
      const list = document.querySelectorAll(".slide > .item");
      document.querySelector(".slide").prepend(list[list.length - 1]);
    };

    const next = () => {
      const list = document.querySelectorAll(".slide > .item");
      document.querySelector(".slide").appendChild(list[0]);
    };

    onMounted(() => {
      intervalId.value = setInterval(() => {
        next();
      }, 5000);
    });

    onUnmounted(() => {
      clearInterval(intervalId.value);
    });

    return {
      nameList,
      prev,
      next,
    };
  },
};
</script>
<style lang="css" scoped>
.slide {
  width: max-content;
}
.item {
  height: 370px;
  width: 1170px;
  transition: 1s;
  position: absolute;
  display: flex;
  background-color: #000;
  border-radius: 5px;
  user-select: none;
}
.item:nth-child(1) {
  transform: translate(-210%);
  opacity: 0;
}
.item:nth-child(2) {
  transform: translate(-105%);
  opacity: 0;
}
.item:nth-child(3) {
  transform: translate(0);
}
.item:nth-child(4) {
  transform: translate(105%);
  opacity: 0;
}
.item:nth-child(5) {
  transform: translate(210%);
  opacity: 0;
}
</style>
