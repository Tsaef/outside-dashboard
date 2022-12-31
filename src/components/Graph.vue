<template>
  <div
    class="block min-w-fit bg-white rounded-lg border-2 border-[#DFE0EB] focus:border-2 focus:border-[#78b242] focus:shadow"
  >
    <div class="flex flex-row">
      <div class="ml-4 p-6 w-2/3 min-w-fit">
        <h2 class="mb-2 text-2xl font-medium">Historique d'accomplissment</h2>
        <apexchart width="850" type="area" :options="options" :series="series">
          ></apexchart
        >
      </div>
      <div class="border-l-2 w-1/3 flex flex-col divide-y-2 h-full">
        <SubCard name="Quêtes commencées" value="18"></SubCard>
        <SubCard name="Quêtes terminées" value="60"></SubCard>
        <SubCard name="Espèces photographiées" value="105"></SubCard>
        <SubCard name="Distance parcourue" value="3km"></SubCard>
        <SubCard name="Nombre de pas" value="3510"></SubCard>
      </div>
    </div>
  </div>
</template>

<script>
//Graph Library
import VueApexCharts from "vue3-apexcharts";
import SubCard from "./SubCard.vue";
function formatDate(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date = mm + "/" + dd + "/" + yyyy;
  return date;
}
function Last7Days() {
  const result = [];
  for (var i = 0; i < 7; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    result.push(formatDate(d));
  }
  return result.reverse();
}
export default {
  name: "graph",
  components: {
    SubCard,
    apexchart: VueApexCharts,
  },
  methods: {},
  created() {
    /* const date = this.Last7Days();
    console.log(date);
    return date; */
  },
  data: () => ({
    options: {
      colors: ["#4278b2", "#78b242"],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset:
              '<img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png" width="20">',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: Last7Days(),
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
    },
    series: [
      {
        name: "Quêtes commencées",
        data: [3, 4, 2, 5, 4, 10, 8],
      },
      {
        name: "Quêtes terminées",
        data: [1, 3, 4, 3, 3, 5, 4],
      },
    ],
  }),
};
</script>
<style></style>
