<template>
  <div>
    <Navbar />
    <Appbar />
    <v-main class="background main">
      <v-container class="" fluid>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Appbar from "@/components/base/Appbar.vue";
import Navbar from "@/components/base/Navbar.vue";

export default {
  name: "HomeView",

  components: { Navbar, Appbar },
};
</script>
<style scoped>
.main {
  min-height: 88svh;
}
</style>
