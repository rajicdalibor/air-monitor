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
      city: CITIES.KRUSEVAC
    }
  },
  async mounted() {
    console.log('mounted');
    const aaa = await getSepaData(this.city);
    this.aqi = aaa.indexes.baqi.aqi;
    console.log(aaa);
  },
  methods: {
    async cityChange(e) {
      console.log(e.target.textContent);
      const city = e.target.textContent;
      const aaa = await getSepaData(CITIES[city]);
      this.aqi = aaa.indexes.baqi.aqi;
    }
  }
}
</script>

<style scoped>

</style>