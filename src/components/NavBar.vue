<template>
  <div>
    <!-- landsPage -->
    <v-app-bar :color="colorNav" dense dark v-if="navbarItem == 0">
      <v-spacer></v-spacer>

      <v-btn text large @click="goLogin">Iniciar Sesión</v-btn>

      <v-btn text large>Contactanos</v-btn>

      <v-btn text large>Descubrir</v-btn>
    </v-app-bar>

    <!-- Register  and login -->
    <v-app-bar :color="colorNav" dense dark v-if="navbarItem == 1">
      <v-spacer></v-spacer>

      <v-btn text large to="/login">Ingresar</v-btn>

      <v-btn text large to="/register">Registrar</v-btn>
    </v-app-bar>

    <!-- Natural person -->
    <v-app-bar :color="colorNav" dense dark v-if="navbarItem == 2">
      <v-icon class="mx-8">monetization_on</v-icon>
      <v-toolbar-title>Persona natural</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text large @click="goLogin">Inicio</v-btn>

      <v-btn text large>Mis inversiones</v-btn>

      <v-btn text large>Mi perfil</v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/">
            <v-list-item-title>Editar perfil</v-list-item-title>
          </v-list-item>
          <v-list-item to="/login">
            <v-list-item-title>Cambiar contraseña</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Judicial person -->
    <v-app-bar :color="colorNav" dense dark v-if="navbarItem == 3">
      <v-icon class="mx-8">monetization_on</v-icon>
      <v-toolbar-title>Persona judicial</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text large @click="goLogin">Inicio</v-btn>

      <v-btn text large>Mis actividades</v-btn>

      <v-btn text large>Mi perfil</v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/">
            <v-list-item-title>Editar perfil</v-list-item-title>
          </v-list-item>
          <v-list-item to="/login">
            <v-list-item-title>Cambiar contraseña</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
      var color = "";
      if (
        this.$store.state.currentRol == "natural person" ||
        this.navbarItem == 2
      ) {
        color = "#0BCDE8";
      } else if (
        this.$store.state.currentRol == "judicial person" ||
        this.navbarItem == 3
      ) {
        color = "purple";
      } else if (this.navbarItem == 0) {
        color = "#2F303A";
      } else if (this.navbarItem == 1) {
        color = "blue";
      }
      return color;
    }
  },
  methods: {
    goLogin() {
      this.$store.commit("changeNavBar", 1);
      this.$router.push("/login");
    },
    logout() {
      localStorage.removeItem("jwt");
      this.$store.commit("changeNavBar", 1);
      this.$store.commit("clearToken");
      this.$store.commit("updateRol", "");
      this.$store.commit("updateUser", "");
      this.$store.commit("updatePassword", "");
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
