<template>
  <v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs6>
          <v-text-field label="Search" append-icon="search"></v-text-field>
        </v-flex>
        <v-flex xs2>
          <img src="../../assets/logo.png" />
        </v-flex>
        <v-flex xs2>
          <h1>BuyDebt</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-card
          class="mx-auto mb-6 pb-2"
          max-width="344"
          v-for="inversion in inversions"
          :key="inversion.id"
        >
          <v-img src="../../assets/agriculture.jpg" height="200px"></v-img>

          <v-card-title>Publicado por: {{ inversion.owner}}</v-card-title>
          <v-card-title class="subtitle-1 font-weight-medium">Deudor: {{ inversion.owner_debt}}</v-card-title>
          <v-card-title class="subtitle-1 font-weight-medium">Valor: {{ inversion.value}}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" text-color="white" class="white--text">Ofertar</v-btn>

            <v-btn color="dark green">Ver más</v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "InversionNP",
  data() {
    return {
      inversions: [
        {
          id: 0,
          owner: "juan pablo",
          owner_debt: "La 13",
          value: 50000000
        },
        {
          id: 0,
          owner: "Luis Cruces",
          owner_debt: "La 14",
          value: 50000000
        },
        {
          id: 0,
          owner: "Jaiver Orozco",
          owner_debt: "Exito S.A",
          value: 50000000
        },
        {
          id: 0,
          owner: "juan pablo",
          owner_debt: "La 13",
          value: 50000000
        },
        {
          id: 0,
          owner: "Luis Cruces",
          owner_debt: "La 14",
          value: 50000000
        },
        {
          id: 0,
          owner: "Jaiver Orozco",
          owner_debt: "Exito S.A",
          value: 50000000
        }
      ]
    };
  }
};
</script>

<style>
</style>