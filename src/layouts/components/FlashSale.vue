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
                  Today's
                </h2>
              </div>
              <div>
                <h1
                  class="font-[inter] text-4xl font-semibold leading-[48px] tracking-[1.44px]"
                >
                  Flash Sales
                </h1>
              </div>
            </div>
            <div
              id="date"
              class="flex items-center gap-[38px] pb-2 select-none"
            >
              <div class="flex gap-[17px] items-end">
                <div class="flex flex-col gap-1">
                  <h2 class="text-xs font-medium">Days</h2>
                  <h3
                    class="text-[32px] font-[inter] font-bold leading-[30px] tracking-[1.28px]"
                  >
                    {{ days }}
                  </h3>
                </div>
              </div>
              <div class="flex gap-[17px] items-end">
                <div class="flex flex-col gap-1">
                  <h2 class="text-xs font-medium">Hours</h2>
                  <h3
                    class="text-[32px] font-[inter] font-bold leading-[30px] tracking-[1.28px]"
                  >
                    {{ hours }}
                  </h3>
                </div>
              </div>
              <div class="flex gap-[17px] items-end">
                <div class="flex flex-col gap-1">
                  <h2 class="text-xs font-medium">Minutes</h2>
                  <h3
                    class="text-[32px] font-[inter] font-bold leading-[30px] tracking-[1.28px]"
                  >
                    {{ minutes }}
                  </h3>
                </div>
              </div>
              <div class="flex gap-[17px] items-end">
                <div class="flex flex-col gap-1">
                  <h2 class="text-xs font-medium">Seconds</h2>
                  <h3
                    class="text-[32px] font-[inter] font-bold leading-[30px] tracking-[1.28px]"
                  >
                    {{ seconds }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="p-[11px] bg-grayScale rounded-full cursor-pointer">
              <img
                loading="lazy"
                class="invert rotate-[180deg]"
                src="@/assets/fonts/arrow-right.svg"
                alt=""
              />
            </div>
            <div class="p-[11px] bg-grayScale rounded-full cursor-pointer">
              <img
                loading="lazy"
                class="invert"
                src="@/assets/fonts/arrow-right.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <div
                class="absolute top-3 left-3 px-3 py-1 bg-primary rounded-md"
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
                <a href="#" class="text-white">Add To Cart</a>
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
      <div class="w-full flex items-center justify-center my-[60px]">
        <button class="py-4 px-12 bg-primary text-white font-medium">
          Views All Products
        </button>
      </div>
    </div>
  </div>
  <div class="line w-full h-[0.5px] bg-black opacity-30"></div>
</template>
<script>
import useFetch from "@/store/fetchAPI";
export default {
  data() {
    const nameList = "flash-sales";
    const { listItems, fetchData } = useFetch();
    fetchData(nameList);
    return {
      items: listItems,
      showAddCart: false,
      days: "01",
      hours: "23",
      minutes: "19",
      seconds: "31",
      nameList,
    };
  },
  mounted() {
    let targetDate = new Date();
    targetDate.setFullYear(2024, 10, 2);
    targetDate.setHours(0, 0, 0);
    this.updateTime(targetDate);
    setInterval(() => {
      this.updateTime(targetDate);
    }, 1000);
  },
  methods: {
    calculatorSales(originalPrice, discount) {
      let discountPercent = discount / 100;
      let priceSaled = originalPrice * discountPercent;
      let resultPrice = originalPrice - priceSaled;
      return resultPrice.toFixed(2);
    },
    updateTime(targetDate) {
      const now = new Date();
      const newTime = targetDate - now;
      if (newTime <= 0) {
        this.days = "00";
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
      } else {
        this.days = Math.floor(newTime / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((newTime / (1000 * 60 * 60)) % 24);
        this.minutes = Math.floor((newTime / 1000 / 60) % 60);
        this.seconds = Math.floor((newTime / 1000) % 60);
      }
    },
    ToggleAddCart() {
      this.showAddCart = !this.showAddCart;
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
