<template>
  <div>
    <v-btn text @click.native="cityChange">
      <span class="mr-2 ml-2">BELGRADE</span>
    </v-btn>
    <v-btn text @click.native="cityChange">
      <span class="mr-2 ml-2">ZURICH</span>
    </v-btn>
    <v-btn text @click.native="cityChange">
      <span class="mr-2 ml-2">KRUSEVAC</span>
    </v-btn>
    <v-btn text @click.native="sendMessage('testtt')">
      <span class="mr-2 ml-2">Send message to websocket</span>
    </v-btn>
    <div>{{ aqi }}</div>
  </div>


</template>

<script>

import {getSepaData} from "@/service/api";
import {CITIES} from "@/constants/constants";

export default {
name: "AirQuality",
  data() {
    return {
      aqi: 0,
      city: CITIES.KRUSEVAC,
      connection: null,
    }
  },
  async mounted() {
    console.log('mounted');
    const aaa = await getSepaData(this.city);
    this.aqi = aaa.indexes.baqi.aqi;
    console.log(aaa);
    this.connection = new WebSocket("wss://echo.websocket.org");

    this.connection.onmessage = function(event) {
      console.log(event);
    };

    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    };

  },
  methods: {
    async cityChange(e) {
      console.log(e.target.textContent);
      const city = e.target.textContent;
      const aaa = await getSepaData(CITIES[city]);
      this.aqi = aaa.indexes.baqi.aqi;
    },
    async sendMessage(message) {
      console.log(this.connection);
      this.connection.send(message);
    }
  }
}
</script>

<style scoped>

</style>