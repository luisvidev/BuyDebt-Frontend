<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-row justify="center">
            <img src="@/assets/logo.png" class="mt-5" />
          </v-row>
          <v-row justify="center">
            <v-card-title>Iniciar sesión en BuyDebt</v-card-title>
          </v-row>
          <v-card-text>
            <v-row>
              <v-col cols="12" class="headline font-weight-light ml-5">Corre electrónico:</v-col>
            </v-row>
            <v-form>
              <v-text-field v-model="email" name="login" prepend-icon="person" type="text" outlined></v-text-field>
              <v-row>
                <v-col cols="12" class="headline font-weight-light ml-5">Password:</v-col>
              </v-row>
              <v-text-field
                v-model="password"
                id="password"
                name="password"
                prepend-icon="lock"
                type="password"
                outlined
              ></v-text-field>
            </v-form>
            <router-link to="/" class="ml-5">¿Olvidaste tu contraseña?</router-link>
          </v-card-text>
          <v-card-actions>
            <v-row justify="space-around" class="mb-5">
              <v-btn color="primary" text large>Registraté</v-btn>
              <v-btn color="primary" large @click="signin">Ingresar</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Error al iniciar sesión</v-card-title>
        <v-card-text>{{messageError}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "Login",
  data() {
    return {
      overlay: false,
      messageError: "",
      dialog: false,
      email: "",
      password: ""
    };
  },
  methods: {
    async signin() {
      this.overlay = true;
      let user = {
        email: this.email,
        password: this.password
      };
      console.log(user);

      await axios
        .post("/users/signin", user)
        .then(response => {
          if (response.status == 200) {
            var rol = response.data.rol;
            var token = response.data.accessToken;

            localStorage.setItem("jwt", token);

            this.$store.commit("updateUser", this.email);
            this.$store.commit("updateRol", rol);
            this.$store.commit("saveToken", token);

            this.overlay = false;
            if (rol == "natural person") {
              this.$router.push("/homeNaturalPerson");
            } else {
              this.$router.push("/homeJudicialPerson");
            }
          }
        })
        .catch(error => {
          if (error.response.status == 401 || error.response.status == 404) {
            this.overlay = false;
            this.messageError = error.response.data.message;
            this.dialog = true;
          } else {
            this.overlay = false;
            this.messageError = "Error en el servidor, intentelo más tarde";
            this.dialog = true;
          }
        });
    }
  }
};
</script>

<style></style>
