<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <div>Air Quality Monitor</div>
      </div>

      <router-link to="/dashboard">
        <v-btn text>
          <span class="mr-2 ml-2">Dashboard</span>
        </v-btn>
      </router-link>
      <router-link to="/profile">
        <v-btn text>
          <span class="mr-2 ml-2">Profile</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
