<template>
  <div class="max-w-[1170px] max-tablet:max-w-[360px] mx-auto">
    <div id="road-map" class="flex items-center gap-3 my-20">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>About</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="grid grid-cols-2 max-tablet:grid-cols-1 gap-8 max-tablet:gap-4">
      <div
        class="w-[552px] max-tablet:w-full h-[400px] max-tablet:h-full relative"
      >
        <div
          class="max-tablet:hidden h-full w-[calc(100%-40px)] bg-primary rounded-md absolute"
        ></div>
        <img
          class="pb-5 pl-4 max-tablet:pl-0 absolute max-tablet:relative"
          src="@/assets/images/about.png"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-center">
        <div>
          <h1 class="text-[#151875] text-4xl font-bold leading-[48px] mb-4">
            Know About Our Ecomerce Business, History
          </h1>
        </div>
        <div class="mb-16 max-tablet:mb-4">
          <p class="font-semibold leading-6 text-[#8A8FB9] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
        </div>
        <button
          class="bg-primary text-white py-2 px-8 w-fit rounded-md font-semibold text-lg"
        >
          Contact
        </button>
      </div>
    </div>
    <div class="my-[140px] flex flex-col items-center w-full">
      <div>
        <h1 class="mb-16 text-[42px] font-bold leading-6">Our Features</h1>
      </div>
      <div class="grid grid-cols-4 max-tablet:grid-cols-1 gap-7">
        <div class="flex flex-col items-center text-center gap-3">
          <img src="@/assets/fonts/struck2.svg" alt="" />
          <p class="text-[#151875] font-semibold text-[22px]">Free Delivery</p>
          <p class="text-black opacity-30 font-bold leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div class="flex flex-col items-center text-center gap-3">
          <img src="@/assets/fonts/cash.svg" alt="" />
          <p class="text-[#151875] font-semibold text-[22px]">100% Cash Back</p>
          <p class="text-black opacity-30 font-bold leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div class="flex flex-col items-center text-center gap-3">
          <img src="@/assets/fonts/quality.svg" alt="" />
          <p class="text-[#151875] font-semibold text-[22px]">
            Quality Product
          </p>
          <p class="text-black opacity-30 font-bold leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div class="flex flex-col items-center text-center gap-3">
          <img src="@/assets/fonts/call247.svg" alt="" />
          <p class="text-[#151875] font-semibold text-[22px]">24/7 Support</p>
          <p class="text-black opacity-30 font-bold leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-[70px] flex flex-col items-center">
      <div>
        <h1 class="mb-16 text-[42px] font-bold leading-6">Our Client Say!</h1>
      </div>
      <div class="flex flex-col items-center mb-[300px] max-tablet:mb-8">
        <div class="flex mb-6 gap-2">
          <img src="@/assets/images/adminPerson.png" alt="" />
          <img src="@/assets/images/adminPerson.png" alt="" />
          <img src="@/assets/images/adminPerson.png" alt="" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <h1 class="tetx-[#151875] text-[22px] font-semibold leading-6">
            Dainji Nguyen
          </h1>
          <p class="text-[#8A8FB9] text-[10px] font-semibold mb-[14px]">
            Ceo At Dainji Digital
          </p>
        </div>
        <div
          class="text-[#8A8FB9] font-bold leading-6 text-center max-w-[600px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
