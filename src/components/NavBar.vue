<template>
  <div>
    <v-app-bar :color=colorNav dense dark v-if="navbarItem != 0">
      <v-spacer></v-spacer>

      <v-btn text large to="/login">Ingresar</v-btn>

      <v-btn text large to="/register">Registrar</v-btn>
    </v-app-bar>

    <v-app-bar :color=colorNav dense dark v-else>
      <v-spacer></v-spacer>

      <v-btn text large @click="goLogin">Iniciar Sesión</v-btn>

      <v-btn text large>Contactanos</v-btn>

      <v-btn text large>Descubrir</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    navbarItem() {
      return this.$store.state.navbarItem;
    },

     colorNav() {
      var color="";
      if(this.$store.state.currentRol== "natural person"){
        color= "blue";
      }else if(this.$store.state.currentRol== "judicial person"){
        color= "purple";
      }else{
        color="#2F303A"
      }
      return color;

    },

  },
  methods: {
    goLogin() {
      this.$store.commit("changeNavBar", 1);
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
