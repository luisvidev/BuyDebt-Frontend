<template>
  <div class="main">
    <v-container>
      <v-row>
        <v-col>
          <v-row class="my-1">
            <img src="@/assets/logo.png" />
            <div class="ml-4 display-1 whiteColor">BuyDebt</div>
          </v-row>
          <img class="my-12" src="./img/person1.png" height="400" width="500" />
        </v-col>
        <v-col cols="12" sm="4">
          <div>
            <p class="font-weight-medium whiteColor sizeTitle">¡Invierte y gana!</p>
            <p
              class="font-weight-light whiteColor"
            >Compra deuda o adelanta flujos futuros al presenta</p>
          </div>

          <div class="my-2">
            <v-btn
              class="whiteColor"
              color="light-green accent-3"
              @click="goRegister"
              large
            >¡Registrate ya!</v-btn>
          </div>
          <img src="./img/person2.png" height="500" width="400" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LandsPage",
  created() {
    this.$store.commit("changeNavBar", 0);
  },
  methods: {
    goRegister() {
      this.$store.commit("changeNavBar", 1);
      this.$router.push("/register");
    }
  }
};
</script>

<style scoped>
.main {
  background-image: url("./img/LandsPage.jpg");
  background-blend-mode: color;
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.whiteColor {
  color: white;
}
.sizeTitle {
  font-size: 30px;
}
</style>
