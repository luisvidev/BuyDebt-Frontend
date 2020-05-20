<template>
  <v-container>
    <br />
    <br />
    <p class="text-center display-2">Cambio de contraseña</p>
    <v-divider></v-divider>
    <br />
    <p class="headline font-weight-regular">Contraseña actual:</p>
    <v-text-field single-line solo v-model="currentPassword" type="password"></v-text-field>
    <p class="headline font-weight-regular">Nueva contraseña:</p>
    <v-text-field single-line solo v-model="password1" type="password"></v-text-field>
    <p class="headline font-weight-regular">Confirmar contraseña contraseña:</p>
    <v-text-field single-line solo v-model="password2" type="password"></v-text-field>
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <v-btn depressed large color="error" @click="cancel">Cancelar</v-btn>
      </v-col>
      <v-col>
        <v-btn depressed large color="primary" @click="savePassword">Guardar</v-btn>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{messageTitle}}</v-card-title>

        <v-card-text>{{messageText}}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ChangePassword",
  data() {
    return {
      overlay: false,
      dialog: false,
      messageTitle: "",
      messageText: "",
      currentPassword: "",
      password1: "",
      password2: ""
    };
  },
  methods: {
    cancel() {
      if (this.$store.state.currentRol === "natural person") {
        this.$router.push("/homeNaturalPerson");
      } else {
        this.$router.push("/homeJudicialPerson");
      }
    },
    savePassword() {
      this.overlay = true;
      if (this.password1 == this.password2) {
        if (this.$store.state.password == this.currentPassword) {
          let user = {
            email: this.$store.state.userEmail,
            newPassword: this.password1
          };
          axios
            .post("/changePassword", this.user)
            .then()
            .catch();
        } else {
          this.messageTitle = "Error en la contraseña actual";
          this.messageText = "La contraseña actual no coincide";
          this.overlay = false;
          this.dialog = true;
        }
      } else {
        this.messageTitle = "Las nuevas contraseñas no coinciden";
        this.messageText = "¡Las contraseñas nuevas deben coincidir!";
        this.overlay = false;
        this.dialog = true;
      }
    }
  }
};
</script>

<style>
</style>