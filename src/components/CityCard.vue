<template>
  <div class="ma-10 pa-10">
  <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
    >
      <v-sheet
          color="white"
          height="100%"
      >
        <v-row
            align="left"
            justify="center"
            style="height: 50px"
            class="ml-5"
        >
          <v-col cols="12" class="city-name">
            <div>{{ slide.name }}</div>
          </v-col>
        </v-row>
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
          <v-col cols="6">
            <gauge />
          </v-col>
          <v-col cols="6">
            <div class="air-text">Air quality looks good. You can stay outside without any restrictions</div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
import Gauge from '../components/Gauge';
import {CITIES} from "@/constants/constants";
export default {
name: "CityCard",
  components: { Gauge },
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          CITIES.KRUSEVAC,
          CITIES.BELGRADE,
          CITIES.ZURICH,
        ],
    }
  }
}
</script>

<style scoped>
 .air-text {
   font-family: Futura !important;
   font-size: 15px !important;
   color: #2e384d;
 }
 .city-name {
   font-family: Futura !important;
   font-size: 32px !important;
   color: #2e384d;
 }
</style>