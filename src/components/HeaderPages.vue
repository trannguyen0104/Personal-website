<template>
  <v-app id="inspire">
    <v-app-bar app elevation="0">
      <v-subheader
        ><h1 class="red--text">
          Personal<span class="black--text">.website</span>
        </h1>
      </v-subheader>
      <v-spacer></v-spacer>
      <v-btn href="/Home" router text rounded right background-color="transparent">Home</v-btn>
      <!-- <v-btn text rounded right background-color="transparent">Portfolio</v-btn>
      <v-btn text rounded right background-color="transparent">Blog</v-btn>
      <v-btn text rounded right background-color="transparent">Contact</v-btn> -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn router text rounded v-bind="attrs" v-on="on"> Avatar </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        href="/Login" 
        router
        text
        rounded
        right
        background-color="transparent"
        >Logout</v-btn>
      <v-btn large color="green" class="white--text ml-10">Fire me an Email</v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [{ title: "Changes Password" }, { title: "Edit profile" }],
    };
  },
};
</script>

<style>
</style>