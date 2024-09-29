<template>
  <div class="max-w-[1170px] mx-auto block">
    <WishList />
    <JustForYou />
  </div>
</template>
<script>
import WishList from "@/layouts/components/WishList.vue";
import JustForYou from "@/layouts/components/JustForYou.vue";
export default {
  components: {
    WishList,
    JustForYou,
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
