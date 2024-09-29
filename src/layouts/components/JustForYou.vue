<template>
  <div class="mt-20">
    <div class="flash-sales w-full flex flex-col relative">
      <div class="w-full">
        <div class="w-full flex items-end justify-between">
          <div class="flex items-end gap-[87px]">
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <img src="@/assets/fonts/shape.svg" alt="shape" />
                <h2 class="text-base font-semibold leading-5">Just For You</h2>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button
              @click="toggleShowAllItems"
              class="py-4 px-12 font-medium rounded-md border border-[#d4d4d4]"
            >
              {{ textToggle }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[60px]">
      <div id="items" class="grid grid-cols-4 gap-8">
        <div
          :class="hiddenItems"
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
                  src="@/assets/fonts/heart.svg"
                  alt=""
                />
                <img
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
                <p class="text-primary font-semibold">${{ item.price }}</p>
              </div>
              <div class="flex gap-2">
                <div class="flex">
                  <img
                    class="w-5 h-5"
                    src="@/assets/fonts/yellow-star.svg"
                    alt=""
                  />
                  <img
                    class="w-5 h-5"
                    src="@/assets/fonts/yellow-star.svg"
                    alt=""
                  />
                  <img
                    class="w-5 h-5"
                    src="@/assets/fonts/yellow-star.svg"
                    alt=""
                  />
                  <img
                    class="w-5 h-5"
                    src="@/assets/fonts/yellow-star.svg"
                    alt=""
                  />
                  <img
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
</template>
<script>
import useFetch from "@/store/fetchAPI";
export default {
  data() {
    const nameList = "just-for-you";
    const { listItems, fetchData } = useFetch();

    fetchData(nameList);
    return {
      items: listItems,
      nameList,
      hiddenItems: "hiddenItems",
      textToggle: "See All",
    };
  },
  methods: {
    toggleShowAllItems() {
      if (this.hiddenItems == "") {
        this.hiddenItems = "hiddenItems";
        this.textToggle = "See All";
      } else {
        this.hiddenItems = "";
        this.textToggle = "Hide Items";
      }
    },
  },
};
</script>
<style lang="css">
#items > .hiddenItems:nth-child(n + 5) {
  display: none;
}
</style>
