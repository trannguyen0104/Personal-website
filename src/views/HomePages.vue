<template>
  <v-app>
    <!-- <header-pages></header-pages> -->
    <v-main style="background-color: #f5f5f5" class="main">
      <section class="intro-section" id="home">
        <v-row class="align-center px-10" style="height: 690px">
          <v-col lg="6" cols="6" class="pa-6 font-weight-bold py-16">
            <h2 class="display-3">
              <span class="green--text">Front-end</span>
              <span class="pink--text">Developer</span>
            </h2>
            <v-subheader>
              Hi, I am Nguyen, focusing on creating emotional experiences.
            </v-subheader>
            <v-row class="mt-16">
              <v-chip class="px-4 ma-3" color="primary">
                <v-icon left size="20">mdi-facebook</v-icon>
                Facebook
              </v-chip>
              <v-chip class="px-4 ma-3 white--text" color="#01ff56">
                <v-icon left size="20">mdi-email</v-icon>
                Email
              </v-chip>
              <v-chip class="px-4 ma-3" color="info">
                <v-icon left size="20">mdi-phone</v-icon>
                Mobile Phone
              </v-chip>
              <v-chip class="px-4 ma-3" color="dark">
                <v-icon left size="20">mdi-github</v-icon>
                Github
              </v-chip>
            </v-row>
          </v-col>
          <v-col lg="4" cols="6">
            <v-img
              src="@/assets/image1.jpg"
              height="450px"
              width="350px"
            ></v-img>
          </v-col>
        </v-row>
      </section>

      <section class="about-me" id="about">
        <v-img
          class="pa-10"
          height="400"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          src="https://designshack.net/wp-content/uploads/Home-office.jpg"
        >
          <v-row justify="center" class="align-center">
            <v-col lg="6" cols="6">
              <v-card
                class="text-center pa-6 rounded-lg"
                color="#e1e0e0c9"
                elevation="6"
              >
                <v-card-subtitle class="green--text"
                  >ABOUT MYSELF</v-card-subtitle
                >
                <h2 class="display-1 font-weight-regular">
                  I am a trainee who is currently an intern at TMA company. I am
                  about to graduate from college and have a lot of plans for my
                  future
                </h2>
              </v-card>
            </v-col>
            <v-col lg="6" cols="6">
              <v-card class="pa-6 rounded-lg" color="#e1e0e0c9" elevation="6">
                <div class="py-1" v-for="(item, index) in items" :key="index">
                  <label>{{ item.title }}</label>
                  <v-progress-linear
                    :color="item.color"
                    height="10"
                    :value="item.value"
                  ></v-progress-linear>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-img>
      </section>

      <section class="educaion py-6">
        <v-container>
          <h4 class="display-2 text-center">Education</h4>
          <v-row class="py-8">
            <v-col cols="12" lg="6">
              <v-card class="pa-6 rounded-xl" elevation="5">
                <div class="d-flex align-center justify-space-between">
                  <div class="">
                    <h2>Go college</h2>
                    <span>August 2018 - May 2022</span>
                  </div>
                  <a class="green--text" href="https://www.hutech.edu.vn/"
                    >at HUTECH University</a
                  >
                </div>
                <v-card-text>
                  I have studied for four years at hutech university in the
                  department of information technology, majoring in software
                  engineering. During my four years of study, I have acquired a
                  lot of useful and necessary knowledge and equipped with the
                  knowledge needed for the future.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6">
              <v-card class="pa-6 rounded-xl" elevation="5">
                <div class="d-flex align-center justify-space-between">
                  <div class="">
                    <h2>Join the internship program</h2>
                    <span>May 2022 - Present</span>
                  </div>
                  <a class="green--text" href="https://www.tma.vn/"
                    >at TMA Solutions</a
                  >
                </div>
                <v-card-text>
                  I was fortunate enough to participate in the internship
                  program at TMA Solutions. After I joined, I trained in some
                  parts that I don't know yet. Learning many things, getting
                  acquainted with the working environment of the business, .....
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="experiance py-6">
        <v-img
          class="pa-10"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          src="https://designshack.net/wp-content/uploads/Home-office.jpg"
        >
          <v-container>
            <h4 class="display-2 text-center">Experience</h4>
            <v-timeline>
              <v-timeline-item
                v-for="(exper, index) in experience"
                :key="index"
                :color="index % 2 === 0 ? 'orange' : 'yellow'"
              >
                <v-card class="rounded-xl">
                  <v-card-title :color="index % 2 === 0 ? 'orange' : 'yellow'">
                    {{ exper.title }}
                  </v-card-title>
                  <v-card-text>
                    <b>{{ exper.date }}</b
                    ><br />
                    <b>@ {{ exper.institute }}</b
                    ><br />
                    {{ exper.decription }}
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-container>
        </v-img>
      </section>
      <header-pages></header-pages>
      <footer-pages></footer-pages>
    </v-main>
  </v-app>
</template>

<script>
import FooterPages from "../components/footerPages.vue";
import HeaderPages from "../components/HeaderPages.vue";
export default {
  components: { HeaderPages, FooterPages },
  data: () => ({
    drawer: null,
    items: [
      { title: "HTML", value: 90, color: "light-blue" },
      { title: "CSS", value: 90, color: "deep-orange" },
      { title: "Javascript", value: 70, color: "light-green" },
      { title: "Vuejs", value: 70, color: "blue" },
      { title: "Vuetify", value: 50, color: "black" },
    ],
    experience: [
      {
        title: "Course projects - C#",
        date: "March 2020",
        institute: "HUTECH",
        decription:
          "This is a project when I was in college. This project is called a website selling shoes. It has the full functionality of a website. My group consists of 5 members.",
      },
      {
        title: "Course projects - MERN Stack",
        date: "March 2021 - May 2021",
        institute: "HUTECH",
        decription:
          "This was a project when I was in college. This project is called a car rental website. It has the full functionality of a website. My group is made up of 5 members.",
      },
      {
        title: "Course projects - PHP",
        date: "March 2021 - May 2021",
        institute: "HUTECH",
        decription:
          "This was a project when I was in college. This project is called a car rental website. It has the full functionality of a website. My group is made up of 5 members.",
      },
      {
        title: "C# + Vuejs projects",
        date: "August 2021- February 2022",
        institute: ".... Company",
        decription:
          "This is the first real project that I have been involved in. I have learned many new things from this project.",
      },
      {
        title: "Vuejs projects",
        date: "May 2022 - present",
        institute: "TMA Solutions",
        decription:
          "This is the second real project that I have been involved in. I have learned many new things from this project.",
      },
    ],
  }),
};
</script>

<style>
.v-tab.active-tab {
  color: #e91e63;
}

.v-tab.active-tab::before {
  background-color: #4caf50;
}

.main .v-application--wrap {
  min-height: unset !important;
}
</style>