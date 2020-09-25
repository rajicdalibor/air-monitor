<template>
  <div class="ma-5 pa-10">
  <v-carousel
      cycle
      height="700"
      hide-delimiter-background
      show-arrows-on-hover
      light
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        light
    >
      <v-sheet
          height="100%"
          color="white"
          class="pa-4 sheet"
          light
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
            class="ma-5 70%"
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
        <v-row
            align="left"
            justify="center"
            class="ml-5"
        >
          <v-col cols="6">
            <checkmark />
            <div class="mt-3 air-values">77</div>
            <div class="mt-3 value-name">Air quality</div>
          </v-col>
          <v-col cols="6">
            <bad-icon />
            <div class="mt-3 air-values">77</div>
            <div class="mt-3 value-name">Humidity</div>
          </v-col>
        </v-row>
        <v-row
            align="left"
            justify="center"
            style="height: 50px"
            class="ml-5"
        >
          <v-col cols="6">
            <checkmark />
            <div class="mt-3 air-values">77</div>
            <div class="mt-3 value-name">Air pressure</div>
          </v-col>
          <v-col cols="6">
            <bad-icon />
            <div class="mt-3 air-values">77</div>
            <div class="mt-3 value-name">Temperature</div>
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
import Checkmark from "@/components/Checkmark";
import BadIcon from "@/components/BadIcon";
export default {
name: "CityCard",
  components: {BadIcon, Checkmark, Gauge },
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
 .sheet {
   max-width: 640px;
 }
 .air-values {
   font-size: 34px;
   color: #2e384d;
 }
 .value-name {
   font-size: 15px;
   color: #8798ad;
 }
</style>