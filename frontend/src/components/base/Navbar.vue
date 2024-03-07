<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      width="290"
      style="
        top: 60px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
          rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      "
    >
      <v-list v-if="!mini">
        <v-list-item
          class="d-flex justify-center align-center"
          :class="`${
            $vuetify.breakpoint.name == 'xs' ||
            $vuetify.breakpoint.name == 'sm' ||
            $vuetify.breakpoint.name == 'md'
              ? 'mt-2'
              : 'pa-6 mt-7'
          }`"
        >
          <div style="">
            <img
              src="https://support.avi.id/images/logo_pt__angkasa_pura_aviasi1.png "
              alt="IMG"
              class=""
              width="200"
            />
          </div>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list dense class="mt-6" :rounded="!mini ? true : false">
        <v-list-item-group
          v-model="selectedMenu"
          class=""
          active-class="emotion--text text--sadness"
        >
          <v-list-item v-for="(item, i) in items" :key="i" class="mb-2">
            <v-list-item-icon>
              <v-icon>{{ item?.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="font-weight-medium">{{
                item?.title
              }}</v-list-item-title>
            </v-list-item-content>
            <v-spacer />
            <v-btn icon @click.stop="mini = !mini" v-if="i == 0">
              <v-icon>$ic_arrow_left</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      // drawer: true,
      selectedMenu: "",
      items: [
        { title: "Dashboard", icon: "$ic_dashboard" },
        { title: "Activity", icon: "$ic_activity" },
      ],
      mini: false,
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
  },
};
</script>

<style lang="scss" scoped></style>
