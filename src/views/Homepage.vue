<template>
  <div class="flex flex-row h-screen">
    <Sidebar></Sidebar>
    <div class="flex flex-col w-5/6 overflow-hidden">
      <Header></Header>
      <div class="overflow-y-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
export default {
  name: "homepage",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, Sidebar },
};
</script>

<style></style>
