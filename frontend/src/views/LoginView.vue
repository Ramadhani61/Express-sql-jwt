<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      md="7"
      v-if="
        $vuetify.breakpoint.name !== 'xs' && $vuetify.breakpoint.name !== 'sm'
      "
      xs=""
      style="border-radius: 0px 0px 598px 0px"
      class="d-flex flex-column justify-center align-center gap-12 relative gradient-1"
    >
      <img
        src="https://support.avi.id/images/logo_pt__angkasa_pura_aviasi1.png "
        alt="IMG"
        class="absolute"
        width="400"
      />
    </v-col>
    <v-col
      cols="12"
      md="5"
      class="d-flex flex-column justify-center align-center"
    >
      <div
        v-if="
          $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'
        "
      >
        <img
          src="https://support.avi.id/images/logo_pt__angkasa_pura_aviasi1.png "
          alt="IMG"
          width="200"
        />
      </div>
      <div class="mb-3 mt-3" style="width: 330px">
        <div class="text-h5 font-weight-bold text-center">AVI IT SUPPORT</div>
        <div class="text-regular red--text text--level-4 text-center">
          {{ this.errorMessage }}
        </div>
      </div>
      <div class="" style="width: 330px">
        <v-form @submit.prevent="actionLogin" id="formLogin">
          <div class="d-flex flex-column gap-3">
            <label>Email</label>
            <v-text-field
              v-model="input.email"
              class=""
              background-color=""
              placeholder="Enter your email"
              :rules="[(v) => !!v || 'Required.']"
              rounded
              filled
            >
            </v-text-field>
          </div>
          <div class="d-flex flex-column gap-3">
            <div class="d-flex justify-space-between">
              <label>Password</label>
              <label class="grey--text text--level-4 cursor-pointer"
                >Forgot Password?</label
              >
            </div>
            <v-text-field
              v-model="input.password"
              class=""
              background-color=""
              placeholder="Enter your password"
              :rules="[(v) => !!v || 'Required.']"
              rounded
              filled
              :type="showPassword ? 'text' : 'password'"
            >
              <template v-slot:append>
                <v-btn
                  icon
                  @click="
                    () => {
                      showPassword = !showPassword;
                    }
                  "
                  ><v-icon>{{
                    showPassword ? "mdi-eye-off-outline" : "mdi-eye-outline"
                  }}</v-icon></v-btn
                >
              </template>
            </v-text-field>
          </div>
          <div class="d-flex justify-center">
            <v-btn
              @click.prevent="actionLogin"
              type="submit"
              rounded
              elevation="0"
              width="150"
              dark
              large
              class="primary"
              :disabled="loader"
            >
              <span class="text-large font-weight-bold">Login</span>
            </v-btn>
          </div>
        </v-form>
        <div class="text-small text-center mt-3">
          Development By Angkasa Pura Aviasi @ 2024
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loader: false,
      errorMessage: "",
      showPassword: false,
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async actionLogin() {
      this.loader = true;
      this.errorMessage = "";
      try {
        const res = await this.login(this.input);
        this.errorMessage = "";

        //
      } catch (error) {
        console.log(error);
        this.errorMessage = "Incorrect username or password.";
      } finally {
        this.loader = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
