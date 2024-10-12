<template>
  <div class="browse-items max-tablet:hidden">
    <div>
      <div class="flash-sales w-full flex flex-col relative mt-20">
        <div
          class="w-full flex items-end justify-between max-tablet:justify-center"
        >
          <div class="w-full flex justify-between items-end gap-[87px]">
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <img
                  loading="lazy"
                  src="@/assets/fonts/shape.svg"
                  alt="shape"
                />
                <h2 class="text-primary text-base font-semibold leading-5">
                  Categories
                </h2>
              </div>
              <div>
                <h1
                  class="font-[inter] text-4xl font-semibold leading-[48px] tracking-[1.44px]"
                >
                  Browse By Category
                </h1>
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
    </div>
    <div class="list-media flex gap-8 mt-[60px]">
      <div>
        <img loading="lazy" src="@/assets/fonts/phones.svg" alt="" />
        <p>Phones</p>
      </div>
      <div>
        <img loading="lazy" src="@/assets/fonts/computer.svg" alt="" />
        <p>computer</p>
      </div>
      <div>
        <img
          loading="lazy"
          class="w-14 h-14"
          src="@/assets/fonts/appleWatch.svg"
          alt=""
        />
        <p>appleWatch</p>
      </div>
      <div :class="clicked + 3">
        <img
          loading="lazy"
          class="invert"
          src="@/assets/fonts/camera.svg"
          alt=""
        />
        <p>camera</p>
      </div>
      <div>
        <img loading="lazy" src="@/assets/fonts/headphones.svg" alt="" />
        <p>headphones</p>
      </div>
      <div>
        <img loading="lazy" src="@/assets/fonts/gaming.svg" alt="" />
        <p>gaming</p>
      </div>
    </div>
    <div class="h-[0.5] w-full bg-black opacity-30 my-[70px]"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clicked: "clicked",
    };
  },
};
</script>
<style scoped>
.list-media > div {
  width: 170px;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
}
.clicked,
.clicked3 {
  background: #db4444 !important;
  color: white !important;
}
.clicked3 > img {
  filter: invert(0);
}
.clicked > img {
  filter: invert(100);
}
</style>
