<template>
  <v-container>
    <v-row justify="center" class="my-10">
      <img src="@/assets/logo.png" />
      <div class="ml-5 display-1">BuyDebt</div>
    </v-row>
    <v-row justify="center">
      <v-card color="light-green accent-3" width="600" height="400">
        <v-row justify="center">
          <div class="display-1">
            <font color="white">Registraté</font>
          </div>
        </v-row>
        <v-row justify="center">
          <div class="title" dark>
            <font color="white">¿Eres una persona natural o jurídia?</font>
          </div>
        </v-row>
        <v-row justify="space-around">
          <v-col cols="6">
            <v-row justify="center">
              <v-btn width="200" height="150" text to="/registerNaturalPerson">
                <img src="@/assets/userIcon.png" width="80" />
              </v-btn>
            </v-row>
            <v-row justify="center">
              <div class="title">
                <font color="white">Persona natural</font>
              </div>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row justify="center">
              <v-btn width="200" height="150" text to="/registerJudicialPerson">
                <img src="@/assets/enterpriseIcon.png" width="80" />
              </v-btn>
            </v-row>
            <v-row justify="center">
              <div class="title">
                <font color="white">Persona jurídica</font>
              </div>
            </v-row>
          </v-col>
        </v-row>
        <v-row justify="center">
          <div class="title">
            <font color="white">¿Ya tienes cuenta? Inicia sesión</font>
            <router-link to="/login">aquí</router-link>
          </div>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  created() {
    this.$store.commit("changeNavBar", 1);
  },
};
</script>

<style></style>
