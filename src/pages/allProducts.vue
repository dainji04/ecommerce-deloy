<template>
  <div class="mt-8 max-w-[1170px] mx-auto">
    <div
      class="grid grid-cols-4 gap-8 max-tablet:grid-cols-2 max-tablet:mx-2 max-tablet:gap-4"
    >
      <template
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
            class="item w-full h-[250px] bg-grayScale rounded-md overflow-hidden outline-none border-none flex items-center justify-center relative"
          >
            <div
              class="absolute top-3 left-3 px-3 py-1 bg-primary rounded-md"
              v-if="item.sales > 0"
            >
              <p class="text-white text-xs">-{{ item.sales }}%</p>
            </div>
            <img
              loading="lazy"
              class="items-product p-[14px]"
              :src="item.img"
              alt=""
            />
            <div
              class="absolute top-3 right-3 flex flex-col justify-center gap-2"
            >
              <img
                loading="lazy"
                class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                src="@/assets/fonts/heart.svg"
                alt=""
              />
              <img
                loading="lazy"
                class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                src="@/assets/fonts/eye.svg"
                alt=""
              />
            </div>
            <div
              class="add-to-cart absolute bottom-0 left-50% w-full py-2 flex items-center justify-center bg-black"
            >
              <a
                @click.stop.prevent="addToCart(item)"
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
      </template>
    </div>
  </div>
</template>

<script>
import useFetch from "@/store/fetchAPI";
export default {
  props: ["nameList"],
  data() {
    const { listItems, fetchData } = useFetch();
    fetchData(this.nameList);
    return {
      items: listItems,
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
.item:hover > img {
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
