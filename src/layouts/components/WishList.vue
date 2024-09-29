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
              class="py-4 px-12 font-medium rounded-md border border-[#d4d4d4]"
            >
              Move All To Bag
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[60px]">
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
              <img class="items-product p-[14px]" :src="item.img" alt="" />
              <div
                class="absolute top-3 right-3 flex flex-col justify-center gap-2"
              >
                <img
                  class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                  src="@/assets/fonts/delete.svg"
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
                <p class="text-primary font-semibold">${{ item.price }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useFetch from "@/store/fetchAPI";
export default {
  data() {
    const nameList = "our-products";
    const { listItems, lengthList, fetchData } = useFetch();
    fetchData(nameList);

    return {
      items: listItems,
      nameList,
      lengthItems: lengthList,
    };
  },
};
</script>
<style lang=""></style>
