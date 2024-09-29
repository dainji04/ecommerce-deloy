<template>
  <div id="Slide-and-menu" class="flex justify-between">
    <div class="relative mt-10">
      <div class="flex flex-col gap-4">
        <div
          class="flex gap-12 cursor-pointer hover:underline decoration-[#ccc]"
        >
          <h3>Woman's Fashion</h3>
          <img
            loading="lazy"
            class="rotate-[-90deg] invert"
            src="@/assets/fonts/down-arrow.svg"
            alt=""
          />
        </div>
        <div
          class="flex gap-[78px] cursor-pointer hover:underline decoration-[#ccc]"
        >
          <h3>Men's Fashion</h3>
          <img
            loading="lazy"
            class="rotate-[-90deg] invert"
            src="@/assets/fonts/down-arrow.svg"
            alt=""
          />
        </div>
        <div class="cursor-pointer hover:underline decoration-[#ccc]">
          <h2>Electronics</h2>
        </div>
        <div class="cursor-pointer hover:underline decoration-[#ccc]">
          <h2>Home & Lifestyle</h2>
        </div>
        <div class="cursor-pointer hover:underline decoration-[#ccc]">
          <h2>Medicine</h2>
        </div>
        <div class="cursor-pointer hover:underline decoration-[#ccc]">
          <h2>Sports & Outdoor</h2>
        </div>
        <div class="cursor-pointer hover:underline decoration-[#ccc]">
          <h2>Baby's & Toys</h2>
        </div>
        <div class="cursor-pointer hover:underline decoration-[#ccc]">
          <h2>Groceries & Pets</h2>
        </div>
        <div class="cursor-pointer hover:underline decoration-[#ccc]">
          <h2>Health & Beauty</h2>
        </div>
      </div>
    </div>
    <div class="ml-4 mr-11 w-[0.5px] h-[384px] opacity-30 bg-black"></div>
    <div
      class="flex justify-center w-[892px] h-[344px] mt-10 bg-black select-none relative"
    >
      <div class="ml-16 mt-[58px] text-white mr-10">
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
      <div class="w-[496px] h-[352px] mt-4 overflow-hidden">
        <img loading="lazy" src="@/assets/images/slider.png" alt="" />
      </div>
      <div
        class="flex items-center gap-3 absolute bottom-0 cursor-pointer mb-2"
      >
        <img loading="lazy" src="@/assets/fonts/dot-slide.svg" alt="" />
        <img loading="lazy" src="@/assets/fonts/dot-slide.svg" alt="" />
        <img loading="lazy" src="@/assets/fonts/red-dot-slide.svg" alt="" />
        <img loading="lazy" src="@/assets/fonts/dot-slide.svg" alt="" />
        <img loading="lazy" src="@/assets/fonts/dot-slide.svg" alt="" />
      </div>
    </div>
  </div>
</template>
