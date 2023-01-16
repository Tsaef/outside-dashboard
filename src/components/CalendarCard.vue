<template>
  <div class="block group min-w-fit p-6 rounded-lg border-2 my-8">
    <h2 class="mb-6 text-2xl font-medium">Calendrier</h2>
    <div class="flex flex-row">
      <v-calendar class="mr-3" locale="fr-FR" :first-day-of-week="2" :attributes="attributes" />
    </div>
  </div>
</template>

<script>
export default {
  name: "calendarCard",
  data() {
    const todos = [
      {
        description: "1 quêtes terminée",
        dates: [
            new Date(2022, 11, 3),
            new Date(2022, 11, 6),
            new Date(2022, 11, 24),
            new Date(2022, 11, 28),
          ],
        fillMode: 'light',
      },
      {
        description: "2 quêtes terminées",
        dates: [
            new Date(2022, 11, 15),
            new Date(2022, 11, 20),
          ],
        fillMode: 'light',
      },
      {
        description: "3 quêtes terminées",
        dates: [
            new Date(2022, 11, 5),
          ],
        fillMode: 'light',
      },
      {
        description: "Aujourd'hui",
        dates: [
            new Date,
          ],
        fillMode: 'outline',
      },
    ];
    return {
      incId: todos.length,
      todos,
    };
  },
  computed: {
    attributes() {
      return [
        ...this.todos.map((todo) => ({
          dates: todo.dates,
          highlight: {
            color: "green",
            fillMode: todo.fillMode,
          },
          popover: {
            label: todo.description,
            visibility: 'hover'
          },
          customData: todo,
        })),
      ];
    },
  },
};
</script>
<style></style>
