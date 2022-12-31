<template>
  <div class="p-8 items-center place-content-between flex border-b shadow-sm">
    <h1 class="text-2xl font-semibold">{{ this.selectedTab }}</h1>
    <div class="items-center flex cursor-pointer">
      <div class="w-0 h-6 mx-10 border-l border-[#C5C7CD]"></div>
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        class="flex items-center text-m font-medium text-gray-900 rounded-full hover:text-[#547c2e] hover:bg-gray-100 md:mr-0"
        type="button"
      >
        <span class="sr-only">Open user menu</span>
        <svg
          class="w-4 h-4 mx-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Username
        <img
          class="m-1 ml-2 w-8 h-8 rounded-full object-cover"
          src="@/assets/Logo.png"
          alt="user photo"
        />
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdownAvatarName"
        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
      >
        <div class="py-3 px-4 text-sm text-gray-900 cursor-default">
          <div class="font-medium">Pro User</div>
          <div class="truncate">name@flowbite.com</div>
        </div>
        <div class="py-1">
          <router-link to="/cgu">
            <p
            class="block py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
            CGU
          </p>
        </router-link>
          <p
            :onclick="disconnectUser"
            class="block py-2 px-4 text-sm font-semibold text-gray-900 hover:bg-gray-100"
          >
            Sign out
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  name: "headerBar",
  data() {
    return {
      selectedTab: "Vue générale",
    };
  },
  methods: {
    checkPath() {
      switch (this.path) {
        case "/dashboard":
          this.selectedTab = "Vue générale";
          break;
        case "/quests":
          this.selectedTab = "Création de quête";
          break;
        case "/settings":
          this.selectedTab = "Paramètres";
          break;
        case "/subscribe":
          this.selectedTab = "Abonnement";
          break;
        default:
          console.log(`Sorry, an error occured, path: ${this.path}.`);
      }
    },
    disconnectUser() {
      alert("deco");
      this.$router.push({ name: "Login" });
      return;
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
