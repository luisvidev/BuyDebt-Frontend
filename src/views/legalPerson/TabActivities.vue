<template>
 <v-data-table :headers=headers :items="desserts" :search="search" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Mis actividades</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer  >
           
        </v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ }">
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              color="blue"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>

          </template>
           
          <v-card>
            <v-card-title>
              <span class="headline">Detalle</span>
            </v-card-title>
            <h1></h1>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name"  label="name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.valueDebt"  label="valueDebt"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.state"  label="state"></v-text-field>
                  </v-col>
                 
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer>
                  
              </v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              
            </v-card-actions>
          </v-card>
        </v-dialog>
        
      </v-toolbar>
      <v-dialog v-model="showDismissibleAlert" max-width="290">
         <v-card>
        <v-card-title class="headline">Lo sentimos!</v-card-title>

        <v-card-text>
          {{error}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="showDismissibleAlert = false"
          >
            Aceptar
          </v-btn>
        </v-card-actions>
         </v-card>
      </v-dialog>
    </template>
    <template v-slot:item.action="{ item }">
      <div class="my-2">
        <div class="my-2">
        <v-btn small color="purple" @click="editItem(item)" >Ver detalle</v-btn>
        </div>
        
      </div>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>


  </v-data-table>


</template>

<script>
import axios from "@/plugins/axios";
export default {
  name: "TabActivities",
  created() {
    this.$store.commit("changeNavBar", 0);
   
    this.initialize();
  },

  methods:{
      close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.idItem=item.id;
    },

    async initialize(){
      this.desserts=[];

      var debts = await axios.get("/debts/" + this.$store.state.userEmail);
     
     if(debts.data.debts.length>0){
      var array=debts.data.debts;
      console.log(debts.data);
      console.log(debts);
      console.log(array.length);

      array.forEach(element => {
         const data={
                'id':element.id,
                'name':element.namedebt,
                'valueDebt':element.valuedebt,
                'request':element.requests,
                'state':element.state
               
            }
        this.desserts.push(data);
      });
     }else{
        this.desserts=[];
     }
   
 
    }

  },

  data: () => ({
      headers: [
      { text: "Id", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Valor de la deuda", value: "valueDebt" },
      { text: "Solicitudes", value: "request" },
      { text: "Estado", value: "state" },
      { text: "Ver detalle", value: "action", sortable:false },
    ],
    desserts: [],
    search: "",
    dialog: false,
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      valueDebt: "",
      request: "",
      state:"",
      detail:"",
      
    },
    defaultItem: {
      id: "",
      name: "",
      valueDebt: "",
      request: "",
      state:"",
      detail:"",
    },
    idItem:null,
    number:0,
    showDismissibleAlert: false,
    error: "",
  
  })
};
</script>

<style scoped>

.whiteColor {
  color: white;
}


</style>
