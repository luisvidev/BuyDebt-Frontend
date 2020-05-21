<template>
  <v-container class="pantalla">
    <v-card width="500" class="column1 mx-12 mt-8 px-4" color="#2F303A">
      <v-card-title class="justify-center">
        <h1 class="display-1 white--text font-weight-medium mt-11">Bienvenido</h1>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle class="justify-center">
        <p
          class="title white--text text-center"
        >Ahora podras realizar busquedas de las diferentes carteras que estan siendo subastadas en estos momentos.</p>
      </v-card-subtitle>

      <v-card-actions class="mb-4">
        <h1 class="display-2 white--text text-center mb-8">No esperes más, inicia Ya!</h1>
      </v-card-actions>
      <v-btn class="white--text" color="deep-purple accent-4 mx-10" to="/listProducts">Vamos!</v-btn>
    </v-card>
    <div class="column2 mt-2">
      <img src="./img/person2.png" height="500" width="400" />
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeNP"
};
</script>

<style scoped>
.pantalla {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 40px;
  height: 500px;
}
.column1 {
  display: flex;
  width: 45%;
  flex-direction: column;
  align-content: center;
  border-radius: 60px;
}
.column2 {
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-top: 10%;
}

.row1 {
  display: flex;
  width: 50%;
  flex-direction: row;
}
.row2 {
  display: flex;
  width: 50%;
  flex-direction: row;
  margin-top: 30px;
}
</style>