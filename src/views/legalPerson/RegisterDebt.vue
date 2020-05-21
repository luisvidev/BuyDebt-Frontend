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
              <v-text-field v-model="valueDebt" name="valueDebt" type="number" outlined></v-text-field>
            </v-row>

             <v-row>
              <v-col  class="headline font-weight-light">Fecha del ultimo pago</v-col>
              <v-text-field v-model="datePay" name="datePay" type="date" outlined></v-text-field>
            </v-row>

             <v-row>
              <v-col  class="headline font-weight-light">Valor dispuesto a recibir</v-col>
              <v-text-field v-model="valueReceive" name="valueReceive" type="number" outlined></v-text-field>
            </v-row>

             <v-row>
              <v-col  class="headline font-weight-light">Categoria</v-col>
              <v-text-field v-model="category" name="category" type="text" outlined></v-text-field>
            </v-row>
            

            </v-form>
           
          </v-card-text>
          <v-card-actions>
            <v-row justify="space-around" class="mb-5">
            
              <v-btn color="purple whiteColor" @click="register" large >Publicar venta deuda</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
     
      

    </div>

  </div>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "RegisterDebt",

  data(){
    return {
      nameDebt:"",
      debtor:"",
      valueDebt:"",
      datePay:"",
      valueReceive:"",
      category:""


    };
  },
  methods:{
     async register() {

        console.log(this.nameDebt, this.debtor,this.valueDebt, this.datePay,this.valueReceive);

        let debt = {
          //id:1,
          namedebt: this.nameDebt,
          debtor: this.debtor,
          valuedebt: this.valueDebt,
          datepay: this.datePay,
          valuereceive: this.valueReceive,
          state: "",
          category: this.category,
          requests:0,
          userid:this.$store.state.userEmail
        };
        try{
           var response = await axios.post(
              "/debts/debt",
              debt
            );
            this.$router.push("/listActivities");
        }catch(error){

        }
        

     }
  },
  created() {
    //this.$store.commit("changeNavBar", 3);
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
