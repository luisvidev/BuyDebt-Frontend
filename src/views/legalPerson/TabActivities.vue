<template>
 <v-data-table :headers=headers :items="desserts" :search="search" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Usuarios</v-toolbar-title>
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
                    <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.lastName"  label="Apellido"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email"  label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.role"  label="Rol"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.password"  label="Contraseña" type="password"></v-text-field>
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
        <v-btn small color="success" @click="editItem(item)" >Editar</v-btn>
        </div>

        <div class="my-2">
        <v-btn small color="red" @click="deleteItem(item)" >Eliminar</v-btn>
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
  },

  data: () => ({
      headers: [
      { text: "Nombre", value: "name" },
      { text: "Apellido", value: "lastName" },
      { text: "Email", value: "email" },
      { text: "Password", value: "password" },
      { text: "Rol", value: "role" },
      { text: "# Mensajes", value: "number" },
      { text: "Estado", value: "state" },
    ],
    desserts: [],
    search: "",
    dialog: false,
  })
};
</script>

<style scoped>

.whiteColor {
  color: white;
}


</style>
