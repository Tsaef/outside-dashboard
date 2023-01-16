<template>
  <div class="flex flex-col">
    <div class="w-full border-b">
      <router-link to="/">
        <h1 class="p-6 text-2xl font-semibold">Go back</h1>
      </router-link>
    </div>
    <div class="m-3">
      <p class="cgufont text-justify">
        <strong>Application mobile Outside : règles de confidentialité</strong><br><br><strong>Règles de
        confidentialité</strong> <br>Outside application est éditée par OUTSIDE. Le terme
        Application s'applique à l'application pour mobile ou tablette Android
        et IOS nommée « Panorama Mobile ». Nos règles de confidentialité
        expliquent quelles données nous collectons depuis l'Application et les
        raisons de cette collecte, comment nous utilisons / traitons ces
        informations et à quels tiers nous pourrions éventuellement les
        divulguer.<br><br> <strong>Données personnelles</strong><br> Depuis notre Application, nous ne
        collectons uniquement les données utilisées à l'authentification sur
        l'application tels que l'adresse mail, le prénom et le nom de famille.
        <br><br><strong>Permissions demandées par l'application</strong><br><u>Utilisation de la caméra:</u><br> Nous
        utilisons uniquement l'appareil photo pour reconnaître les différentes
        espèces et lieux. Les données utilisées par la caméra ne sont pas
        stockées, elles sont utilisées seulement pour identifier l'espèce ou le
        lieu.<br><u>Position:</u><br>Votre position approximative (réseau) ou précise (GPS et
        réseau) est transmise de façon ponctuelle ou périodique à l'application
        Outside.<br>Cette position est transmise uniquement à Outside. Nous ne
        collectons aucune information personnelle identifiable. Nous ne vendons
        pas, n'échangeons ni transférons ces informations à des tiers.
        Cependant, Outside Mobile s'appuie sur des logiciels fournis par
        d'autres éditeurs ; leurs règles de confidentialité sont aussi
        applicables.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cgu",
};
//style="background-color: blue;"
</script>
<style>
.cgufont {
  font-family: 'Times New Roman', Times, serif
}
</style>
