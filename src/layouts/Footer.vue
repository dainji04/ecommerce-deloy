<template>
  <div class="bg-black mt-[140px]">
    <div
      class="text-white grid grid-cols-5 gap-[50px] pt-20 max-w-[1170px] mx-auto max-tablet:grid-cols-1 max-tablet:mx-5 max-tablet:gap-[80px]"
    >
      <div>
        <div class="flex flex-col gap-6 mb-4">
          <h1 class="text-xl font-bold font-[inter]">Exclusive</h1>
          <h2>Subrises</h2>
          <p>Get 10% off your first order</p>
        </div>
        <div
          class="relative flex justify-center items-center max-tablet:justify-start"
        >
          <input
            class="py-3 pl-4 bg-black border-white border-2 rounded-md max-tablet:w-[100%]"
            type="text"
            placeholder="enter your email"
          />
          <img class="absolute right-3" src="@/assets/fonts/send.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h1 class="text-xl font-bold font-[inter]">Support</h1>
        <div class="flex flex-col gap-4 text-sm">
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>0907165254</p>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h1 class="text-xl font-bold font-[inter]">Account</h1>
        <div class="flex flex-col gap-4 text-sm">
          <p>My account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h1 class="text-xl font-bold font-[inter]">Quick Link</h1>
        <div class="flex flex-col gap-4 text-sm">
          <p>Privacy Policy</p>
          <p>Term of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h1 class="text-xl font-bold font-[inter]">Download App</h1>
        <div class="flex flex-col gap-4 text-sm">
          <p class="text-xs opacity-70">Save $3 with App New User Only</p>
          <div class="flex gap-2">
            <img
              class="w-[75px] h-[75px]"
              src="@/assets/images/qrcode.png"
              alt=""
            />
            <div class="flex flex-col justify-between">
              <a href="#">
                <img src="@/assets/images/chPlay.png" alt="" />
              </a>
              <a href="#">
                <img src="@/assets/images/appleStore.png" alt="" />
              </a>
            </div>
          </div>
          <div class="flex gap-6">
            <a href="https://www.facebook.com/daij.3107">
              <img src="@/assets/fonts/facebook.svg" alt="" />
            </a>
            <a href="https://x.com/_Dainji">
              <img src="@/assets/fonts/twitter.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/_dainji.31/">
              <img src="@/assets/fonts/instagram.svg" alt="" />
            </a>
            <a href="#">
              <img src="@/assets/fonts/linkedin.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[0.5px] bg-white opacity-40 mt-[60px]"></div>
    <div
      class="w-full text-white mt-4 flex justify-center items-center gap-2 pb-6"
    >
      <p>&#169;</p>
      <p>Copyright Rimel 2022. All right reserved</p>
    </div>
  </div>
</template>
