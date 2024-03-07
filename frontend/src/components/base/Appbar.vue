<template>
  <div
    :class="`${
      $vuetify.breakpoint.name == 'xs' ||
      $vuetify.breakpoint.name == 'sm' ||
      $vuetify.breakpoint.name == 'md'
        ? 'py-3 px-4'
        : 'py-8 px-10'
    }`"
    style="
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    "
    class="d-flex justify-space-between align-center sticky appbar"
  >
    <div
      v-if="
        $vuetify.breakpoint.name == 'xs' ||
        $vuetify.breakpoint.name == 'sm' ||
        $vuetify.breakpoint.name == 'md'
      "
    >
      <v-btn icon @click="setNavdrawer(inisidebar)">
        <v-icon>$ic_navbar</v-icon>
      </v-btn>
    </div>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div
          class="d-flex justify-center align-center gap-2"
          v-bind="attrs"
          v-on="on"
        >
          <div class="d-flex gap-2">
            <v-icon>$ic_user</v-icon>
            <div>Administrator</div>
          </div>
          <v-spacer />
          <v-icon>$ic_arrow_down</v-icon>
        </div>
      </template>
      <v-list dense>
        <v-list-item-group
          v-model="selectedMenu"
          class="pa-3"
          active-class="emotion--text text--sadness"
        >
          <v-list-item v-for="(item, index) in menu" :key="index">
            <v-list-item-icon>
              <v-icon>{{ item?.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      selectedMenu: null,
      menu: [{ title: "Logout", icon: "$ic_logout" }],
    };
  },
  computed: {
    ...mapState(["drawer"]),
    inisidebar: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.setDrawer(val);
      },
    },
  },
  methods: {
    ...mapActions(["setDrawer"]),
    setNavdrawer(val) {
      this.setDrawer(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.appbar {
  z-index: 12;
  border-bottom: 1px solid var(--v-accentlightgrey-base) !important;
  background-color: white;
}
</style>
