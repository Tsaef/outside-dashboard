<template>
  <div class="block p-6 h-1/5">
    <h2 class="text-2xl text-center font-medium text-[#9FA2B4]">
      {{ this.name }}
    </h2>
    <p class="mt-1 font-semibold text-4xl text-center text-gray-700">
      {{ this.value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: undefined,
      required: true,
    },
    value: {
      type: Number,
      default: undefined,
      required: true,
    },
  },
  name: "subCard",
};
</script>
<style></style>
