<template>
  <div class="main">
    <v-container>
      <v-row>
        <v-col>
          <img src="./img/person1.png" height="400" width="500" />
        </v-col>
        <v-col>
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
</style>
