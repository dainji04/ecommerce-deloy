<template>
  <div class="flash-sales w-full flex flex-col relative mt-20">
    <div class="w-full flex items-end justify-between">
      <div class="w-full flex justify-between items-end gap-[87px]">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-4">
            <img loading="lazy" src="@/assets/fonts/shape.svg" alt="shape" />
            <h2 class="text-primary text-base font-semibold leading-5">
              This Month
            </h2>
          </div>
          <div>
            <h1
              class="font-[inter] text-4xl font-semibold leading-[48px] tracking-[1.44px]"
            >
              Best Selling Products
            </h1>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="px-12 py-4 font-medium bg-primary rounded-md text-white">
            View All
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-[140px]">
    <div class="mt-8">
      <div class="grid grid-cols-4 gap-8">
        <div
          class="flex flex-col gap-4 w-[270px] cursor-pointer"
          v-for="item in items"
          :key="item.id"
        >
          <router-link
            :to="{
              name: 'itemsDetails',
              params: { id: item.id, nameList: nameList },
            }"
          >
            <div
              class="item w-full h-[250px] bg-grayScale rounded-md overflow-hidden outline-none border-none flex items-center justify-center relative"
            >
              <img
                loading="lazy"
                class="items-product p-[14px]"
                :src="item.img"
                alt=""
              />
              <div
                class="absolute top-3 right-3 flex flex-col justify-center gap-2"
                @click.stop.prevent="addToWishList(item, nameList)"
                @click="() => open('wish list')"
              >
                <img
                  loading="lazy"
                  class="w-12 h-12 m-[5px] p-[5px] rounded-full bg-white hover:invert cursor-pointer"
                  src="@/assets/fonts/heart.svg"
                  alt=""
                />
              </div>
              <div
                class="add-to-cart absolute bottom-0 left-50% w-full py-2 flex items-center justify-center bg-black text-white"
              >
                <a
                  @click.stop.prevent="addToCart(item, nameList)"
                  @click="() => open('cart')"
                  class="text-white w-full flex justify-center items-center hover:text-red-400"
                >
                  Add To Cart
                </a>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h2 class="font-semibold">{{ item.name }}</h2>
              <div class="flex items-center gap-3">
                <p class="text-primary font-semibold">
                  {{ calculatorSales(item.price, item.sales) }}
                </p>
                <p class="opacity-50 font-semibold line-through">
                  ${{ item.price }}
                </p>
              </div>
              <div class="flex gap-2">
                <div class="flex">
                  <img
                    loading="lazy"
                    class="w-5 h-5"
                    src="@/assets/fonts/yellow-star.svg"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    class="w-5 h-5"
                    src="@/assets/fonts/yellow-star.svg"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    class="w-5 h-5"
                    src="@/assets/fonts/yellow-star.svg"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    class="w-5 h-5"
                    src="@/assets/fonts/yellow-star.svg"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    class="w-5 h-5"
                    src="@/assets/fonts/yellow-star.svg"
                    alt=""
                  />
                </div>
                <p class="opacity-50">({{ item.stock }})</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div
      class="bg-black w-full h-[500px] grid grid-cols-2 items-center mt-[140px]"
    >
      <div class="ml-14 mr-12">
        <p class="text-[#0F6] font-semibold">categories</p>
        <h1
          class="text-white mt-8 font-[inter] text-5xl font-semibold leading-[60px] tracking-[1.92px]"
        >
          Enhance Your Music Experience
        </h1>
        <div class="flex mt-8 gap-6">
          <div
            class="bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center"
          >
            <p class="font-semibold">23</p>
            <p class="text-[11px]">Hours</p>
          </div>
          <div
            class="bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center"
          >
            <p class="font-semibold">05</p>
            <p class="text-[11px]">Days</p>
          </div>
          <div
            class="bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center"
          >
            <p class="font-semibold">59</p>
            <p class="text-[11px]">Minutes</p>
          </div>
          <div
            class="bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center"
          >
            <p class="font-semibold">35</p>
            <p class="text-[11px]">Seconds</p>
          </div>
        </div>
        <div class="mt-10">
          <button
            class="border-none outline-none px-12 py-4 rounded-md bg-[#0F6] text-white"
          >
            Buy Now!
          </button>
        </div>
      </div>
      <div class="relative w-[604px] h-[420px] flex items-center mr-11">
        <img
          loading="lazy"
          class="z-10 absolute"
          src="@/assets/images/JBL_BOOMBOX_2_HERO.png"
          alt=""
        />
        <div
          class="absolute z-0 opacity-30 rounded-[504px] bg-[#d9d9d9] blur-[100px] w-full h-full top-0"
        ></div>
      </div>
    </div>
  </div>

  <contextHolder />
</template>

<script setup>
import { notification } from "ant-design-vue";
const [api, contextHolder] = notification.useNotification();
const open = (placement) => openNotification(placement);
const openNotification = (placement) => {
  api.success({
    message: `Added success`,
    description: `click ${placement} to view item`,
  });
};
</script>

<script>
import useFetch from "@/store/fetchAPI";

export default {
  data() {
    const nameList = "best-sell";
    const { listItems, fetchData, addToCart, addToWishList } = useFetch();
    fetchData(nameList);

    return {
      items: listItems,
      nameList,
      addToCart,
      addToWishList,
    };
  },
  methods: {
    calculatorSales(originalPrice, discount) {
      let discountPercent = discount / 100;
      let priceSaled = originalPrice * discountPercent;
      let resultPrice = originalPrice - priceSaled;
      return resultPrice.toFixed(2);
    },
  },
};
</script>
<style lang="css" scoped>
#date > div:not(:last-child)::after {
  content: ":";
  color: #e07575;
  height: 42px;
  font-size: 40px;
  line-height: 48px;
}
.add-to-cart {
  display: none;
  animation: showAddToCart 0.3s ease-in;
}
.item:hover .add-to-cart {
  display: flex;
}
@keyframes showAddToCart {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
  }
}
</style>
