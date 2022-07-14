<template>
  <v-container>
    <v-form
      @submit.prevent="submitHandler"
      ref="form"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6 mt-10">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Login in to Your Account</h4>
                      <h6 class="text-center grey--text">
                        Log in to your account so you can continue builiding
                        <br />and editing your onboarding flows
                      </h6>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field
                            label="Username"
                            v-model="username"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            :rules="usernameRule"
                            class="mt-16"
                          />
                          <v-text-field
                            label="Password"
                            v-model="password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="showPassword = !showPassword"
                            required
                            :rules="passwordRule"
                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-switch
                                label="Remember Me"
                                class="mt-n1"
                                color="indigo"
                              >
                              </v-switch>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text"
                                >Forgot password</span
                              >
                            </v-col>
                          </v-row>
                          <v-btn :loading="loading" type="submit" color="blue" dark block tile>Log in</v-btn>

                          <h5 class="text-center grey--text mt-4 mb-3">
                            Or Log in using
                          </h5>
                          <div
                            class="
                              d-flex
                              justify-space-between
                              align-center
                              mx-10
                              mb-16
                            "
                          >
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">fab fa-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">fab fa-facebook-f</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3"
                                >fab fa-twitter</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6" class="blue rounded-bl-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h3 class="text-center">Don't Have an Account Yet?</h3>
                        <h6 class="text-center">
                          Let's get you all set up so you can start creating
                          your your first<br />
                          onboarding experience
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn href="/Register" router>SIGN UP</v-btn>
                        <!-- <router-link to="/Register">SIGN UP</router-link> -->
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar top color="green" v-model="snackbar">Login success</v-snackbar>
    </v-form>
  </v-container>
</template>

<script>
import validateLoginInput from "../validation/validateLoginInput"; 
export default {
  data: () => ({
    step: 1,
    loading: false,
    snackbar: false,
    showPassword: false,
    username: '',
    password: '',
    errors: {},
    passwordRule: [
      v => !!v || 'password is required',
      v => (v && v.length >= 6) || 'Password must be 6 characters or more'
    ],
    usernameRule: [
        v => !!v || 'username is required',
      ],
  }),
  methods: {
    submitHandler() {
      let account = {
        username: this.username,
        password: this.password,
      };

      const { isInvalid, errors } = validateLoginInput(account);

      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};
        // login code
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);
        let usernameIndex = lsUsers.findIndex(
          (user) => user.username === account.username
        );
        if (usernameIndex > -1) {
          let passwordIndex = lsUsers.findIndex(
            (user) => user.password === account.password
          );

          if (passwordIndex > -1) {
            let activeUser = lsUsers.find(
              (user) => user.username === account.username
            );
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
            this.$router.push("/Home");
            window.location.reload();
          } else {
            this.errors.password = "Password does not match!";
          }
        } else {
          this.errors.username = "Username does not exist!";
        }
      }

      if(this.$refs.form.validate()) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.snackbar = true
        }, 3000)
      }
    }
  },
  props: {
    source: String,
  },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
