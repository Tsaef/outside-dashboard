<template>
  <div class="p-5 my-3 flex flex-row place-content-between">
    <Card name="Quêtes commencées" value="18"></Card>
    <Card name="Quêtes terminées" value="60"></Card>
    <Card name="Espèces photographiées" value="105"></Card>
    <Card name="Badges récupérés" value="4"></Card>
  </div>
  <div class="px-5">
    <Graph></Graph>
    <CalendarCard></CalendarCard>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Graph from "@/components/Graph.vue";
import CalendarCard from "@/components/CalendarCard.vue";
export default {
  name: "dashboard",
  components: { Card, Graph, CalendarCard },
};
</script>
<style></style>
