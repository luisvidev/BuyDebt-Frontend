<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-row justify="center">
            <img src="@/assets/logo.png" class="mt-5" />
          </v-row>
          <v-row justify="center">
            <v-card-title>
              Iniciar sesión en BuyDebt
            </v-card-title>
          </v-row>
          <v-card-text>
            <v-row>
              <v-col cols="12" class="headline font-weight-light ml-5">
                Corre electrónico:
              </v-col>
            </v-row>
            <v-form>
              <v-text-field
                name="login"
                prepend-icon="person"
                type="text"
                outlined
              ></v-text-field>
              <v-row>
                <v-col cols="12" class="headline font-weight-light ml-5">
                  Password:
                </v-col>
              </v-row>
              <v-text-field
                id="password"
                name="password"
                prepend-icon="lock"
                type="password"
                outlined
              ></v-text-field>
            </v-form>
            <router-link to="/" class="ml-5"
              >¿Olvidaste tu contraseña?</router-link
            >
          </v-card-text>
          <v-card-actions>
            <v-row justify="space-around" class="mb-5">
              <v-btn color="primary" text large>Registraté</v-btn>
              <v-btn color="primary" large>Ingresar</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style></style>
