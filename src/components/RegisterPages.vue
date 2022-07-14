<template>
  <v-container>
    <v-form @submit.prevent="submitHandler()" ref="form">
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
                            :rules="passwordRule"
                            color="blue"
                            autocomplete="false"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="showPassword = !showPassword"
                            required
                          />
                          <ErrorMessage name="password" />
                          <v-text-field
                            label="Confirm Password"
                            v-model="confirmpassword"
                            outlined
                            dense
                            color="blue"
                            :rules="passwordRule"
                            autocomplete="false"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="showPassword = !showPassword"
                            required
                          />
                          <v-text-field
                            label="Fullname"
                            v-model="fullname"
                            outlined
                            dense
                            :rules="fullnameRules"
                            color="blue"
                            autocomplete="false"
                            type="fullname"
                          />
                          <v-text-field
                            label="Email"
                            v-model="email"
                            outlined
                            dense
                            :rules="emailRules"
                            color="blue"
                            autocomplete="false"
                            type="email"
                          />
                          <v-text-field
                            label="Address"
                            outlined
                            v-model="address"
                            :rules="addressRules"
                            dense
                            color="blue"
                            autocomplete="false"
                          />

                          <v-radio-group v-model="radioGroup" row>
                            <v-radio label="Male" value="male" ></v-radio>
                            <v-radio label="Female" value="female" ></v-radio>
                          </v-radio-group>
                          <v-btn
                            :loading="loading"
                            type="submit"
                            color="success"
                            dark
                            block
                            tile
                            >Sign up</v-btn
                          >

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
      <v-snackbar top color="green" v-model="snackbar"
        >Sing up success</v-snackbar>
    </v-form>
  </v-container>
</template>

<script>
// import { ErrorMessage } from 'vee-validate';
// import * as yup from 'yup';
import validateRegisterInput from "../validation/validateRegisterInput";

export default {
  data() {
    return {
      step: 1,
      valid: false,
      loading: false,
      snackbar: false,
      radioGroup: "male",
      row: null,
      username: "",
      password: "",
      confirmpassword: "",
      fullname: "",
      email: "",
      address: "",
      users: [],
      errors: {},
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 20 || "Name must be less than 20 characters",
      ],
      passwordRule: [
        (v) => !!v || "password is required",
        (v) => (v && v.length >= 6) || "Password must be 6 characters or more",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "You were missing @ when entering an email",
      ],
      addressRules: [
        (v) => v.length <= 100 || "Address must be less than 100 characters",
      ],
      fullnameRules: [
        (v) => v.length <= 20 || "Full name must be less than 20 characters",
      ],
      // passwordRules: yup.string().required().min(8),
      showPassword: false,
    };
  },
  props: {
    source: String,
  },
  // components: {
  //   ErrorMessage,
  // },
  methods: {
    submitHandler() {
      let user = {
        username: this.username,
        password: this.password,
        confirmpassword: this.confirmpassword,
        email: this.email,
        fullname: this.fullname,
        address: this.address,
        gender: this.radioGroup,
      };

      const { isInvalid, errors } = validateRegisterInput(user);
      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};

        // Refresh lại ko mất local data
        // if (localStorage.users) {
        //   let lsUser = localStorage.users;
        //   this.users = JSON.parse(lsUser);
        // }

        this.users.push(user);
        // lưu dữ liệu dưới local
        localStorage.setItem("users", JSON.stringify(this.users));
        this.username = "";
        this.password = "";
        this.confirmpassword = "";
        this.email = "";
        this.fullname = "";
        this.address = "";
        this.$router.push("/login");
      }

      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.snackbar = true;
        }, 3000);
      }
    },
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
