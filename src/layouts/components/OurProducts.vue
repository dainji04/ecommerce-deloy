<template>
  <div class="mt-[140px]">
    <div class="flash-sales w-full flex flex-col relative">
      <div class="w-full">
        <div class="w-full flex items-end justify-between">
          <div class="flex items-end gap-[87px]">
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <img
                  loading="lazy"
                  src="@/assets/fonts/shape.svg"
                  alt="shape"
                />
                <h2 class="text-primary text-base font-semibold leading-5">
                  Our Products
                </h2>
              </div>
              <div>
                <h1
                  class="font-[inter] text-4xl font-semibold leading-[48px] tracking-[1.44px]"
                >
                  Explore Our Products
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <div
        class="grid grid-cols-4 gap-8 max-tablet:grid-cols-2 max-tablet:mx-2 max-tablet:gap-4"
      >
        <div
          class="flex flex-col gap-4 w-[270px] cursor-pointer max-pc:w-[100%]"
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
              class="item w-full h-[250px] max-tablet:h-[150px] bg-grayScale rounded-md overflow-hidden outline-none border-none flex items-center justify-center relative"
            >
              <img
                loading="lazy"
                class="items-product p-[14px] max-tablet:max-h-[150px]"
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
                  class="w-12 h-12 max-tablet:w-6 max-tablet:h-6 m-[5px] p-[5px] rounded-full bg-white hover:invert cursor-pointer"
                  src="@/assets/fonts/heart.svg"
                  alt=""
                />
              </div>
              <div
                class="add-to-cart absolute bottom-0 left-50% w-full py-2 flex items-center justify-center bg-black"
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
                <p class="text-primary font-semibold">${{ item.price }}</p>
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
      <div class="w-full flex items-center justify-center my-[60px]">
        <router-link
          :to="{ name: 'allProducts', params: { nameList: nameList } }"
        >
          <button class="py-4 px-12 bg-primary text-white font-medium">
            Views All Products
          </button>
        </router-link>
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
    const nameList = "our-products";
    const { listItems, fetchData, addToCart, addToWishList } = useFetch();
    fetchData(nameList);
    return {
      items: listItems,
      showAddCart: false,
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
