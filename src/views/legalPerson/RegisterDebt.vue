<template>
  <div class="pantalla">

    <div class="column1">
       <img class="positionPerson" src="./img/person4.png" height="400" width="450" />

          
    </div>

    <div class="column2">
     
     <v-card class="elevation-12">
        
          <v-card-text>
           

            <v-form>
            
            <v-row>
              <v-col  class="headline font-weight-light">Nombre de la venta:</v-col>
              <v-text-field v-model="nameDebt" name="nameDebt" type="text" outlined></v-text-field>
            </v-row>

            <v-row>
              <v-col  class="headline font-weight-light">Deudor</v-col>
              <v-text-field v-model="debtor" name="debtor" type="text" outlined></v-text-field>
            </v-row>

            <v-row>
              <v-col  class="headline font-weight-light">Valor de la deuda</v-col>
              <v-text-field v-model="valueDebt" name="valueDebt" type="text" outlined></v-text-field>
            </v-row>

             <v-row>
              <v-col  class="headline font-weight-light">Fecha del ultimo pago</v-col>
              <v-text-field v-model="datePay" name="datePay" type="date" outlined></v-text-field>
            </v-row>

             <v-row>
              <v-col  class="headline font-weight-light">Valor dispuesto a recibir</v-col>
              <v-text-field v-model="valueReceive" name="valueReceive" type="text" outlined></v-text-field>
            </v-row>
            

            </v-form>
           
          </v-card-text>
          <v-card-actions>
            <v-row justify="space-around" class="mb-5">
            
              <v-btn color="purple whiteColor" to="/listActivities" large >Publicar venta deuda</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
     
      

    </div>

  </div>
</template>

<script>
export default {
  name: "RegisterDebt",
  created() {
    this.$store.commit("changeNavBar", 0);
  },
};
</script>

<style scoped>


.whiteColor {
  color: white;
}

.pantalla{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
}
.column1{
    display: flex;
    width: 45%;
    flex-direction: column;
}
.column2{
  display: flex;
    width: 50%;
    flex-direction: column;
    margin-top: 1%;
}
.positionPerson{

    margin-top: 20%;
}
</style>
