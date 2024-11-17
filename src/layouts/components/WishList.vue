<template lang="">
  <div class="mt-20">
    <div class="flash-sales w-full flex flex-col relative">
      <div class="w-full">
        <div class="w-full flex items-end justify-between">
          <div class="flex items-end gap-[87px]">
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <h2 class="text-base font-semibold leading-5">
                  Wishlist ({{ lengthItems }})
                </h2>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button
              class="py-4 px-12 font-medium rounded-md border border-[#d4d4d4] hover:bg-primary hover:text-white"
              @click="moveAllToBag()"
            >
              Move All To Bag
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[60px]">
      <div class="grid grid-cols-4 max-tablet:grid-cols-2 gap-8">
        <div
          class="flex flex-col gap-4 w-full cursor-pointer"
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
              <img class="items-product p-[14px]" :src="item.img" alt="" />
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
            </div>
          </router-link>
        </div>
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
    const nameList = "wish-list";
    const { listItems, lengthList, fetchData, deleteData, addToCart } =
      useFetch();
    fetchData(nameList);
    let items = listItems;
    return {
      items,
      nameList,
      lengthItems: lengthList,
      deleteData,
      addToCart,
    };
  },
  methods: {
    removeItem(index) {
      this.deleteData(this.nameList, index);
      setTimeout(() => {
        const { listItems, fetchData } = useFetch();
        console.log(listItems);
        fetchData(this.nameList);
        this.items = listItems;
        console.log(listItems);
      }, 1000);
    },
    moveAllToBag() {
      const { addToCart, deleteData } = useFetch();
      for (let i in this.items) {
        addToCart(this.items[i], this.nameList);
        deleteData(this.nameList, this.items[i].id);
        setTimeout(() => {
          const { listItems, fetchData } = useFetch();
          console.log(listItems);
          fetchData(this.nameList);
          this.items = listItems;
          console.log(listItems);
        }, 1000);
      }
    },
  },
};
</script>
