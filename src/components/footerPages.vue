<template>
  <div id="app">
      <v-footer padless>
        <v-col cols="12">
          <v-card flat tile class="text-center">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="pt-0">
              Thank you for visiting my website about myself.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
              {{ new Date().getFullYear() }} — <strong>Khoa Nguyen</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
