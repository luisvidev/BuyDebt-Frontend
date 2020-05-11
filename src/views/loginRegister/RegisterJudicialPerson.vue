<template>
  <v-container>
    <v-row>
      <v-btn text large to="/register" primary>Volver</v-btn>
    </v-row>
    <v-row justify="center" class="my-10">
      <img src="@/assets/logo.png" />
      <div class="ml-5 display-1">BuyDebt</div>
    </v-row>
    <v-row justify="center">
      <v-card color="white" width="600" height="600">
        <v-toolbar color="light-green accent-3" height="100">
          <v-row justify="center">
            <img src="@/assets/enterpriseIcon.png" width="80" />
          </v-row>
          <v-row justify="center">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-row>
        </v-toolbar>

        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
          class="mx-10 my-10"
        >
          <v-text-field
            v-model="nit"
            :rules="nitRules"
            label="Nit"
            required
          ></v-text-field>

          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="Teléfono"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password1"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña"
            hint="Al menos 5 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-text-field
            v-model="password2"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[
              passwordRules.required,
              passwordRules.min,
              passwordRules.equals,
            ]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirmar contraseña"
            hint="Al menos 5 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Acepto Terminos y condiciones"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="register"
            >Registrar</v-btn
          >
        </v-form>
      </v-card>
    </v-row>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{ titleDialog }}</v-card-title>

        <v-card-text>
          {{ messageDialog }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "RegisterJudicialPerson",
  data() {
    return {
      overlay: false,
      dialog: false,
      titleDialog: "",
      messageDialog: "",
      valid: true,
      nit: "",
      nitRules: [
        (v) => !!v || "El NIT es requerido",
        //(v) => typeof v === "number" || "El NIT debe ser un número",
      ],
      phone: "",
      phoneRules: [
        (v) => !!v || "El número telefónico es requerido",
        //(v) => typeof v === "number" || "El campo debe ser un número",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "El correo electrónico es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo electrónico debe ser válido",
      ],
      show1: false,
      show2: false,
      password1: "Password",
      password2: "Password",
      passwordRules: {
        required: (value) => !!value || "La contraseña debe ser requerida",
        min: (v) => v.length >= 5 || "Mínimo 5 caracteres",
        equals: (v) => v == this.password1 || "Las contraseñas no coinciden",
      },
      checkbox: false,
      lazy: false,
    };
  },
  methods: {
    async register() {
      if (this.password1 === this.password2) {
        let judicialPerson = {
          email: this.email,
          password: this.password1,
          rol: "judicial person",
          nit: this.nit,
          phone: this.phone,
        };
        this.overlay = true;
        try {
          var response1 = await axios.get("/users/" + judicialPerson.email);
          console.log("aqui");
          console.log(response1);
          console.log(response1.data.user == null);
          if (response1.data.user == null) {
            var response2 = await axios.post(
              "/users/judicialPerson",
              judicialPerson
            );
            this.titleDialog = "Error en el registro";
            this.messageDialog =
              "El usuario con el email " +
              this.email +
              " ya se encuentra registrado en la aplicación.";
            this.overlay = false;
            this.$router.push("/login");
          } else {
            this.titleDialog = "Error en el registro";
            this.messageDialog =
              "El usuario con el email " +
              this.email +
              " ya se encuentra registrado en la aplicación.";
            this.overlay = false;
            this.dialog = true;
          }
        } catch (error) {
          console.log(error);
          this.titleDialog = "Error en la conexión";
          this.messageDialog =
            "El servidor presenta problemas (500). Intente ingresar más tarde.";
          this.overlay = false;
          this.dialog = true;
        }
      } else {
        this.titleDialog = "Error";
        this.messageDialog =
          "Las contraseñas no coinciden. Por favor, digitelas de nuevo.";
        this.dialog = true;
      }
    },
  },
};
</script>

<style></style>
