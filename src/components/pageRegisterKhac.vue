<template>
  <v-form v-model="valid" @submit.prevent="registerUser">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6 mt-10">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h3 class="text-center">Sign Up for an Account</h3>
                      <h6 class="text-center grey--text">
                        Let's get you all set up so you can start creatin your
                        <br />
                        first onboarding experiance
                      </h6>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field
                            label="Username"
                            v-model="username"
                            outlined
                            :rules="nameRules"
                            dense
                            required
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Password"
                            v-model="password"
                            outlined
                            dense
                            :rules="passRules"
                            color="blue"
                            autocomplete="false"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="showPassword = !showPassword"
                            required
                          />
                          <v-text-field
                            label="Confirm Password"
                            v-model="confirmpassword"
                            outlined
                            dense
                            color="blue"
                            :rules="passRules"
                            autocomplete="false"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="showPassword = !showPassword"
                            required
                          />
                          <v-text-field
                            label="Email"
                            v-model="email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="email"
                          />
                          <v-text-field
                            label="Address"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-row>
                            <v-col cols="12" sm="8">
                              <v-checkbox
                                label="Male"
                                class="mt-n1"
                                color="blue"
                                outlined
                                checked
                              >
                              </v-checkbox>
                              <v-checkbox
                                label="Female"
                                class="mt-n1"
                                color="blue"
                                outlined
                                checked
                              >
                              </v-checkbox>
                            </v-col>
                          </v-row>
                          <v-btn color="success" dark block tile>Sign up</v-btn>

                          <h5 class="text-center grey--text mt-4 mb-3">
                            Or Sign up using
                          </h5>
                          <div
                            class="
                              d-flex
                              justify-space-between
                              align-center
                              mx-10
                              mb-11
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
                        <h2 class="text-center">Please login</h2>
                        <h4 class="text-center">
                          if you already have an account
                        </h4>
                      </v-card-text>
                      <div class="text-center">
                        <!-- <router-link :to="{ name: 'Login' }" tag="button" class="btn btn-default">LOG IN</router-link> -->
                        <v-btn href="/Login" router>LOG IN</v-btn>
                        <!-- <router-link to="/Login" tile outlined dark @click="step++">LOG IN</router-link> -->
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import validateRegisterInput from '../validation/validateRegisterInput'
export default {
  data: () => ({
    step: 1,
    valid: false,
    username: "",
    password: "",
    confirmpassword: "",
    email: '',
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 20 || "Name must be less than 20 characters",
    ],
    passRules: [
        (v) => !!v || "Password is required"
    ],
    showPassword: false,
  }),
  props: {
    source: String,
  },
  methods: {
      registerUser() {
        let user = {
          username: this.username,
          password: this.password,
          email: this.email,
          confirmpassword: this.confirmpassword,
        }

        const { isInvalid, err} = validateRegisterInput(user);
      },
      validateConfirmPassword() {
       
      }
  }
}
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
