<template>
  <div class="bg-[#363741] w-1/6 min-w-fit">
    <div class="p-5 flex mx-auto items-center place-content-around">
      <img src="@/assets/Logo.png" class="w-20" />
      <p class="text-[#DDE2FF] text-xl font-semibold">Dashboard</p>
    </div>
    <router-link to="/dashboard">
      <div
        class="py-5 flex items-center cursor-pointer"
        :class="{
          'border-l-4 border-l-[#DDE2FF] bg-[#3f404a]':
            this.selectedTab === 'dashboard',
          'hover:bg-[#3f404a]': this.selectedTab !== 'dashboard',
        }"
      >
        <font-awesome-icon
          icon="fa-solid fa-chart-pie"
          :class="{
            'mx-8 text-[#DDE2FF]': this.selectedTab === 'dashboard',
            'mx-8 text-[#A4A6B3]': this.selectedTab !== 'dashboard',
          }"
        />
        <p
          class="text-lg"
          :class="{
            'text-[#DDE2FF] font-semibold': this.selectedTab === 'dashboard',
            'text-[#A4A6B3] font-medium': this.selectedTab !== 'dashboard',
          }"
        >
          Vue générale
        </p>
      </div>
    </router-link>
    <router-link to="/quests">
      <div
        onclick=""
        class="py-5 flex items-center cursor-pointer"
        :class="{
          'border-l-4 border-l-[#DDE2FF] bg-[#3f404a]':
            this.selectedTab === 'creator',
          'hover:bg-[#3f404a]': this.selectedTab !== 'creator',
        }"
      >
        <font-awesome-icon
          icon="fa-solid fa-route"
          :class="{
            'mx-8 text-[#DDE2FF]': this.selectedTab === 'creator',
            'mx-8 text-[#A4A6B3]': this.selectedTab !== 'creator',
          }"
        />
        <p
          class="text-lg"
          :class="{
            'text-[#DDE2FF] font-semibold': this.selectedTab === 'creator',
            'text-[#A4A6B3] font-medium': this.selectedTab !== 'creator',
          }"
        >
          Quêtes
        </p>
      </div>
    </router-link>
    <router-link to="/subscribe">
      <div
        onclick=""
        class="py-5 flex items-center cursor-pointer"
        :class="{
          'border-l-4 border-l-[#DDE2FF] bg-[#3f404a]':
            this.selectedTab === 'subscribe',
          'hover:bg-[#3f404a]': this.selectedTab !== 'subscribe',
        }"
      >
        <font-awesome-icon
          icon="fa-solid fa-medal"
          :class="{
            'mx-8 text-[#DDE2FF]': this.selectedTab === 'subscribe',
            'mx-8 text-[#A4A6B3]': this.selectedTab !== 'subscribe',
          }"
        />
        <p
          class="text-lg"
          :class="{
            'text-[#DDE2FF] font-semibold': this.selectedTab === 'subscribe',
            'text-[#A4A6B3] font-medium': this.selectedTab !== 'subscribe',
          }"
        >
          Abonnement
        </p>
      </div>
    </router-link>
    <div class="my-3 h-0 w-full border-t border-[#40414b]"></div>
    <router-link to="/settings">
      <div
        onclick=""
        class="py-5 flex items-center cursor-pointer"
        :class="{
          'border-l-4 border-l-[#DDE2FF] bg-[#3f404a]':
            this.selectedTab === 'settings',
          'hover:bg-[#3f404a]': this.selectedTab !== 'settings',
        }"
      >
        <font-awesome-icon
          icon="fa-solid fa-gear"
          :class="{
            'mx-8 text-[#DDE2FF]': this.selectedTab === 'settings',
            'mx-8 text-[#A4A6B3]': this.selectedTab !== 'settings',
          }"
        />
        <p
          class="text-lg"
          :class="{
            'text-[#DDE2FF] font-semibold': this.selectedTab === 'settings',
            'text-[#A4A6B3] font-medium': this.selectedTab !== 'settings',
          }"
        >
          Paramètres
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  name: "sidebar",
  data() {
    return {
      selectedTab: "dashboard",
    };
  },
  methods: {
    checkPath() {
      switch (this.path) {
        case "/dashboard":
          this.selectedTab = "dashboard";
          break;
        case "/quests":
          this.selectedTab = "creator";
          break;
        case "/settings":
          this.selectedTab = "settings";
          break;
        case "/subscribe":
          this.selectedTab = "subscribe";
          break;
        default:
          console.log(`Sorry, an error occured, path: ${this.path}.`);
      }
    },
  },
  setup() {
    const route = useRoute();
    const path = computed(() => route.path);
    return { path };
  },
  watch: {
    "$route.params.search": {
      handler: function () {
        this.checkPath();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style></style>
