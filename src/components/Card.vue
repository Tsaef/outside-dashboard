<template>
  <a
    href="#"
    class="block group min-w-[20%] p-6 rounded-lg hover:bg-gray-100 border-2 border-[#DFE0EB] focus:border-2 focus:border-[#78b242] focus:shadow"
  >
    <h2
      class="mb-2 text-2xl text-center font-semibold text-[#9FA2B4] group-focus:text-[#78b242]"
    >
      {{ this.name }}
    </h2>
    <p
      class="font-bold text-5xl text-center text-gray-700 group-focus:text-[#78b242]"
    >
      {{ this.value }}
    </p>
  </a>
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
      type: String,
      default: undefined,
      required: true,
    },
  },
  name: "card",
};
</script>
<style></style>
