<template>
  <div class="mt-20 max-w-[1170px] mx-auto max-tablet:mx-3">
    <div>
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>404 Error</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div
      class="w-full flex flex-col justify-center items-center gap-10 max-tablet:mt-10"
    >
      <div class="flex flex-col justify-center items-center gap-10">
        <img class="select-none" src="@/assets/fonts/404.svg" alt="" />
        <p class="font-medium text-center">
          Your visited page not found. You may go to home page.
        </p>
        <router-link to="/">
          <button class="text-white bg-primary py-5 px-10 rounded-md">
            Back to home page
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
