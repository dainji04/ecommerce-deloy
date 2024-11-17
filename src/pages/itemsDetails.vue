<template>
  <div class="max-w-[1170px] mx-auto">
    <div v-if="item" class="max-tablet:px-4">
      <div id="road-map" class="flex items-center gap-3 my-20">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <router-link to="/"> Home </router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>{{ item.name }}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="flex w-full justify-between max-tablet:flex-col">
        <div
          class="w-[60%] max-tablet:w-full max-tablet:h-[300px] h-[600px] flex justify-center items-center bg-[#F5F5F5]"
        >
          <img loading="lazy" class="w-[calc(70%)]" :src="item.img" alt="" />
        </div>
        <div class="w-[35%] max-tablet:w-full">
          <div class="flex flex-col gap-4 mb-10">
            <div class="flex flex-col gap-4">
              <h1 class="text-2xl font-semibold">{{ item.name }}</h1>
              <div v-if="item.stock != 0">
                <p class="text-[#0F6]">In Stock</p>
              </div>
              <div v-else>out of stock</div>
              <p class="text-2xl" v-if="item.sales">
                ${{ calculatorSales(item.price, item.sales) }}
              </p>
              <p v-else class="text-2xl">${{ item.price }}</p>
            </div>
            <div>
              <p class="text-justify">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>
            <span class="border-b border-solid border-black w-full"></span>
            <div class="flex items-center gap-1">
              <label for="colors">colours: </label>
              <input type="radio" />
              <input type="radio" />
            </div>
            <div class="flex items-center text-xl">
              <p class="mr-6">Size:</p>
              <button
                class="btn w-8 h-8 border border-solid border-[#ccc] rounded"
                v-for="size in sizes"
                :key="size"
                :class="{ active: selectedSize === size }"
                @click="selectSize(size)"
              >
                {{ size }}
              </button>
            </div>
            <div class="flex items-center gap-4 mt-2">
              <div class="flex items-center">
                <div>
                  <button
                    class="btn btn--hover p-[10px] border border-solid border-[#ccc] rounded-l"
                    @click="quantity--"
                  >
                    -
                  </button>
                </div>
                <div
                  class="border-y border-[#ccc] p-[10px] w-[78px] flex justify-center"
                >
                  {{ quantity }}
                </div>
                <div>
                  <button
                    class="btn btn--hover p-[10px] border border-solid border-[#ccc] rounded-r"
                    @click="quantity++"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <button
                  class="font-medium text-base bg-primary text-white py-[10px] px-12 rounded-md"
                  @click="addToCart(item, nameList)"
                >
                  Buy Now
                </button>
              </div>
              <div class="cursor-pointer">
                <img
                  loading="lazy"
                  class="w-10 h-10 border-2 border-solid border-[#ccc] rounded-lg"
                  src="@/assets/fonts/heart.svg"
                  alt=""
                />
              </div>
            </div>
            <label class="text-red-600" for="quantity" v-if="quantity < 0"
              >quantity must be greater than 0</label
            >
          </div>
          <div
            class="pl-4 py-6 flex flex-col justify-around border border-solid border-black rounded"
          >
            <div class="flex items-center gap-4">
              <div>
                <img
                  loading="lazy"
                  class="invert"
                  src="@/assets/fonts/truck.svg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-2">
                <h1 v-if="item.price > 100">Free Delivery</h1>
                <p class="underline text-xs font-medium">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <span class="my-4 border-b border-solid border-black w-full"></span>
            <div class="flex items-center gap-4">
              <div>
                <img
                  loading="lazy"
                  class="invert"
                  src="@/assets/fonts/truck.svg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-2">
                <h1 v-if="item.price > 100">Return Delivery</h1>
                <p class="underline text-xs font-medium">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20">
        <div class="flex items-center gap-4 mb-10">
          <img loading="lazy" src="@/assets/fonts/shape.svg" alt="shape" />
          <h2 class="text-primary text-base font-semibold leading-5">
            Relateđ item
          </h2>
        </div>
        <div
          class="grid grid-cols-4 gap-8 max-tablet:grid-cols-2 max-tablet:mx-2 max-tablet:gap-4"
        >
          <div
            class="flex flex-col gap-4 w-[270px] cursor-pointer max-pc:w-[100%]"
            v-for="product in relatedItems"
            :key="product.id"
            v-show="product.id < 5"
          >
            <router-link
              v-if="product.id < 5"
              :to="{
                name: 'itemsDetails',
                params: { id: product.id, nameList: nameList },
              }"
            >
              <div
                class="item w-full h-[250px] max-tablet:h-[150px] bg-grayScale rounded-md overflow-hidden outline-none border-none flex items-center justify-center relative"
              >
                <div
                  class="absolute top-3 left-3 px-3 py-1 bg-primary rounded-md z-10"
                >
                  <p class="text-white text-xs">-{{ product.sales }}%</p>
                </div>
                <img
                  loading="lazy"
                  class="items-product p-[14px] max-tablet:max-h-[150px]"
                  :src="product.img"
                  alt=""
                />
                <div
                  class="absolute top-3 right-3 flex flex-col justify-center gap-2"
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
                  <a href="#" class="text-white">Add To Cart</a>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="font-semibold">{{ product.name }}</h2>
                <div class="flex items-center gap-3">
                  <p class="text-primary font-semibold">
                    {{ calculatorSales(product.price, product.sales) }}
                  </p>
                  <p class="opacity-50 font-semibold line-through">
                    ${{ product.price }}
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
                  <p class="opacity-50">({{ product.stock }})</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading item....</p>
    </div>
  </div>
</template>
<script>
import useFetch from "@/store/fetchAPI";
export default {
  props: ["id", "nameList"],
  data() {
    const { listItems, fetchData, addToCart } = useFetch();
    fetchData("flash-sales");
    return {
      item: null,
      relatedItems: listItems,
      sizes: ["XS", "S", "M", "L", "XL"],
      quantity: 1,
      selectedSize: null,
      addToCart,
    };
  },
  mounted() {
    // const URL = "http://localhost:3000/";
    const URL = `https://database-fake-api.vercel.app/`;
    fetch(`${URL}${this.nameList}/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.item = data))
      .catch((err) => console.log("error: " + err));
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
    },
    calculatorSales(originalPrice, discount) {
      let discountPercent = discount / 100;
      let priceSaled = originalPrice * discountPercent;
      let resultPrice = originalPrice - priceSaled;
      return resultPrice.toFixed(2);
    },
  },
};
</script>
<style scoped>
.btn + .btn {
  margin-left: 16px;
}
.btn.active,
.btn--hover:hover {
  background-color: red;
  border: 1px solid red;
  color: white;
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
