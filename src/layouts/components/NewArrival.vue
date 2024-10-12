<template>
  <div class="mt-[140px] mb-[60px]">
    <div class="flash-sales w-full flex flex-col relative mt-20">
      <div class="w-full flex items-end justify-between">
        <div class="w-full flex justify-between items-end gap-[87px]">
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <img loading="lazy" src="@/assets/fonts/shape.svg" alt="shape" />
              <h2 class="text-primary text-base font-semibold leading-5">
                Featured
              </h2>
            </div>
            <div>
              <h1
                class="font-[inter] text-4xl font-semibold leading-[48px] tracking-[1.44px]"
              >
                New Arrival
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-5 max-tablet:grid-cols-1">
    <div class="bg-black relative flex justify-center">
      <img
        loading="lazy"
        class="absolute bottom-0 z-0 max-tablet:relative"
        src="@/assets/images/ps5-playstation5.png"
        alt=""
      />
      <div
        class="grid text-white mt-auto ml-8 mb-8 z-10 absolute left-0 bottom-0 w-[242px] gap-4"
      >
        <h2 class="text-2xl font-[inter] font-semibold">PlayStation 5</h2>
        <p class="text-[14px]">
          Black and White version of the PS5 coming out on sale.
        </p>
        <a class="underline decoration-[#ccc]" href="#">Shop Now</a>
      </div>
    </div>
    <div class="grid grid-rows-2 gap-5">
      <div class="bg-black flex relative">
        <img
          loading="lazy"
          class="ml-auto"
          src="@/assets/images/woman-collections.png"
          alt=""
        />
        <div class="text-white absolute bottom-6 left-6 w-[255px] grid gap-4">
          <h2 class="text-2xl font-[inter] font-semibold">
            Women's Collections
          </h2>
          <p class="text-[14px]">
            Featured woman collections that give you another vibe.
          </p>
          <a class="underline decoration-[#ccc]" href="#">Shop Now</a>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <div class="bg-black flex items-center justify-center relative">
          <img loading="lazy" src="@/assets/images/speakers.png" alt="" />
          <div
            class="text-white absolute bottom-6 left-6 w-[255px] grid gap-2 max-tablet:w-[150px]"
          >
            <h2 class="text-2xl font-[inter] font-semibold">Speakers</h2>
            <p class="text-[14px]">Amazon wireless speakers</p>
            <a class="underline decoration-[#ccc]" href="#">Shop Now</a>
          </div>
        </div>
        <div class="bg-black flex items-center justify-center relative">
          <img loading="lazy" src="@/assets/images/gucci_perfume.png" alt="" />
          <div
            class="text-white absolute bottom-6 left-6 w-[255px] grid gap-2 max-tablet:w-[150px]"
          >
            <h2 class="text-2xl font-[inter] font-semibold">Perfume</h2>
            <p class="text-[14px]">GUCCI INTENSE OUD EDP</p>
            <a class="underline decoration-[#ccc]" href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="mt-[140px] flex items-center justify-center gap-[88px] max-tablet:flex-col"
  >
    <div class="flex flex-col justify-center items-center gap-6">
      <div class="w-20 h-20 relative flex justify-center items-center">
        <img
          loading="lazy"
          class="absolute"
          src="@/assets/fonts/borderArrival.svg"
          alt=""
        />
        <img
          loading="lazy"
          class="absolute"
          src="@/assets/fonts/truck.svg"
          alt=""
        />
      </div>
      <div class="grid gap-2 justify-center items-center">
        <h1 class="text-xl font-semibold">FREE AND FAST DELIVERY</h1>
        <p class="text-sm">Free delivery for all orders over $140</p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-6">
      <div class="w-20 h-20 relative flex justify-center items-center">
        <img
          loading="lazy"
          class="absolute"
          src="@/assets/fonts/borderArrival.svg"
          alt=""
        />
        <img
          loading="lazy"
          class="absolute"
          src="@/assets/fonts/headphones2.svg"
          alt=""
        />
      </div>
      <div class="grid gap-2 justify-center items-center">
        <h1 class="text-xl font-semibold">24/7 CUSTOMER SERVICE</h1>
        <p class="text-sm">Friendly 24/7 customer support</p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-6">
      <div class="w-20 h-20 relative flex justify-center items-center">
        <img
          loading="lazy"
          class="absolute"
          src="@/assets/fonts/borderArrival.svg"
          alt=""
        />
        <img
          loading="lazy"
          class="absolute"
          src="@/assets/fonts/security.svg"
          alt=""
        />
      </div>
      <div class="grid gap-2 justify-center items-center">
        <h1 class="text-xl font-semibold">MONEY BACK GUARANTEE</h1>
        <p class="text-sm">We reurn money within 30 days</p>
      </div>
    </div>
  </div>
</template>
