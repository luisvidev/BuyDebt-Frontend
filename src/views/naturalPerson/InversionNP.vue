<template>
  <v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs6>
          <v-text-field v-model="label" label="Search by category" append-icon="search"></v-text-field>
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
          v-for="inversion in filtering"
          :key="inversion.id"
        >
          <v-img src="../../assets/agriculture.jpg" height="200px"></v-img>

          <v-card-title>Publicado por: {{ inversion.userid}}</v-card-title>
          <v-card-title class="subtitle-1 font-weight-medium">Deudor: {{ inversion.debtor}}</v-card-title>
          <v-card-title class="subtitle-1 font-weight-medium">Valor: {{ inversion.valuedebt}}</v-card-title>

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
import axios from "@/plugins/axios";
export default {
  name: "InversionNP",
  data() {
    return {
      inversions: [],
      label:""
    };
  },
  methods:{
    async init(){
      try{
           var response = await axios.get(
              "/debts/debt"
            );
            console.log(response);
            this.inversions = this.inversions.concat(response.data.data);
        }catch(error){

        }
    },
  },
  computed: {
    filtering() {
      return this.inversions.filter(el => el.category.match(this.label))
    }
  },
  mounted: function () { this.init() },
  
};
</script>

<style>
</style>