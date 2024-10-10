<template>
  <div class="max-w-[1170px] mx-auto relative mt-[140px]">
    <img
      class="absolute top-0 left-0"
      src="@/assets/fonts/clockOrder.svg"
      alt=""
    />
    <div class="flex flex-col justify-center items-center">
      <img src="@/assets/fonts/complete.svg" alt="" />
      <h1 class="mt-8 text-[#101750] text-4xl font-bold">
        Your Order Is Complete
      </h1>
      <p
        class="max-w-[710px] text-[#8D92A7] text-center font-semibold leading-7 mt-7"
      >
        Thank you for your order! Your order is being processed and will be
        completed within 3-6 hours. You will receive an email confirmation when
        your order is completed.
      </p>
      <button class="mt-10 bg-primary py-3 px-5 text-white rounded-md">
        <router-link to="/">Continue Shopping</router-link>
      </button>
    </div>
    <img
      class="absolute bottom-0 right-0"
      src="@/assets/fonts/note.svg"
      alt=""
    />
  </div>
</template>
