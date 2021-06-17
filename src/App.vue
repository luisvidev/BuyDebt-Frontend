<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",

  components: {
    NavBar
  },
  created() {
    this.$store.commit("changeNavBar", 0);
  },
  data: () => ({
    //
  })
};
</script>
