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
              <span class="headline">{{ formTitle }}</span>
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
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
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
export default {
  name: "TabActivities",
  created() {
    this.$store.commit("changeNavBar", 0);
    this.desserts=[
        {id:"1",
         name:"hola",
         valueDebt:"2000",
         request:"2",
         state:"Pendiente",
        },
         {id:"2",
         name:"hola",
         valueDebt:"2000",
         request:"2",
         state:"Pendiente",
        },
         {id:"3",
         name:"hola",
         valueDebt:"2000",
         request:"2",
         state:"Pendiente",
        },


    ]
  },

  methods:{

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.idItem=item.id;
    },
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
